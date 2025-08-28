// Highlight active tab while scrolling
const links = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('section.section, section.hero')];

function setActive() {
  const y = window.scrollY + 100;
  let current = 'projects';
  sections.forEach(sec => {
    const top = sec.offsetTop;
    if (y >= top) current = sec.id || 'projects';
  });
  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
setActive();
window.addEventListener('scroll', setActive);

// Smooth scroll for in-page links
links.forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
