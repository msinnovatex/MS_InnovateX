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
function customMeta(tags) {
  document.querySelectorAll('meta[data-msix-custom="true"]').forEach((node) => node.remove());
  (Array.isArray(tags) ? tags : []).forEach((tag) => {
    const type = ['name', 'property', 'http-equiv'].includes(tag?.type) ? tag.type : 'name';
    const key = String(tag?.key || '').trim();
    const content = String(tag?.content || '').trim();
    if (!key || !content) return;
    const node = document.createElement('meta');
    node.setAttribute(type, key);
    node.content = content;
    node.dataset.msixCustom = 'true';
    document.head.appendChild(node);
  });
}
function structuredData(data) {
  let node = document.getElementById('msix-structured-data');
  if (!node) {
    node = document.createElement('script');
    node.id = 'msix-structured-data';
    node.type = 'application/ld+json';
    document.head.appendChild(node);
  }
  node.textContent = JSON.stringify(data);
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
      const canonicalUrl = `${window.location.origin}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;
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
      property('og:url', canonicalUrl);
      customMeta([...(global.custom || []), ...(page.custom || [])]);
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
      canonical.href = canonicalUrl;
      structuredData({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url: canonicalUrl,
        isPartOf: { '@type': 'WebSite', name: 'MS InnovateX Pvt. Ltd.', url: window.location.origin },
        publisher: {
          '@type': 'Organization',
          name: 'MS InnovateX Pvt. Ltd.',
          logo: { '@type': 'ImageObject', url: new URL('/assets/logo.png', window.location.origin).href }
        }
      });
    }).catch(() => {});
    return () => { alive = false; };
  }, [pathname]);
  return null;
}
