const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
if(menu){menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='78px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px';nav.style.background='#0a0a0b';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #292a2e';});}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.section,.project-card,.timeline-card,.certificate-card').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .7s ease, transform .7s ease';observer.observe(el)});
const style=document.createElement('style');style.textContent='.show{opacity:1!important;transform:translateY(0)!important}';document.head.appendChild(style);
