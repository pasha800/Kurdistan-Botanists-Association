function cleanLanguage(selected){
  const select=document.querySelector('#languageSelect');
  const lang=selected||select?.value||localStorage.getItem('kba-language')||'ckb';
  localStorage.setItem('kba-language',lang);
  if(select) select.value=lang;
  const name=lang==='en'?'The Official Scientific Home of Kurdistan Botanists':lang==='ar'?'البيت العلمي الرسمي لعلماء النبات في كردستان':'ماڵە زانستییە فەرمییەکەی رووەکناسانی کوردستان';
  const sub=lang==='en'?'Science, flora and conservation':lang==='ar'?'العلم والنبات والحماية':'زانست، ڕووەک و پاراستن';
  const nav=lang==='en'?['About','Geography','Programs','Flora','Useful herbs','Global importance','Events','Membership','Contact']:lang==='ar'?['عن الموقع','الجغرافيا','البرامج','قاعدة النبات','الأعشاب المفيدة','الأهمية العالمية','الفعاليات','العضوية','التواصل']:['دەربارە','جوگرافیا','پرۆژەکان','بنکەی ڕووەک','گژوگیا','گرنگیی جیهانی','ڕووداوەکان','ئەندامبوون','پەیوەندی'];
  const themeDark=lang==='en'?'Dark':lang==='ar'?'داكن':'تاریک';
  const themeLight=lang==='en'?'Light':lang==='ar'?'فاتح':'ڕووناک';
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='en'?'ltr':'rtl';
  document.title=name;
  document.querySelectorAll('[data-i18n="brandTitle"],[data-i18n="heroTitle"]').forEach(e=>e.textContent=name);
  document.querySelectorAll('[data-i18n="brandSub"]').forEach(e=>e.textContent=sub);
  document.querySelectorAll('#navLinks a').forEach((a,i)=>{if(nav[i])a.textContent=nav[i];});
  const btn=document.querySelector('#themeToggle');
  if(btn){btn.textContent=document.documentElement.dataset.theme==='dark'?themeLight:themeDark;}
}
document.addEventListener('DOMContentLoaded',()=>{
  cleanLanguage();
  document.querySelector('#languageSelect')?.addEventListener('change',e=>cleanLanguage(e.target.value));
  document.querySelector('#themeToggle')?.addEventListener('click',()=>setTimeout(()=>cleanLanguage(),30));
});
