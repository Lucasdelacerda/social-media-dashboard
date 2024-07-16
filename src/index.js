const toggle = document.querySelector('.toggle-change');
const backgroundToggle = document.querySelector('.background-toggle-change');
let corpo = document.querySelector('body');
let mode = document.querySelector('.mode-change');
let cards = document.querySelectorAll('.cards');
mode.innerText = 'Dark mode';

backgroundToggle.addEventListener('click', () => {
  toggle.classList.toggle('left-4');
  toggle.classList.toggle('left-0');
  backgroundToggle.classList.toggle('bg-Toggle-dark');
  backgroundToggle.classList.toggle('bg-Toggle-light');
  corpo.classList.toggle('bg-dark-blue');
  corpo.classList.toggle('bg-White-bg');
  corpo.classList.toggle('text-white');
  corpo.classList.toggle('text-black');
  document.querySelector('.top-background').classList.toggle('bg-Very-Dark-Blues');
  cards.forEach(card => {
    card.classList.toggle('bg-Dark-Desaturated-Blue');
    card.classList.toggle('bg-Light-Grayish-Blue');
  })
  if (toggle.classList.contains('left-4')) {
    mode.innerText = 'Light mode';
  }
  else {
    mode.innerText = 'Dark mode';
  }
})
