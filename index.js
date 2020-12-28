const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const x = document.querySelector('#x');

hamburger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    hamburger.classList.add('hidden');
    x.classList.remove('hidden');
  }
});
x.addEventListener('click', () => {
  x.classList.add('hidden');
  menu.classList.add('hidden');
  hamburger.classList.remove('hidden');
});
