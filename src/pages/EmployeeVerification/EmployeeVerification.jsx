import React,{useState}from'react';
import{Search,ShieldCheck,UserRound,Building2,Briefcase,CalendarDays,Mail,Loader2,CheckCircle2,AlertCircle,ArrowLeft}from'lucide-react';
import{apiFetch}from'../../lib/api';

export default function EmployeeVerification({darkMode}){
 const[id,setId]=useState(''),[employee,setEmployee]=useState(null),[loading,setLoading]=useState(false),[error,setError]=useState('');
 const verify=async e=>{
  e.preventDefault();setError('');setEmployee(null);
  const value=id.trim().toUpperCase();
  if(!/^MSX2026\d{3,}$/.test(value))return setError('Please enter a valid Employee ID, for example MSX2026001.');
  setLoading(true);
  try{const d=await apiFetch('/api/public/employee/'+encodeURIComponent(value));setEmployee(d.employee)}
  catch(e){setError(e.message==='The requested service could not be found.'?'Employee ID not found.':e.message)}
  finally{setLoading(false)}
 };
 return <main className={darkMode?'min-h-[75vh] bg-[#031126] text-white':'min-h-[75vh] bg-slate-50 text-slate-900'}>
  <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
   <div className="text-center mb-9"><div className="mx-auto w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center"><ShieldCheck className="w-9 h-9 text-[#1264FF]"/></div><p className="mt-5 text-xs font-black uppercase tracking-[.2em] text-[#1264FF]">MS InnovateX</p><h1 className="text-3xl sm:text-4xl font-black mt-2">Employee Verification</h1><p className="mt-3 text-sm text-slate-500 dark:text-slate-300">Enter an Employee ID to verify an employee and view their official company details.</p></div>
   <div className="bg-white dark:bg-[#071a3a] border border-slate-200 dark:border-blue-900/60 rounded-3xl shadow-xl p-6 sm:p-8">
    <form onSubmit={verify} className="flex flex-col sm:flex-row gap-3"><input value={id} onChange={e=>setId(e.target.value)} inputMode="text" autoCapitalize="characters" autoCorrect="off" autoComplete="off" spellCheck={false} className="flex-1 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#04122a] px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 font-bold tracking-wide" placeholder="Enter Employee ID (e.g. MSX2026001)" autoComplete="off" spellCheck="false"/><button type="submit" disabled={loading} className="rounded-2xl bg-[#1264FF] text-white px-7 py-4 font-black inline-flex items-center justify-center gap-2 disabled:opacity-60">{loading?<Loader2 className="w-5 h-5 animate-spin"/>:<Search className="w-5 h-5"/>}{loading?'Verifying...':'Verify Employee'}</button></form>
    {error&&<div className="mt-5 rounded-2xl border border-red-200 bg-red-50 text-red-700 dark:bg-red-950/30 dark:border-red-900 dark:text-red-300 p-4 flex gap-3 items-start"><AlertCircle className="w-5 h-5 shrink-0 mt-0.5"/><span className="font-semibold text-sm">{error}</span></div>}
   </div>
   {employee&&<section className="mt-6 bg-white dark:bg-[#071a3a] border border-emerald-200 dark:border-emerald-900/60 rounded-3xl shadow-xl overflow-hidden">
    <div className="p-5 sm:p-6 bg-emerald-50 dark:bg-emerald-950/30 border-b border-emerald-100 dark:border-emerald-900/50 flex items-center gap-3"><CheckCircle2 className="w-7 h-7 text-emerald-600"/><div><div className="font-black text-emerald-700 dark:text-emerald-400">Employee Verified</div><div className="text-xs text-slate-500 dark:text-slate-400">This Employee ID matches an MS InnovateX record.</div></div></div>
    <div className="p-6 sm:p-8 grid md:grid-cols-[180px_1fr] gap-7 items-center">
     <div className="flex justify-center"><div className="w-40 h-48 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 flex items-center justify-center">{employee.photo?<img src={employee.photo} alt="Employee" className="w-full h-full object-cover"/>:<UserRound className="w-16 h-16 text-slate-400"/>}</div></div>
     <div><h2 className="text-2xl font-black">{employee.fullName}</h2><p className="text-[#1264FF] font-extrabold mt-1">{employee.designation}</p><div className="mt-6 grid sm:grid-cols-2 gap-4"><Info icon={ShieldCheck} label="Employee ID" value={employee.employeeId}/><Info icon={Building2} label="Department" value={employee.department}/><Info icon={Mail} label="Email" value={employee.email}/><Info icon={CalendarDays} label="Joining Date" value={employee.joiningDate}/></div></div>
    </div>
   </section>}
   <p className="text-center text-xs text-slate-400 mt-7">Verification is based on the official MS InnovateX employee registry.</p>
  </div>
 </main>
}
function Info({icon:Icon,label,value}){return <div className="rounded-2xl bg-slate-50 dark:bg-[#04122a] border border-slate-200 dark:border-blue-900/50 p-4"><div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400"><Icon className="w-4 h-4 text-[#1264FF]"/>{label}</div><div className="mt-2 font-bold break-words">{value||'—'}</div></div>}
