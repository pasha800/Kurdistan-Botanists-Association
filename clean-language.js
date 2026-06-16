function cleanLanguage(){
  const lang=localStorage.getItem('kba-language')||'ckb';
  const name=lang==='en'?'The Official Scientific Home of Kurdistan Botanists':lang==='ar'?'البيت العلمي الرسمي لعلماء النبات في كردستان':'ماڵە زانستییە فەرمییەکەی رووەکناسانی کوردستان';
  const sub=lang==='en'?'Science, flora and conservation':lang==='ar'?'العلم والنبات والحماية':'زانست، ڕووەک و پاراستن';
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='en'?'ltr':'rtl';
  document.title=name;
  document.querySelectorAll('[data-i18n="brandTitle"],[data-i18n="heroTitle"]').forEach(e=>e.textContent=name);
  document.querySelectorAll('[data-i18n="brandSub"]').forEach(e=>e.textContent=sub);
}
document.addEventListener('DOMContentLoaded',()=>{cleanLanguage();document.querySelector('#languageSelect')?.addEventListener('change',()=>setTimeout(cleanLanguage,50));});
