import React,{useState}from'react';
import{Search,ShieldCheck,UserRound,Building2,CalendarDays,Mail,Loader2,CheckCircle2,AlertCircle,FileBadge,UserCheck}from'lucide-react';
import{apiFetch}from'../../lib/api';

export default function Verification({darkMode}){
 const [mode,setMode]=useState('employee');
 const [query,setQuery]=useState('');
 const [record,setRecord]=useState(null);
 const [loading,setLoading]=useState(false);
 const [error,setError]=useState('');
 const verify=async e=>{
  e.preventDefault();setError('');setRecord(null);
  const value=query.trim().toUpperCase();
  if(!value)return setError(mode==='employee'?'Enter an Employee ID.':'Enter a Certificate ID.');
  if(mode==='employee'&&!/^MSX2026\d{3,}$/.test(value))return setError('Enter a valid Employee ID, e.g. MSX2026001.');
  if(mode==='certificate'&&!/^MSX\d{8}$/.test(value))return setError('Enter a valid certificate ID, e.g. MSX20260001.');
  setLoading(true);
  try{
   const d=mode==='employee'
    ?await apiFetch('/api/public/employee/'+encodeURIComponent(value))
    :await apiFetch('/api/public/certificate/'+encodeURIComponent(value));
   setRecord(mode==='employee'?d.employee:d.certificate);
  }catch(e){setError(e.message||'Verification failed. Please check the ID and try again.')}
  finally{setLoading(false)}
 };
 const shell=darkMode?'min-h-[75vh] bg-[#031126] text-white':'min-h-[75vh] bg-slate-50 text-slate-900';
 return <main className={shell}><div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
  <header className="text-center mb-9"><div className="mx-auto w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center"><ShieldCheck className="w-9 h-9 text-[#1264FF]"/></div><p className="mt-5 text-xs font-black uppercase tracking-[.2em] text-[#1264FF]">MS InnovateX</p><h1 className="text-3xl sm:text-4xl font-black mt-2">Official Verification Centre</h1><p className="mt-3 text-sm text-slate-500 dark:text-slate-300">Verify employees and internship certificates issued by MS InnovateX.</p></header>
  <div className="bg-white dark:bg-[#071a3a] border border-slate-200 dark:border-blue-900/60 rounded-3xl shadow-xl p-3 sm:p-4">
   <div className="grid sm:grid-cols-2 gap-2 mb-4"><button type="button" onClick={()=>{setMode('employee');setQuery('');setRecord(null);setError('')}} className={'rounded-2xl px-4 py-4 font-black flex items-center justify-center gap-2 '+(mode==='employee'?'bg-[#1264FF] text-white':'bg-slate-100 dark:bg-[#04122a] text-slate-600 dark:text-slate-300')}><UserCheck className="w-5 h-5"/>Employee Verification</button><button type="button" onClick={()=>{setMode('certificate');setQuery('');setRecord(null);setError('')}} className={'rounded-2xl px-4 py-4 font-black flex items-center justify-center gap-2 '+(mode==='certificate'?'bg-[#1264FF] text-white':'bg-slate-100 dark:bg-[#04122a] text-slate-600 dark:text-slate-300')}><FileBadge className="w-5 h-5"/>Certificate Verification</button></div>
   <form onSubmit={verify} className="flex flex-col sm:flex-row gap-3"><input value={query} onChange={e=>setQuery(e.target.value.toUpperCase())} autoCapitalize="characters" autoComplete="off" spellCheck={false} className="min-w-0 flex-1 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#04122a] px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 font-bold tracking-wide" placeholder={mode==='employee'?'Enter Employee ID (e.g. MSX2026001)':'Enter Certificate ID (e.g. MSX20260001)'}/><button type="submit" disabled={loading} className="rounded-2xl bg-[#1264FF] text-white px-7 py-4 font-black inline-flex items-center justify-center gap-2 disabled:opacity-60">{loading?<Loader2 className="w-5 h-5 animate-spin"/>:<Search className="w-5 h-5"/>}{loading?'Verifying...':'Verify'}</button></form>
   {error&&<div className="mt-5 rounded-2xl border border-red-200 bg-red-50 text-red-700 dark:bg-red-950/30 dark:border-red-900 dark:text-red-300 p-4 flex gap-3 items-start"><AlertCircle className="w-5 h-5 shrink-0 mt-0.5"/><span className="font-semibold text-sm">{error}</span></div>}
  </div>
  {record&&<section className="mt-6 bg-white dark:bg-[#071a3a] border border-emerald-200 dark:border-emerald-900/60 rounded-3xl shadow-xl overflow-hidden"><div className="p-5 sm:p-6 bg-emerald-50 dark:bg-emerald-950/30 border-b border-emerald-100 dark:border-emerald-900/50 flex items-center gap-3"><CheckCircle2 className="w-7 h-7 text-emerald-600"/><div><div className="font-black text-emerald-700 dark:text-emerald-400">{mode==='employee'?'Employee Verified':'Certificate Verified'}</div><div className="text-xs text-slate-500 dark:text-slate-400">This record was found in the MS InnovateX registry.</div></div></div><div className="p-6 sm:p-8">
  {mode==='employee'?<div className="grid md:grid-cols-[130px_1fr] gap-6 items-center"><div className="w-32 h-40 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 flex items-center justify-center">{record.photo?<img src={record.photo} alt="" className="w-full h-full object-cover"/>:<UserRound className="w-14 h-14 text-slate-400"/>}</div><div><h2 className="text-2xl font-black">{record.fullName}</h2><p className="text-[#1264FF] font-extrabold mt-1">{record.designation}</p><div className="mt-5 grid sm:grid-cols-2 gap-3"><Info icon={UserRound} label="Employee ID" value={record.employeeId}/><Info icon={Building2} label="Department" value={record.department}/><Info icon={Mail} label="Email" value={record.email}/><Info icon={CalendarDays} label="Joining Date" value={record.joiningDate}/></div></div></div>
  :<><h2 className="text-2xl font-black">{record.fullName}</h2><p className="text-[#1264FF] font-extrabold mt-1">{record.role}</p><div className="mt-5 grid sm:grid-cols-2 gap-3"><Info icon={FileBadge} label="Certificate ID" value={record.certificateId}/><Info icon={CalendarDays} label="Internship Period" value={(record.startDate||'—')+' to '+(record.endDate||'—')}/><Info icon={CalendarDays} label="Issue Date" value={record.issueDate}/><Info icon={ShieldCheck} label="Issued By" value={(record.issuerName||'MS InnovateX')+' · '+(record.issuerDesignation||'')}/></div></>}
  </div></section>}
  <p className="text-center text-xs text-slate-400 mt-7">Verification results are based on records in the official MS InnovateX registry.</p>
 </div></main>
}
function Info({icon:Icon,label,value}){return <div className="rounded-2xl bg-slate-50 dark:bg-[#04122a] border border-slate-200 dark:border-blue-900/50 p-4"><div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400"><Icon className="w-4 h-4 text-[#1264FF]"/>{label}</div><div className="mt-2 font-bold break-words">{value||'—'}</div></div>}
