import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { apiFetch } from '../lib/api';

function meta(name, content) {
  if (!content) return;
  let node = document.querySelector(`meta[name="${name}"]`);
  if (!node) { node = document.createElement('meta'); node.name = name; document.head.appendChild(node); }
  node.content = content;
}
function property(name, content) {
  if (!content) return;
  let node = document.querySelector(`meta[property="${name}"]`);
  if (!node) { node = document.createElement('meta'); node.setAttribute('property', name); document.head.appendChild(node); }
  node.content = content;
}

export default function SeoManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    let alive = true;
    apiFetch('/api/public/site-config').then((data) => {
      if (!alive) return;
      const m = data?.meta || {};
      const key = pathname.startsWith('/services') ? '/services' : pathname;
      const page = m.pages?.[key] || {};
      const global = m.global || {};
      const title = page.title || global.title || 'MS InnovateX';
      const description = page.description || global.description || '';
      const keywords = page.keywords || global.keywords || '';
      document.title = title;
      meta('description', description);
      meta('keywords', keywords);
      meta('twitter:card', 'summary_large_image');
      meta('twitter:title', title);
      meta('twitter:description', description);
      meta('twitter:image', global.ogImage || '');
      property('og:title', title);
      property('og:description', description);
      property('og:image', global.ogImage || '');
      property('og:type', 'website');
      property('og:url', window.location.href);
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
      canonical.href = window.location.href;
    }).catch(() => {});
    return () => { alive = false; };
  }, [pathname]);
  return null;
}
