const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (contactForm && formResponse) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formResponse.textContent = 'Thank you for your message! We will contact you soon.';
    contactForm.reset();
  });
}
