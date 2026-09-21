// year
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());

// header scroll
const header=document.getElementById('header');
if(header && !header.classList.contains('solid')){
  addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});
}

// mobile menu
const tgl=document.getElementById('menuToggle'),links=document.getElementById('navlinks');
if(tgl){
  tgl.addEventListener('click',()=>{const o=links.classList.toggle('open');tgl.setAttribute('aria-expanded',o)});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');tgl.setAttribute('aria-expanded',false)}));
}

// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// cutline
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('lit');cio.unobserve(e.target)}}),{threshold:.8});
document.querySelectorAll('[data-cut]').forEach(el=>cio.observe(el));

// contact -> mailto
const sb=document.getElementById('sendBtn');
if(sb){
  sb.addEventListener('click',()=>{
    const g=id=>(document.getElementById(id)||{}).value||'—';
    const t=g('f-type');
    const body=encodeURIComponent('Име: '+g('f-name')+'\nТелефон: '+g('f-phone')+'\nИзделие: '+t+'\n\nОписание:\n'+g('f-msg'));
    const ok=document.getElementById('okMsg'); if(ok) ok.style.display='block';
    window.location.href='mailto:sevmetal@abv.bg?subject='+encodeURIComponent('Запитване от сайта — '+t)+'&body='+body;
  });
}

// gallery filter + lightbox
const grid=document.getElementById('gallery');
if(grid){
  const facebookAlbums=[
    {cat:'vrati',label:'Метални врати',prefix:'vrati',count:177,ext:{58:'png'}},
    {cat:'parapeti',label:'Парапети',prefix:'parapeti',count:216},
    {cat:'ogradi',label:'Огради и порти',prefix:'ogradi-vrati',count:73},
    {cat:'konstrukcii',label:'Метални конструкции',prefix:'konstrukcii',count:82},
    {cat:'ogradi',label:'Огради и порти',prefix:'ogradi',count:55},
    {cat:'reshetki',label:'Решетки',prefix:'reshetki',count:76}
  ];
  facebookAlbums.forEach(({cat,label,prefix,count,ext={}})=>{
    for(let n=1;n<=count;n++){
      const src=`assets/img/facebook/${prefix}-${String(n).padStart(3,'0')}.${ext[n]||'jpg'}`;
      const item=document.createElement('div');
      item.className='g-item';
      item.dataset.cat=cat;
      item.innerHTML=`<img src="${src}" data-full="${src}" alt="${label} — СЕВ Метал Варна" loading="lazy"/><span class="tag">${label}</span>`;
      grid.append(item);
    }
  });
  const items=[...grid.querySelectorAll('.g-item')];
  document.querySelectorAll('.gal-filter button').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelector('.gal-filter button.active')?.classList.remove('active');
      btn.classList.add('active');
      const f=btn.dataset.filter;
      items.forEach(it=>it.style.display=(f==='all'||it.dataset.cat===f)?'':'none');
    });
  });
  // lightbox
  const lb=document.getElementById('lb'),lbImg=document.getElementById('lbImg'),lbCount=document.getElementById('lbCount');
  let visible=[],cur=0;
  function vis(){return items.filter(it=>it.style.display!=='none')}
  function show(i){visible=vis();cur=(i+visible.length)%visible.length;const im=visible[cur].querySelector('img');lbImg.src=im.dataset.full||im.src;lbImg.alt=im.alt;lbCount.textContent=(cur+1)+' / '+visible.length;}
  items.forEach(it=>it.addEventListener('click',()=>{lb.classList.add('open');show(visible.indexOf(it)>-1?visible.indexOf(it):items.indexOf(it));}));
  document.getElementById('lbX').addEventListener('click',()=>lb.classList.remove('open'));
  document.getElementById('lbPrev').addEventListener('click',()=>show(cur-1));
  document.getElementById('lbNext').addEventListener('click',()=>show(cur+1));
  lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')});
  addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
}
