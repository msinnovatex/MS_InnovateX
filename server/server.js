import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname=path.dirname(fileURLToPath(import.meta.url));
const ROOT=path.resolve(__dirname,'..');
const DIST=path.join(ROOT,'dist');
const PORT=Number(process.env.PORT||10000);
const DB=String(process.env.FIREBASE_DATABASE_URL||'').replace(/\/$/,'');
const PROJECT=String(process.env.FIREBASE_PROJECT_ID||'');
const EMAIL=String(process.env.FIREBASE_CLIENT_EMAIL||'');
const KEY=String(process.env.FIREBASE_PRIVATE_KEY||'').replace(/\\n/g,'\n');
const ADMIN_USER=String(process.env.ADMIN_USERNAME||'admin');
const ADMIN_PASS=String(process.env.ADMIN_PASSWORD||'');
const ORIGINS=String(process.env.FRONTEND_ORIGIN||'').split(',').map(x=>x.trim()).filter(Boolean);
const TTL=8*60*60*1000;
const sessions=new Map();
const attempts=new Map();
const submissionAttempts=new Map();
let accessToken='';
let accessExpiry=0;

const defaults={
 meta:{
  global:{title:'MS InnovateX Pvt. Ltd. | Innovating Today, Building Tomorrow',description:'MS InnovateX provides digital solutions, professional email marketing and practical technology training to help businesses grow and students build successful careers.',keywords:'MS InnovateX, software development, web development, mobile apps, email marketing, internship, technology training, Bhubaneswar, Odisha',ogImage:'/assets/logo.png'},
  pages:{
   '/':{title:'MS InnovateX Pvt. Ltd. | Digital Solutions, Email Marketing & Internships',description:'Digital solutions, email marketing and practical technology training from MS InnovateX.',keywords:'digital solutions, email marketing, internships, MS InnovateX'},
   '/about':{title:'About MS InnovateX | Technology & Training',description:'Learn about MS InnovateX, our technology solutions, email marketing services and industry-focused training.',keywords:'about MS InnovateX, technology company, training'},
   '/services':{title:'Technology Services | MS InnovateX',description:'Web, mobile, custom software, AI automation, cloud, UI/UX and technical support services.',keywords:'web development, mobile app, software, AI, cloud, UI UX, IT services'},
   '/internship':{title:'Internship & Training | MS InnovateX',description:'Practical technology internships and industrial training with live projects and mentorship.',keywords:'software internship, industrial training, BTech internship, coding training'},
   '/contact':{title:'Contact MS InnovateX | Get a Quote',description:'Contact MS InnovateX for software development, email marketing and technology training enquiries.',keywords:'contact MS InnovateX, software quote, technology enquiry'},
   '/email-marketing':{title:'Email Marketing Services | MS InnovateX',description:'Professional email campaign management, newsletters, automation, templates and analytics.',keywords:'email marketing, email automation, newsletter, campaigns'},
   '/careers':{title:'Careers at MS InnovateX',description:'Explore technology, email marketing and training opportunities at MS InnovateX.',keywords:'MS InnovateX careers, software jobs, technology jobs'}
  }
 },
 stats:{visible:true,items:[
  {id:'projects',value:100,suffix:'+',label:'Projects Delivered'},
  {id:'clients',value:50,suffix:'+',label:'Happy Clients'},
  {id:'students',value:500,suffix:'+',label:'Students Trained'},
  {id:'verticals',value:3,suffix:'+',label:'Service Verticals'},
  {id:'support',isText:true,text:'Pan India',label:'Our Support'}
 ]},
 advertisement:{active:false,id:'',title:'',text:'',image:'',buttonText:'',buttonUrl:''}
};

function safeEqual(a,b){const x=Buffer.from(String(a));const y=Buffer.from(String(b));return x.length===y.length&&crypto.timingSafeEqual(x,y);}
function out(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(data===null?'':JSON.stringify(data));}
function cookies(req){return Object.fromEntries(String(req.headers.cookie||'').split(';').map(x=>x.trim()).filter(Boolean).map(x=>{const i=x.indexOf('=');return [x.slice(0,i),decodeURIComponent(x.slice(i+1))]}));}
function ip(req){return String(req.headers['x-forwarded-for']||req.socket.remoteAddress||'unknown').split(',')[0].trim();}
function session(){const t=crypto.randomBytes(32).toString('hex');sessions.set(t,Date.now()+TTL);return t;}
function admin(req){const t=cookies(req).msix_admin,e=sessions.get(t);if(!t||!e||e<Date.now()){if(t)sessions.delete(t);return false;}sessions.set(t,Date.now()+TTL);return true;}
function cookie(res,t){const secure=process.env.NODE_ENV==='production'?'; Secure':'';res.setHeader('Set-Cookie',`msix_admin=${encodeURIComponent(t)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${Math.floor(TTL/1000)}${secure}`);}
function clearCookie(res){res.setHeader('Set-Cookie','msix_admin=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');}
function cors(req,res){const o=String(req.headers.origin||'');if(o&&(ORIGINS.includes('*')||ORIGINS.includes(o))){res.setHeader('Access-Control-Allow-Origin',ORIGINS.includes('*')?'*':o);res.setHeader('Vary','Origin');}res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');res.setHeader('Access-Control-Allow-Headers','Content-Type');}
function clean(v,d=0){if(d>4)return null;if(typeof v==='string')return v.trim().slice(0,5000);if(typeof v==='number'&&Number.isFinite(v))return v;if(typeof v==='boolean')return v;if(Array.isArray(v))return v.slice(0,100).map(x=>clean(x,d+1));if(v&&typeof v==='object'){const o={};for(const [k,x] of Object.entries(v).slice(0,100))if(/^[A-Za-z0-9_./-]{1,80}$/.test(k))o[k]=clean(x,d+1);return o;}return null;}
async function body(req){return await new Promise((resolve,reject)=>{let s='',n=0;req.on('data',c=>{n+=c.length;if(n>200000){reject(new Error('Request body is too large.'));req.destroy();return}s+=c});req.on('end',()=>{if(!s)return resolve({});try{resolve(JSON.parse(s))}catch{reject(new Error('Invalid JSON body.'))}});req.on('error',reject)})}
function b64(s){return Buffer.from(s).toString('base64').replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');}
async function token(){
 if(!DB||!PROJECT||!EMAIL||!KEY)throw new Error('Firebase server credentials are not configured.');
 if(accessToken&&accessExpiry>Date.now()+60000)return accessToken;
 const now=Math.floor(Date.now()/1000),head=b64(JSON.stringify({alg:'RS256',typ:'JWT'})),claim=b64(JSON.stringify({iss:EMAIL,scope:'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/firebase.database',aud:'https://oauth2.googleapis.com/token',iat:now,exp:now+3600})),unsigned=head+'.'+claim;
 const sign=crypto.createSign('RSA-SHA256');sign.update(unsigned);sign.end();
 const assertion=unsigned+'.'+sign.sign(KEY,'base64url');
 const r=await fetch('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',assertion})});
 if(!r.ok)throw new Error(`Google OAuth token request failed (${r.status}).`);
 const d=await r.json();accessToken=d.access_token;accessExpiry=Date.now()+Number(d.expires_in||3600)*1000;return accessToken;
}
async function fb(p,m='GET',data){
 const t=await token(); const [rawPath,query='']=p.replace(/^\//,'').split('?'); const r=await fetch(`${DB}/${rawPath}.json${query?'?'+query:''}`,{method:m,headers:{Authorization:`Bearer ${t}`,'Content-Type':'application/json'},body:data===undefined?undefined:JSON.stringify(data)});
 const tx=await r.text();let d=null;try{d=tx?JSON.parse(tx):null}catch{d=tx}if(!r.ok)throw new Error(`Firebase ${r.status}: ${typeof d==='string'?d:JSON.stringify(d)}`);return d;
}
function merge(remote){remote=remote||{};return {...defaults,...remote,meta:{...defaults.meta,...remote.meta,global:{...defaults.meta.global,...remote.meta?.global},pages:{...defaults.meta.pages,...remote.meta?.pages}},stats:{...defaults.stats,...remote.stats,items:Array.isArray(remote.stats?.items)?remote.stats.items:defaults.stats.items},advertisement:{...defaults.advertisement,...remote.advertisement}}}
async function config(){try{return merge(await fb('MSINNOVATEX/siteConfig'))}catch(e){console.error('[Firebase]',e.message);return defaults}}
async function init(){try{if(!(await fb('MSINNOVATEX/siteConfig')))await fb('MSINNOVATEX/siteConfig','PUT',defaults)}catch(e){console.warn('[Firebase init]',e.message)}}
const fields={contact:['name','email','subject','message'],internship:['fullName','email','phone','college','qualification','domain','duration','message'],emailMarketing:['name','email','phone','company','campaignType','message']};
function guard(req,res){if(!admin(req)){out(res,401,{ok:false,error:'Admin authentication required.'});return false}return true;}
function loginAllowed(address){const now=Date.now(),x=attempts.get(address)||{n:0,t:now+900000};if(x.t<now){x.n=0;x.t=now+900000}x.n++;attempts.set(address,x);return x.n<=10;}
function submissionAllowed(address){const now=Date.now(),x=submissionAttempts.get(address)||{n:0,t:now+600000};if(x.t<now){x.n=0;x.t=now+600000}x.n++;submissionAttempts.set(address,x);return x.n<=30;}

async function handle(req,res){
 cors(req,res);if(req.method==='OPTIONS'){res.writeHead(204);return res.end();}
 const u=new URL(req.url,`http://${req.headers.host||'localhost'}`),p=u.pathname;
 if(p==='/api/health'&&req.method==='GET')return out(res,200,{ok:true,service:'MS InnovateX API'});
 if(p==='/api/public/site-config'&&req.method==='GET'){const c=await config();return out(res,200,{meta:c.meta,stats:c.stats});}
 if(p==='/api/public/advertisement'&&req.method==='GET'){const c=await config();return out(res,200,{advertisement:c.advertisement?.active?c.advertisement:{active:false}});}
 if(p.startsWith('/api/submissions/')&&req.method==='POST'){
  const type=p.split('/').filter(Boolean)[2];if(!submissionAllowed(ip(req)))return out(res,429,{ok:false,error:'Too many submissions from this network. Please try again later.'});if(!fields[type])return out(res,404,{ok:false,error:'Unknown submission type.'});
  try{const b=clean(await body(req)),data={};for(const k of fields[type])data[k]=b[k]??'';const reqd=type==='contact'?['name','email','subject','message']:type==='internship'?['fullName','email','phone','college']:['name','email','phone'];if(reqd.some(k=>!String(data[k]||'').trim()))return out(res,400,{ok:false,error:'Please complete all required fields.'});if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(String(data.email)))return out(res,400,{ok:false,error:'Please enter a valid email address.'});const r=await fb(`MSINNOVATEX/submissions/${type}`,'POST',{...data,createdAt:Date.now(),status:'new'});return out(res,201,{ok:true,id:r?.name||null})}catch(e){console.error('[Submission]',e);return out(res,500,{ok:false,error:'Unable to save the submission right now.'})}
 }
 if(p==='/api/admin/login'&&req.method==='POST'){if(!loginAllowed(ip(req)))return out(res,429,{ok:false,error:'Too many login attempts. Try again later.'});try{const b=await body(req);if(!ADMIN_PASS)return out(res,503,{ok:false,error:'Admin password is not configured on the server.'});if(!safeEqual(b.username,ADMIN_USER)||!safeEqual(b.password,ADMIN_PASS))return out(res,401,{ok:false,error:'Invalid admin credentials.'});cookie(res,session());return out(res,200,{ok:true})}catch(e){return out(res,400,{ok:false,error:e.message})}}
 if(p==='/api/admin/logout'&&req.method==='POST'){const t=cookies(req).msix_admin;if(t)sessions.delete(t);clearCookie(res);return out(res,200,{ok:true});}
 if(p==='/api/admin/me'&&req.method==='GET')return out(res,200,{ok:admin(req)});
 if(p==='/api/admin/config'&&req.method==='GET'){if(!guard(req,res))return;return out(res,200,await config())}
 if(p==='/api/admin/config/meta'&&req.method==='PUT'){if(!guard(req,res))return;try{await fb('MSINNOVATEX/siteConfig/meta','PUT',clean(await body(req)));return out(res,200,{ok:true})}catch(e){return out(res,400,{ok:false,error:e.message})}}
 if(p==='/api/admin/config/stats'&&req.method==='PUT'){if(!guard(req,res))return;try{const b=clean(await body(req)),items=(Array.isArray(b.items)?b.items:defaults.stats.items).slice(0,10).map(x=>({id:String(x.id||'').slice(0,80),value:Math.max(0,Math.min(1000000000,Number(x.value)||0)),suffix:String(x.suffix||'').slice(0,10),label:String(x.label||'').slice(0,100),isText:Boolean(x.isText),text:String(x.text||'').slice(0,100)}));await fb('MSINNOVATEX/siteConfig/stats','PUT',{visible:Boolean(b.visible),items});return out(res,200,{ok:true})}catch(e){return out(res,400,{ok:false,error:e.message})}}
 if(p==='/api/admin/config/advertisement'&&req.method==='PUT'){if(!guard(req,res))return;try{const b=clean(await body(req)),image=String(b.image||'');if(image.length>900000)return out(res,400,{ok:false,error:'Advertisement image is too large. Compress it under 650 KB.'});await fb('MSINNOVATEX/siteConfig/advertisement','PUT',{active:Boolean(b.active),id:String(b.id||crypto.randomUUID()),title:String(b.title||'').slice(0,120),text:String(b.text||'').slice(0,500),image,buttonText:String(b.buttonText||'').slice(0,50),buttonUrl:String(b.buttonUrl||'').slice(0,500)});return out(res,200,{ok:true})}catch(e){return out(res,400,{ok:false,error:e.message})}}
 if(p==='/api/admin/advertisement'&&req.method==='DELETE'){if(!guard(req,res))return;await fb('MSINNOVATEX/siteConfig/advertisement','PUT',defaults.advertisement);return out(res,200,{ok:true})}
 if(p==='/api/admin/submissions'&&req.method==='GET'){if(!guard(req,res))return;try{const result={};for(const type of Object.keys(fields))result[type]=await fb(`MSINNOVATEX/submissions/${type}?orderBy=%22$key%22&limitToLast=100`)||{};return out(res,200,{ok:true,submissions:result})}catch(e){return out(res,500,{ok:false,error:e.message})}}
 if(p.startsWith('/api/admin/submissions/')&&req.method==='DELETE'){if(!guard(req,res))return;const a=p.split('/').filter(Boolean),type=a[2],id=a[3];if(!fields[type]||!id||!/^[A-Za-z0-9_-]{1,200}$/.test(id))return out(res,400,{ok:false,error:'Invalid submission.'});try{await fb(`MSINNOVATEX/submissions/${type}/${id}`,'DELETE');return out(res,200,{ok:true})}catch(e){return out(res,500,{ok:false,error:e.message})}}
 if(req.method==='GET'&&fs.existsSync(DIST)){let f=p==='/'?path.join(DIST,'index.html'):path.join(DIST,p.replace(/^\//,''));if(!f.startsWith(DIST))return out(res,403,{ok:false});if(!fs.existsSync(f)||fs.statSync(f).isDirectory())f=path.join(DIST,'index.html');const ext=path.extname(f).toLowerCase(),ct={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.webp':'image/webp','.ico':'image/x-icon'}[ext]||'application/octet-stream';res.writeHead(200,{'Content-Type':ct,'X-Content-Type-Options':'nosniff'});return fs.createReadStream(f).pipe(res)}
 return out(res,404,{ok:false,error:'Not found.'});
}
http.createServer((req,res)=>handle(req,res).catch(e=>{console.error('[Server]',e);if(!res.headersSent)out(res,500,{ok:false,error:'Internal server error.'})})).listen(PORT,()=>{console.log(`MS InnovateX API listening on ${PORT}`);init()});
