// navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbarMobDeploy");
  const hambLink = document.getElementById('hambLink');
  const navWrapper = navbar.querySelector('ul');

  const toggleNavBar = (navbarElement, hambLink) => {
      hambLink.classList.toggle("active");
      navbarElement.classList.toggle("open");
  };

  hambLink.addEventListener('click', () => toggleNavBar(navbar, hambLink));

  navWrapper.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
          toggleNavBar(navbar, hambLink);
      }
  });
});

// autofecha
document.getElementById('current-year').textContent = new Date().getFullYear();