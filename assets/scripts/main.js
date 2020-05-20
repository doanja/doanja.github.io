// select dom items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const main = document.getElementById('home');

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    // set menu state
    showMenu = false;
  }
};

// set initial state of the menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

const test = () => {
  alert('home clicked');
};

main.addEventListener('click', test);

const test2 = () => {
  alert('menu clicked');
};

menuNav.addEventListener('click', test2);
