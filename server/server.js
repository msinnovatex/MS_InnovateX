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
const ADMIN_AUTH_PATH='MSINNOVATEX/adminAuth';
const ORIGINS=String(process.env.FRONTEND_ORIGIN||'').split(',').map(x=>x.trim()).filter(Boolean);
const TTL=8*60*60*1000;
const SESSION_SECRET=String(process.env.ADMIN_SESSION_SECRET||crypto.createHash('sha256').update(`${KEY}|${PROJECT}|${EMAIL}|${ADMIN_PASS}`).digest('hex'));
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
   '/careers':{title:'Careers at MS InnovateX',description:'Explore technology, email marketing and training opportunities at MS InnovateX.',keywords:'MS InnovateX careers, software jobs, technology jobs'},
   '/offerinternship':{title:'Internship Application | MS InnovateX',description:'Apply for the MS InnovateX internship program, complete payment and submit your transaction proof.',keywords:'MS InnovateX internship application, internship fee, internship'}
  }
 },
 stats:{visible:true,items:[
  {id:'projects',value:100,suffix:'+',label:'Projects Delivered'},
  {id:'clients',value:50,suffix:'+',label:'Happy Clients'},
  {id:'students',value:500,suffix:'+',label:'Students Trained'},
  {id:'verticals',value:3,suffix:'+',label:'Service Verticals'},
  {id:'support',isText:true,text:'Pan India',label:'Our Support'}
 ]},
 advertisement:{active:false,id:'',title:'',text:'',image:'',buttonText:'',buttonUrl:''},
 offerInternship:{enabled:true,amount:500,upi:'soumyanshu.sahoo@ybl',merchantName:'MS InnovateX Pvt. Ltd.'}
};

function safeEqual(a,b){const x=Buffer.from(String(a));const y=Buffer.from(String(b));return x.length===y.length&&crypto.timingSafeEqual(x,y);}
async function adminCredentials(){
  const stored=await fb(ADMIN_AUTH_PATH);
  if(stored?.username && typeof stored?.password==='string') return stored;
  if(!ADMIN_USER || !ADMIN_PASS) return null;
  const record={username:ADMIN_USER,password:ADMIN_PASS,updatedAt:Date.now()};
  await fb(ADMIN_AUTH_PATH,'PUT',record);
  return record;
}
function out(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(data===null?'':JSON.stringify(data));}
function cookies(req){return Object.fromEntries(String(req.headers.cookie||'').split(';').map(x=>x.trim()).filter(Boolean).map(x=>{const i=x.indexOf('=');return [x.slice(0,i),decodeURIComponent(x.slice(i+1))]}));}
function ip(req){return String(req.headers['x-forwarded-for']||req.socket.remoteAddress||'unknown').split(',')[0].trim();}
function session(){const payload=b64(JSON.stringify({v:1,exp:Date.now()+TTL,n:crypto.randomBytes(24).toString('hex')}));const sig=crypto.createHmac('sha256',SESSION_SECRET).update(payload).digest('base64url');return payload+'.'+sig;}
function admin(req){const t=cookies(req).msix_admin;if(!t)return false;const [payload,sig]=String(t).split('.');if(!payload||!sig)return false;const expected=crypto.createHmac('sha256',SESSION_SECRET).update(payload).digest('base64url');if(!safeEqual(sig,expected))return false;try{const d=JSON.parse(Buffer.from(payload,'base64url').toString('utf8'));return d?.v===1&&Number(d.exp)>Date.now();}catch{return false;}}
function cookie(res,t){const secure=(process.env.VERCEL||process.env.NODE_ENV==='production')?'; Secure':'';const crossSite=ORIGINS.length>0&&!ORIGINS.includes('*');const sameSite=crossSite?'None':'Lax';res.setHeader('Set-Cookie',`msix_admin=${encodeURIComponent(t)}; Path=/; HttpOnly; SameSite=${sameSite}; Max-Age=${Math.floor(TTL/1000)}${secure}`);}
function clearCookie(res){const crossSite=ORIGINS.length>0&&!ORIGINS.includes('*');res.setHeader('Set-Cookie',`msix_admin=; Path=/; HttpOnly; SameSite=${crossSite?'None':'Lax'}; Max-Age=0${(process.env.VERCEL||process.env.NODE_ENV==='production')?'; Secure':''}`);}
function cors(req,res){const o=String(req.headers.origin||'');const allowed=o&&(ORIGINS.includes('*')||ORIGINS.includes(o));if(allowed){res.setHeader('Access-Control-Allow-Origin',ORIGINS.includes('*')?'*':o);res.setHeader('Access-Control-Allow-Credentials','true');res.setHeader('Vary','Origin');}res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');}
function normalizeSubmissionValue(v){
 if(typeof v!=='string') return '';
 return v.normalize('NFKC').replace(/[\u200B-\u200D\uFEFF]/g,'').trim();
}
function normalizeEmail(v){return normalizeSubmissionValue(v).toLowerCase();}
function normalizePhone(v){return normalizeSubmissionValue(v).replace(/[\u00A0\s]+/g,' ');}
function validEmail(v){
 const email=normalizeEmail(v);
 return email.length<=254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validPhone(v){
 const phone=normalizePhone(v),digits=phone.replace(/\D/g,'');
 return digits.length>=7&&digits.length<=15&&/^[+()\d\s-]+$/.test(phone);
}
function fieldTooLong(data,type){
 const limits=type==='contact'
  ? {name:120,email:254,subject:200,message:5000}
  : type==='internship'
  ? {fullName:120,email:254,phone:40,college:200,qualification:120,domain:160,duration:120,message:5000}
  : {name:120,email:254,phone:40,company:200,campaignType:160,message:5000};
 return Object.entries(limits).find(([key,max])=>String(data[key]||'').length>max)?.[0]||null;
}
function clean(v,d=0){if(d>4)return null;if(typeof v==='string')return v.trim().slice(0,5000);if(typeof v==='number'&&Number.isFinite(v))return v;if(typeof v==='boolean')return v;if(Array.isArray(v))return v.slice(0,100).map(x=>clean(x,d+1));if(v&&typeof v==='object'){const o={};for(const [k,x] of Object.entries(v).slice(0,100))if(/^[A-Za-z0-9_./-]{1,80}$/.test(k))o[k]=clean(x,d+1);return o;}return null;}
async function body(req){return await new Promise((resolve,reject)=>{let s='',n=0;req.on('data',c=>{n+=c.length;if(n>2500000){reject(new Error('Request body is too large.'));req.destroy();return}s+=c});req.on('end',()=>{if(!s)return resolve({});try{resolve(JSON.parse(s))}catch{reject(new Error('Invalid JSON body.'))}});req.on('error',reject)})}
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
const PAGE_KEY_MAP={'/':'home','/about':'about','/services':'services','/internship':'internship','/offerinternship':'offerinternship','/contact':'contact','/email-marketing':'emailMarketing','/careers':'careers'};
function normalizeCustom(v){return Array.isArray(v)?v.slice(0,50).map(x=>({type:String(x?.type||'name').slice(0,20),key:String(x?.key||'').slice(0,120),content:String(x?.content||'').slice(0,500)})).filter(x=>x.key&&x.content):[];}
function encodeMeta(meta){const m=meta||{};const pages={};for(const [route,key] of Object.entries(PAGE_KEY_MAP))pages[key]={...defaults.meta.pages[route],...(m.pages?.[route]||{}),custom:normalizeCustom(m.pages?.[route]?.custom)};return {...m,global:{...defaults.meta.global,...m.global,custom:normalizeCustom(m.global?.custom)},pages};}
function decodeMeta(meta){const m=meta||{};const pages={};for(const [route,key] of Object.entries(PAGE_KEY_MAP))pages[route]={...defaults.meta.pages[route],...(m.pages?.[key]||{}),custom:normalizeCustom(m.pages?.[key]?.custom)};return {...m,global:{...defaults.meta.global,...m.global,custom:normalizeCustom(m.global?.custom)},pages};}
function merge(remote){remote=remote||{};return {...defaults,...remote,meta:decodeMeta({...defaults.meta,...remote.meta}),stats:{...defaults.stats,...remote.stats,items:Array.isArray(remote.stats?.items)?remote.stats.items:defaults.stats.items},advertisement:{...defaults.advertisement,...remote.advertisement}}}
async function config(){try{return merge(await fb('MSINNOVATEX/siteConfig'))}catch(e){console.error('[Firebase]',e.message);return defaults}}
async function init(){try{if(!(await fb('MSINNOVATEX/siteConfig')))await fb('MSINNOVATEX/siteConfig','PUT',{...defaults,meta:encodeMeta(defaults.meta)});if(!(await fb(ADMIN_AUTH_PATH))&&ADMIN_USER&&ADMIN_PASS){await fb(ADMIN_AUTH_PATH,'PUT',{username:ADMIN_USER,password:ADMIN_PASS,updatedAt:Date.now()});console.log('[Admin] Firebase credentials initialized.')}}catch(e){console.warn('[Firebase init]',e.message)}}
const fields={contact:['name','email','subject','message'],internship:['fullName','email','phone','college','qualification','domain','duration','message'],emailMarketing:['name','email','phone','company','campaignType','message']};
function guard(req,res){if(!admin(req)){out(res,401,{ok:false,error:'Admin authentication required.'});return false}return true;}
function loginAllowed(address){const now=Date.now(),x=attempts.get(address)||{n:0,t:now+900000};if(x.t<now){x.n=0;x.t=now+900000}x.n++;attempts.set(address,x);return x.n<=10;}
function submissionAllowed(address){const now=Date.now(),x=submissionAttempts.get(address)||{n:0,t:now+600000};if(x.t<now){x.n=0;x.t=now+600000}x.n++;submissionAttempts.set(address,x);return x.n<=30;}

function validOfferDegree(v){const x=normalizeSubmissionValue(v);return x.length>=2&&x.length<=160;}
function validUtr(v){const x=normalizeSubmissionValue(v).replace(/\s+/g,'');return x.length>=6&&x.length<=80&&/^[A-Za-z0-9._-]+$/.test(x);}
function validOfferImage(v){return typeof v==='string'&&/^data:image\/(png|jpe?g|webp);base64,[A-Za-z0-9+/=]+$/.test(v)&&v.length<=170000;}
function offerConfig(c){const o=c?.offerInternship||defaults.offerInternship;const amount=Math.max(1,Math.min(100000,Number(o.amount)||defaults.offerInternship.amount));const upi=/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+$/.test(String(o.upi||''))?String(o.upi):defaults.offerInternship.upi;return {enabled:o.enabled!==false,amount,upi,merchantName:String(o.merchantName||defaults.offerInternship.merchantName).slice(0,120)};}
async function handle(req,res){
 cors(req,res);if(req.method==='OPTIONS'){res.writeHead(204);return res.end();}
 const u=new URL(req.url,`http://${req.headers.host||'localhost'}`),p=u.pathname;
 if(p==='/api/health'&&req.method==='GET')return out(res,200,{ok:true,service:'MS InnovateX API'});
 if(p==='/api/public/site-config'&&req.method==='GET'){const c=await config();return out(res,200,{meta:c.meta,stats:c.stats});}
 if(p==='/api/public/advertisement'&&req.method==='GET'){const c=await config();return out(res,200,{advertisement:c.advertisement?.active?c.advertisement:{active:false}});}
 if(p==='/api/submissions/offerinternship'&&req.method==='POST'){
  if(!submissionAllowed(ip(req)))return out(res,429,{ok:false,error:'Too many submissions from this network. Please try again later.'});
  try{const b=await body(req),fullName=normalizeSubmissionValue(b.fullName),email=normalizeEmail(b.email),whatsapp=normalizePhone(b.whatsapp),phone=normalizePhone(b.phone),degree=normalizeSubmissionValue(b.degree),utr=normalizeSubmissionValue(b.utr).replace(/\s+/g,''),screenshot=String(b.paymentScreenshot||''),offer=offerConfig(await config());
   if(!offer.enabled)return out(res,403,{ok:false,error:'Internship applications are currently closed.'});
   if(!fullName||fullName.length>120)return out(res,400,{ok:false,error:'Please enter a valid name.',field:'fullName'});if(!validEmail(email))return out(res,400,{ok:false,error:'Please enter a valid email address.',field:'email'});if(!validPhone(whatsapp))return out(res,400,{ok:false,error:'Please enter a valid WhatsApp number.',field:'whatsapp'});if(!validPhone(phone))return out(res,400,{ok:false,error:'Please enter a valid phone number.',field:'phone'});if(!validOfferDegree(degree))return out(res,400,{ok:false,error:'Please enter your current pursuing degree.',field:'degree'});if(!validUtr(utr))return out(res,400,{ok:false,error:'Please enter a valid UTR / transaction ID.',field:'utr'});if(!validOfferImage(screenshot))return out(res,400,{ok:false,error:'Please attach a valid compressed payment screenshot.',field:'paymentScreenshot'});
   const id=String(Date.now())+'-'+crypto.randomBytes(5).toString('hex');await fb('MSINNOVATEX/offerinternship/'+id,'PUT',{fullName,email,whatsapp,phone,degree,utr,paymentScreenshot:screenshot,amount:offer.amount,upi:offer.upi,status:'pending',rejectionReason:'',createdAt:Date.now(),updatedAt:Date.now()});return out(res,201,{ok:true,id});
  }catch(e){console.error('[Offer internship submission]',e);return out(res,500,{ok:false,error:'Unable to save the internship application right now.'})}
 }
 if(p==='/api/public/offer-internship-config'&&req.method==='GET'){const c=await config();return out(res,200,{offerInternship:offerConfig(c)});}
 if(p.startsWith('/api/submissions/')&&req.method==='POST'){
  const type=p.split('/').filter(Boolean)[2];if(!submissionAllowed(ip(req)))return out(res,429,{ok:false,error:'Too many submissions from this network. Please try again later.'});if(!fields[type])return out(res,404,{ok:false,error:'Unknown submission type.'});
  try{
   const b=clean(await body(req))||{},data={};
   for(const k of fields[type]){
    const value=b[k]??'';
    data[k]=typeof value==='string' ? normalizeSubmissionValue(value) : '';
   }
   if('email' in data) data.email=normalizeEmail(data.email);
   if('phone' in data) data.phone=normalizePhone(data.phone);
   const reqd=type==='contact'?['name','email','subject','message']:type==='internship'?['fullName','email','phone','college']:['name','email','phone'];
   const missing=reqd.find(k=>!data[k]);
   if(missing)return out(res,400,{ok:false,error:'Please complete all required fields.',field:missing});
   const tooLong=fieldTooLong(data,type);
   if(tooLong)return out(res,400,{ok:false,error:`The ${tooLong} field is too long.`,field:tooLong});
   if(!validEmail(data.email))return out(res,400,{ok:false,error:'Please enter a valid email address.',field:'email'});
   if('phone' in data&&!validPhone(data.phone))return out(res,400,{ok:false,error:'Please enter a valid phone / WhatsApp number.',field:'phone'});
   const r=await fb(`MSINNOVATEX/submissions/${type}`,'POST',{...data,createdAt:Date.now(),status:'new'});
   return out(res,201,{ok:true,id:r?.name||null});
  }catch(e){console.error('[Submission]',e);return out(res,500,{ok:false,error:'Unable to save the submission right now.'})}
 }
 if(p==='/api/admin/login'&&req.method==='POST'){if(!loginAllowed(ip(req)))return out(res,429,{ok:false,error:'Too many login attempts. Try again later.'});try{const b=await body(req),auth=await adminCredentials();if(!auth)return out(res,503,{ok:false,error:'Admin credentials are not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD once, then they are stored in Firebase at MSINNOVATEX/adminAuth.'});if(!safeEqual(b.username,auth.username)||!safeEqual(b.password,auth.password))return out(res,401,{ok:false,error:'Invalid admin credentials.'});cookie(res,session());return out(res,200,{ok:true})}catch(e){console.error('[Admin login]',e);return out(res,503,{ok:false,error:'Unable to verify admin credentials right now.'})}}
 if(p==='/api/admin/logout'&&req.method==='POST'){clearCookie(res);return out(res,200,{ok:true});}
 if(p==='/api/admin/me'&&req.method==='GET')return out(res,200,{ok:admin(req)});
 if(p==='/api/admin/credentials'&&req.method==='PUT'){if(!guard(req,res))return;try{const b=await body(req),auth=await adminCredentials();if(!auth)return out(res,503,{ok:false,error:'Admin credentials are not configured.'});if(!safeEqual(b.currentPassword,auth.password))return out(res,401,{ok:false,error:'Current password is incorrect.'});const username=String(b.username||'').trim(),password=String(b.password||'');if(!/^[A-Za-z0-9._@-]{3,80}$/.test(username))return out(res,400,{ok:false,error:'Username must be 3-80 characters and use letters, numbers, dot, underscore, @ or hyphen.'});if(password.length<12||password.length>200)return out(res,400,{ok:false,error:'New password must be 12-200 characters.'});await fb(ADMIN_AUTH_PATH,'PUT',{username,password,updatedAt:Date.now()});cookie(res,session());return out(res,200,{ok:true,username})}
catch(e){console.error('[Admin credentials]',e);return out(res,400,{ok:false,error:e.message})}}
 if((p==='/api/admin/config'||p==='/api/admin/site-config')&&req.method==='GET'){if(!guard(req,res))return;return out(res,200,await config())}
 if((p==='/api/admin/config-meta'||p==='/api/admin/config/meta')&&req.method==='PUT'){if(!guard(req,res))return;try{await fb('MSINNOVATEX/siteConfig/meta','PUT',encodeMeta(clean(await body(req))));return out(res,200,{ok:true})}catch(e){return out(res,400,{ok:false,error:e.message})}}
 if((p==='/api/admin/config-stats'||p==='/api/admin/config/stats')&&req.method==='PUT'){if(!guard(req,res))return;try{const b=clean(await body(req)),items=(Array.isArray(b.items)?b.items:defaults.stats.items).slice(0,10).map(x=>({id:String(x.id||'').slice(0,80),value:Math.max(0,Math.min(1000000000,Number(x.value)||0)),suffix:String(x.suffix||'').slice(0,10),label:String(x.label||'').slice(0,100),isText:Boolean(x.isText),text:String(x.text||'').slice(0,100)}));await fb('MSINNOVATEX/siteConfig/stats','PUT',{visible:Boolean(b.visible),items});return out(res,200,{ok:true})}catch(e){return out(res,400,{ok:false,error:e.message})}}
 if((p==='/api/admin/config-offer-internship'||p==='/api/admin/config/offer-internship')&&req.method==='PUT'){
  if(!guard(req,res))return;try{const b=clean(await body(req)),amount=Math.max(1,Math.min(100000,Number(b.amount)||0)),upi=String(b.upi||defaults.offerInternship.upi).trim(),merchantName=String(b.merchantName||defaults.offerInternship.merchantName).trim().slice(0,120);if(!amount)return out(res,400,{ok:false,error:'Amount must be greater than 0.'});if(!/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+$/.test(upi))return out(res,400,{ok:false,error:'Invalid UPI ID.'});await fb('MSINNOVATEX/siteConfig/offerInternship','PUT',{enabled:b.enabled!==false,amount,upi,merchantName});return out(res,200,{ok:true,offerInternship:{enabled:b.enabled!==false,amount,upi,merchantName}})}catch(e){return out(res,400,{ok:false,error:e.message})}
 }
 if((p==='/api/admin/config-advertisement'||p==='/api/admin/config/advertisement')&&req.method==='PUT'){if(!guard(req,res))return;try{const raw=await body(req),b=raw&&typeof raw==='object'?raw:{},image=String(b.image||'');if(image&&!/^data:image\/(png|jpe?g|webp);base64,/.test(image))return out(res,400,{ok:false,error:'Invalid advertisement image.'});await fb('MSINNOVATEX/siteConfig/advertisement','PUT',{active:Boolean(b.active),id:String(b.id||crypto.randomUUID()),title:normalizeSubmissionValue(b.title).slice(0,120),text:normalizeSubmissionValue(b.text).slice(0,500),image,buttonText:normalizeSubmissionValue(b.buttonText).slice(0,50),buttonUrl:String(b.buttonUrl||'').trim().slice(0,500)});return out(res,200,{ok:true})}catch(e){return out(res,400,{ok:false,error:e.message})}}
 if(p==='/api/admin/advertisement'&&req.method==='DELETE'){if(!guard(req,res))return;await fb('MSINNOVATEX/siteConfig/advertisement','PUT',defaults.advertisement);return out(res,200,{ok:true})}
 if(p==='/api/admin/offerinternship'&&req.method==='GET'){if(!guard(req,res))return;try{const applications=await fb('MSINNOVATEX/offerinternship')||{};return out(res,200,{ok:true,applications})}catch(e){console.error('[Offer internship admin list]',e);return out(res,500,{ok:false,error:'Unable to load internship applications. Check Firebase configuration and permissions.'})}}
 if(p.startsWith('/api/admin/offerinternship/')&&req.method==='PUT'){if(!guard(req,res))return;const a=p.split('/').filter(Boolean),id=a[2];if(!id||!/^[A-Za-z0-9_-]{1,200}$/.test(id))return out(res,400,{ok:false,error:'Invalid application.'});try{const current=await fb('MSINNOVATEX/offerinternship/'+id);if(!current)return out(res,404,{ok:false,error:'Application not found.'});const b=clean(await body(req)),action=String(b.action||'');if(action==='approve'){await fb('MSINNOVATEX/offerinternship/'+id,'PATCH',{status:'approved',rejectionReason:'',updatedAt:Date.now()});return out(res,200,{ok:true,status:'approved'})}if(action==='reject'){const reason=String(b.reason||'').trim().slice(0,1000);if(!reason)return out(res,400,{ok:false,error:'Rejection reason is required.'});await fb('MSINNOVATEX/offerinternship/'+id,'PATCH',{status:'rejected',rejectionReason:reason,updatedAt:Date.now()});return out(res,200,{ok:true,status:'rejected',rejectionReason:reason})}return out(res,400,{ok:false,error:'Invalid action.'})}catch(e){return out(res,500,{ok:false,error:'Unable to update the application.'})}}
 if(p.startsWith('/api/admin/offerinternship/')&&req.method==='DELETE'){if(!guard(req,res))return;const a=p.split('/').filter(Boolean),id=a[2];if(!id||!/^[A-Za-z0-9_-]{1,200}$/.test(id))return out(res,400,{ok:false,error:'Invalid application.'});try{await fb('MSINNOVATEX/offerinternship/'+id,'DELETE');return out(res,200,{ok:true})}catch(e){return out(res,500,{ok:false,error:'Unable to delete the application.'})}}
 if(p==='/api/admin/submissions'&&req.method==='GET'){if(!guard(req,res))return;try{const result={};for(const type of Object.keys(fields))result[type]=await fb(`MSINNOVATEX/submissions/${type}?orderBy=%22$key%22&limitToLast=100`)||{};return out(res,200,{ok:true,submissions:result})}catch(e){return out(res,500,{ok:false,error:e.message})}}
 if(p.startsWith('/api/admin/submissions/')&&req.method==='PUT'){if(!guard(req,res))return;const a=p.split('/').filter(Boolean),type=a[2],id=a[3];if(!fields[type]||!id||!/^[A-Za-z0-9_-]{1,200}$/.test(id))return out(res,400,{ok:false,error:'Invalid submission.'});try{const current=await fb(`MSINNOVATEX/submissions/${type}/${id}`);if(!current)return out(res,404,{ok:false,error:'Submission not found.'});const b=clean(await body(req)),status=['new','viewed','contacted','resolved'].includes(String(b.status))?String(b.status):String(current.status||'new');await fb(`MSINNOVATEX/submissions/${type}/${id}/status`,'PUT',status);return out(res,200,{ok:true,status})}catch(e){return out(res,500,{ok:false,error:'Unable to update the submission.'})}}
 if(p.startsWith('/api/admin/submissions/')&&req.method==='DELETE'){if(!guard(req,res))return;const a=p.split('/').filter(Boolean),type=a[2],id=a[3];if(!fields[type]||!id||!/^[A-Za-z0-9_-]{1,200}$/.test(id))return out(res,400,{ok:false,error:'Invalid submission.'});try{await fb(`MSINNOVATEX/submissions/${type}/${id}`,'DELETE');return out(res,200,{ok:true})}catch(e){return out(res,500,{ok:false,error:e.message})}}
 if(req.method==='GET'&&fs.existsSync(DIST)){let f=p==='/'?path.join(DIST,'index.html'):path.join(DIST,decodeURIComponent(p).replace(/^\//,''));if(!f.startsWith(DIST))return out(res,403,{ok:false});if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f))f=path.join(DIST,'index.html');const ext=path.extname(f).toLowerCase(),ct={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.webp':'image/webp','.ico':'image/x-icon'}[ext]||'application/octet-stream';res.writeHead(200,{'Content-Type':ct,'X-Content-Type-Options':'nosniff'});return fs.createReadStream(f).pipe(res)}
 return out(res,404,{ok:false,error:'Not found.'});
}export { handle, init };

if (!process.env.VERCEL) {
  http.createServer((req, res) =>
    handle(req, res).catch(e => {
      console.error('[Server]', e);

      if (!res.headersSent) {
        out(res, 500, {
          ok: false,
          error: 'Internal server error.'
        });
      }
    })
  ).listen(PORT, () => {
    console.log(`MS InnovateX API listening on ${PORT}`);
    init();
  });
}
