document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }
});