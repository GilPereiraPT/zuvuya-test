const toggle=document.getElementById('menu-toggle');const nav=document.getElementById('site-nav');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));document.documentElement.dataset.theme=localStorage.getItem('zuvuya-test-theme')||'dark';const selector=document.getElementById('appearance');if(selector){selector.value=document.documentElement.dataset.theme;selector.addEventListener('change',()=>{document.documentElement.dataset.theme=selector.value;localStorage.setItem('zuvuya-test-theme',selector.value)})}
// Remove obsolete homepage fragments retained in old bookmarks or cached navigation.
if((location.hash==="#about"||location.hash==="#contact")&&location.pathname.replace(/\/+$/,"").endsWith("/zuvuya-test")){history.replaceState(null,"",location.pathname+location.search);window.scrollTo(0,0)}

/* Accessible contact link, available in the footer on each preview page. */
const zContactFooter=document.querySelector('.site-footer .container');
if(zContactFooter&&!zContactFooter.querySelector('.footer-contact')){
  const row=document.createElement('p');
  row.className='footer-contact';
  row.append('Contact: ');
  const address=document.createElement('a');
  address.href='mailto:zuvuyads@gmail.com';
  address.textContent='zuvuyads@gmail.com';
  row.append(address);
  zContactFooter.append(row);
}
