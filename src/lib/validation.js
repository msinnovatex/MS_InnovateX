const ZERO_WIDTH=/[\u200B-\u200D\uFEFF]/g;

export function normalizeText(value=''){
  return String(value ?? '').normalize('NFKC').replace(ZERO_WIDTH,'').trim();
}

export function normalizeEmail(value=''){
  return normalizeText(value).toLowerCase();
}

export function isValidEmail(value=''){
  const email=normalizeEmail(value);
  if(!email || email.length>254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function normalizePhone(value=''){
  return normalizeText(value).replace(/[\u00A0\s]+/g,' ');
}

export function isValidPhone(value=''){
  const phone=normalizePhone(value);
  const digits=phone.replace(/\D/g,'');
  return digits.length>=7 && digits.length<=15 && /^[+()\d\s-]+$/.test(phone);
}

export function normalizeSubmission(data={}){
  const normalized={};
  for(const [key,value] of Object.entries(data)){
    normalized[key]=typeof value==='string' ? normalizeText(value) : value;
  }
  if('email' in normalized) normalized.email=normalizeEmail(normalized.email);
  if('phone' in normalized) normalized.phone=normalizePhone(normalized.phone);
  return normalized;
}
