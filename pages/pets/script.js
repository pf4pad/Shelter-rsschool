const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav--active');

})

menu.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav__link')) {
    document.body.style.overflow = 'auto';
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');

  }
})

