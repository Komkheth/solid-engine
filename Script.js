// Basic interactivity: modal, menu toggle, form handler, year
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // modal logic
  const modal = document.getElementById('modal');
  const openDemo = document.getElementById('watch-demo');
  const closeModal = modal.querySelector('.modal-close');

  openDemo && openDemo.addEventListener('click', function(e){
    e.preventDefault();
    modal.setAttribute('aria-hidden','false');
  });
  closeModal && closeModal.addEventListener('click', function(){ modal.setAttribute('aria-hidden','true'); });
  modal.addEventListener('click', function(e){
    if(e.target === modal) modal.setAttribute('aria-hidden','true');
  });

  // menu button (mobile)
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.main-nav');
  menuBtn && menuBtn.addEventListener('click', function(){
    const open = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!open));
    if(nav) nav.style.display = open ? 'none' : 'flex';
  });

  // fake checkout handler
  window.openCheckout = function(platform){
    alert('Checkout placeholder — select payment and you will receive download link after purchase. (platform: ' + platform + ')');
  };

  // contact form (client-side only)
  const form = document.getElementById('contact-form');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    // Here you would POST to your server / api
    alert('Message sent (demo). Name: ' + data.get('name') + ' — we will reply to ' + data.get('email'));
    form.reset();
  });
});
