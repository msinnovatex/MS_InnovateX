import { useEffect, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { apiFetch } from '../lib/api';

export default function AdvertisementPopup() {
  const { pathname } = useLocation();
  const [ad, setAd] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === '/email-marketing' || pathname === '/careers' || pathname.startsWith('/admin')) return undefined;
    let alive = true;
    const timer = setTimeout(() => {
      apiFetch('/api/public/site-config').then((data) => {
        const next = data?.advertisement;
        if (!alive || !next?.active || !next.id) return;
        try { if (sessionStorage.getItem(`msix-ad-dismissed-${next.id}`) === '1') return; } catch {}
        setAd(next);
        setVisible(true);
      }).catch(() => {});
    }, 1200);
    return () => { alive = false; clearTimeout(timer); };
  }, [pathname]);

  if (!ad || !visible) return null;
  const close = () => {
    setVisible(false);
    try { sessionStorage.setItem(`msix-ad-dismissed-${ad.id}`, '1'); } catch {}
  };

  return (
    <div className="fixed z-[70] bottom-5 right-5 w-[min(380px,calc(100vw-2rem))] rounded-2xl overflow-hidden bg-white text-slate-900 shadow-2xl border border-slate-200 animate-modal-scale">
      <button onClick={close} aria-label="Close advertisement" className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/75">
        <X className="w-4 h-4" />
      </button>
      {ad.image && <img src={ad.image} alt={ad.title || 'Advertisement'} className="w-full h-36 object-cover" />}
      <div className="p-5">
        {ad.title && <h3 className="text-lg font-black leading-tight">{ad.title}</h3>}
        {ad.text && <p className="mt-2 text-sm text-slate-600 leading-relaxed">{ad.text}</p>}
        {ad.buttonText && ad.buttonUrl && (
          <a href={ad.buttonUrl} target={ad.buttonUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1264FF] text-white text-sm font-bold hover:bg-[#0052E0]">
            {ad.buttonText}<ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
