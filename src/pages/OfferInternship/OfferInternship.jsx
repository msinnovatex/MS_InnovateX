import React,{useEffect,useMemo,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ArrowLeft,ArrowRight,CheckCircle2,Clock3,ExternalLink,Loader2,ShieldCheck,Upload,XCircle} from 'lucide-react';
import {isValidEmail,isValidPhone,normalizeSubmission} from '../../lib/validation';
import {apiFetch} from '../../lib/api';

const FALLBACK_UPI='soumyanshu.sahoo@ybl';

export default function OfferInternship({darkMode}){
 const navigate=useNavigate();
 const [step,setStep]=useState(1),[loading,setLoading]=useState(true),[submitting,setSubmitting]=useState(false),[success,setSuccess]=useState(false),[error,setError]=useState('');
 const [config,setConfig]=useState({enabled:true,amount:500,upi:FALLBACK_UPI,merchantName:'MS InnovateX Pvt. Ltd.'});
 const [screenshot,setScreenshot]=useState(''),[screenshotName,setScreenshotName]=useState('');
 const [form,setForm]=useState({fullName:'',email:'',whatsapp:'',phone:'',degree:''});
 const amount=Number(config.amount||500),upi=String(config.upi||FALLBACK_UPI);
 const upiLink=useMemo(function(){return 'upi://pay?pa='+encodeURIComponent(upi)+'&pn='+encodeURIComponent(config.merchantName||'MS InnovateX Pvt. Ltd.')+'&am='+encodeURIComponent(amount.toFixed(2))+'&cu=INR'},[upi,amount,config.merchantName]);
 useEffect(function(){apiFetch('/api/public/offer-internship-config').then(function(d){if(d&&d.offerInternship)setConfig(d.offerInternship)}).catch(function(e){setError(e.message)}).finally(function(){setLoading(false)})},[]);
 const setField=function(e){setForm(function(v){return {...v,[e.target.name]:e.target.value}})};
 const compress=async function(file){
  if(!file) return;
  if(!file.type.startsWith('image/')) throw new Error('Please select an image file.');
  if(file.size>10*1024*1024) throw new Error('Payment screenshot must be under 10 MB before compression.');
  const data=await new Promise(function(resolve,reject){const r=new FileReader();r.onload=function(){resolve(r.result)};r.onerror=function(){reject(new Error('Could not read the image.'))};r.readAsDataURL(file)});
  const img=await new Promise(function(resolve,reject){const i=new Image();i.onload=function(){resolve(i)};i.onerror=function(){reject(new Error('Could not read the image.'))};i.src=data});
  const scale=Math.min(1,1200/Math.max(img.width,img.height)),c=document.createElement('canvas');
  c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));c.getContext('2d').drawImage(img,0,0,c.width,c.height);
  let q=.78,out=c.toDataURL('image/webp',q);while(out.length>145000&&q>.32){q-=.08;out=c.toDataURL('image/webp',q)}
  if(out.length>145000) throw new Error('Screenshot could not be compressed enough. Please use a smaller image.');
  return out;
 };
 const next=function(){setError('');const d=normalizeSubmission(form);if(!d.fullName||d.fullName.length>120)return setError('Please enter your full name.');if(!isValidEmail(d.email))return setError('Please enter a valid email address.');if(!isValidPhone(d.whatsapp))return setError('Please enter a valid WhatsApp number.');if(!isValidPhone(d.phone))return setError('Please enter a valid phone number.');if(!d.degree||d.degree.length>160)return setError('Please select your current pursuing degree.');setForm(d);setStep(2)};
 const submit=async function(){setError('');if(!screenshot)return setError('Please attach your payment screenshot.');const utr=(document.getElementById('offer-utr')||{}).value||'';if(utr.trim().length<6)return setError('Please enter your UTR / transaction ID.');setSubmitting(true);try{await apiFetch('/api/submissions/offerinternship',{method:'POST',body:JSON.stringify({...form,utr:utr.trim(),paymentScreenshot:screenshot})});setSuccess(true);setTimeout(function(){navigate('/')},3000)}catch(e){setError(e.message)}finally{setSubmitting(false)}};
 if(loading)return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin w-8 h-8 text-blue-600"/></div>;
 if(!config.enabled)return <div className="min-h-screen flex items-center justify-center px-6"><div className="max-w-lg text-center p-8 rounded-3xl bg-white shadow-xl"><XCircle className="w-14 h-14 mx-auto text-red-500"/><h1 className="text-2xl font-black mt-4">Applications are currently closed</h1><button onClick={function(){navigate('/')}} className="mt-6 px-6 py-3 rounded-full bg-[#1264FF] text-white font-bold">Back to Home</button></div></div>;
 return <div className={(darkMode?'bg-[#031126] text-white':'bg-[#F5F9FF] text-slate-900')+' min-h-screen py-10 px-4'}>
  <div className="max-w-3xl mx-auto"><button onClick={function(){step===2?setStep(1):navigate('/')}} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 mb-6"><ArrowLeft className="w-4 h-4"/>{step===2?' Back to details':' Back to home'}</button>
   <div className="bg-white dark:bg-[#071a36] rounded-[28px] shadow-2xl border border-slate-200/70 dark:border-blue-900/60 overflow-hidden">
    <div className="p-7 sm:p-10 bg-gradient-to-br from-[#06255A] to-[#1264FF] text-white"><div className="flex items-center gap-3"><ShieldCheck className="w-7 h-7"/><span className="font-bold">MS InnovateX Internship</span></div><h1 className="text-3xl sm:text-4xl font-black mt-4">Internship Application</h1><p className="mt-2 text-blue-100">Complete your details, pay the internship fee, and submit your transaction proof.</p><div className="flex items-center gap-2 mt-6 text-sm font-bold"><span className={'w-8 h-8 rounded-full flex items-center justify-center '+(step===1?'bg-white text-blue-700':'bg-white/20')}>1</span><span className="h-px w-12 bg-white/40"/><span className={'w-8 h-8 rounded-full flex items-center justify-center '+(step===2?'bg-white text-blue-700':'bg-white/20')}>2</span></div></div>
    <div className="p-7 sm:p-10">{error&&<div className="mb-6 rounded-2xl bg-red-50 text-red-700 border border-red-200 p-4 text-sm font-semibold">{error}</div>}
     {step===1?<form onSubmit={function(e){e.preventDefault();next()}} className="space-y-5">
      <Field label="Full name" name="fullName" value={form.fullName} onChange={setField} placeholder="Your full name" required/>
      <Field label="Email address" name="email" type="email" value={form.email} onChange={setField} placeholder="you@example.com" required/>
      <div className="grid sm:grid-cols-2 gap-5"><Field label="WhatsApp number" name="whatsapp" value={form.whatsapp} onChange={setField} placeholder="+91 9876543210" required/><Field label="Phone number" name="phone" value={form.phone} onChange={setField} placeholder="+91 9876543210" required/></div>
      <label className="block"><span className="text-sm font-bold">Current pursuing degree</span><select name="degree" value={form.degree} onChange={setField} className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3.5 bg-white dark:bg-slate-900 dark:border-slate-700" required><option value="">Select degree</option><option>B.Tech / B.E.</option><option>BCA</option><option>MCA</option><option>B.Sc.</option><option>M.Sc.</option><option>Diploma</option><option>Other</option></select></label>
      <button className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-[#1264FF] text-white py-4 font-black">Continue to Payment <ArrowRight className="w-5 h-5"/></button>
     </form>:<div className="space-y-6">
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5"><div className="flex items-center justify-between"><span className="font-bold text-slate-600">Internship fee</span><strong className="text-3xl text-blue-700">₹{amount.toLocaleString('en-IN')}</strong></div><div className="mt-3 text-sm text-slate-600">UPI ID: <b>{upi}</b></div></div>
      <div className="grid md:grid-cols-2 gap-6 items-center"><div className="text-center"><div className="inline-block rounded-3xl bg-white p-3 shadow-lg border"><img src={'https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=12&data='+encodeURIComponent(upiLink)} alt="UPI payment QR code" className="w-64 h-64 object-contain"/><p className="text-xs text-slate-500 mt-2">Scan to pay exactly ₹{amount.toLocaleString('en-IN')}</p></div></div><div className="space-y-4"><div className="rounded-2xl bg-slate-50 p-5"><div className="text-sm text-slate-500">Pay to</div><div className="font-black mt-1">{upi}</div><div className="text-sm text-slate-500 mt-3">Amount</div><div className="font-black text-xl">₹{amount.toLocaleString('en-IN')}</div></div><a href={upiLink} className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-[#1264FF] text-white py-4 font-black">Pay through UPI app <ExternalLink className="w-4 h-4"/></a><div className="text-xs text-slate-500 flex gap-2"><Clock3 className="w-4 h-4 shrink-0"/>After payment, come back to this screen and enter your UTR/transaction ID.</div></div></div>
      <label className="block"><span className="text-sm font-bold">UTR / Transaction ID</span><input id="offer-utr" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3.5 bg-white dark:bg-slate-900 dark:border-slate-700" placeholder="Enter your UTR / transaction ID" autoComplete="off"/></label>
      <label className="block"><span className="text-sm font-bold">Payment screenshot</span><div className="mt-2 border-2 border-dashed border-slate-300 rounded-2xl p-5 text-center hover:border-blue-500"><input type="file" accept="image/*" className="hidden" id="payment-shot" onChange={async function(e){try{setError('');const f=e.target.files&&e.target.files[0];if(!f)return;const d=await compress(f);setScreenshot(d);setScreenshotName(f.name)}catch(err){setScreenshot('');setError(err.message)}}}/><label htmlFor="payment-shot" className="cursor-pointer flex flex-col items-center gap-2"><Upload className="w-8 h-8 text-blue-600"/><span className="font-bold">{screenshotName||'Attach payment screenshot'}</span><span className="text-xs text-slate-500">Compressed automatically before upload</span></label></div></label>
      {screenshot&&<div className="rounded-2xl border p-3"><img src={screenshot} alt="Payment screenshot preview" className="max-h-72 mx-auto rounded-xl object-contain"/><div className="mt-2 text-xs text-center text-green-600 font-bold flex justify-center gap-1"><CheckCircle2 className="w-4 h-4"/> Screenshot ready</div></div>}
      <button onClick={submit} disabled={submitting} className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-emerald-600 disabled:opacity-60 text-white py-4 font-black">{submitting?<><Loader2 className="w-5 h-5 animate-spin"/>Submitting...</>:<>Submit Internship Application <CheckCircle2 className="w-5 h-5"/></>}</button>
     </div>}
    </div>
   </div>
  </div>
  {success&&<div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5"><div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"><div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-pulse"><CheckCircle2 className="w-12 h-12 text-green-600"/></div><h2 className="text-2xl font-black text-slate-900 mt-5">Application Submitted</h2><p className="text-slate-600 mt-2">Your application and payment proof were received. Our admin team will verify the payment and update the application.</p><div className="mt-5 text-sm font-bold text-blue-600">Redirecting to home...</div></div></div>}
 </div>
}
function Field({label,...props}){return <label className="block"><span className="text-sm font-bold">{label}</span><input {...props} className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3.5 bg-white dark:bg-slate-900 dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500"/></label>}
