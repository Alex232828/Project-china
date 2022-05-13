const burgerBtn = document.querySelector('.burger__btn');
const burgerItem = document.querySelector('.burger__item');
const navList = document.querySelector('.nav__list');

burgerBtn.addEventListener('click', ()=> {
  navList.classList.toggle('nav__show');
  burgerBtn.classList.toggle('burger__active');
})

navList.addEventListener('click', ()=> {
  navList.classList.remove('nav__show');
  burgerBtn.classList.remove('burger__active');
})
