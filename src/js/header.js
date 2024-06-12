const btn = document.querySelector('.mob-menu-btn');
const burger = document.querySelector('.header-burger');
const modal = document.querySelector('.mob-menu');
const menuList = document.querySelector('.mob-menu-list');

menuList.addEventListener('click', () => {
  modal.classList.remove('mob-menu-active');
  burger.classList.toggle('active');
});

btn.addEventListener('click', () => {
  burger.classList.toggle('active');

  if (!burger.classList.contains('active')) {
    modal.classList.remove('mob-menu-active');
  } else {
    modal.classList.add('mob-menu-active');
  }
});

// =========================Switch-Themes===================================

const btnThemes = document.querySelector('.span-themes');
const btnCirckle = document.querySelector('.span-circkle');
const btnMoon = document.querySelector('.span-moon');
const section = document.querySelector('.header');

let blackThemes = false;

btnThemes.addEventListener('click', () => {
  btnThemes.classList.toggle('span-active');
  btnCirckle.classList.toggle('transform');
  btnMoon.classList.toggle('transform-moon');
  switcher();
});

function switcher() {
  if (btnThemes.classList.contains('span-active')) {
    document.body.setAttribute('dark', '');
  } else {
    document.body.removeAttribute('dark', '');
  }
}
