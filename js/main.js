const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close--btn');
const menuList = document.querySelector('.menu__list');
const menuDark = document.querySelector('.menu--dark');

menuBtn.addEventListener('click', function() {
    menuList.classList.toggle('menu__list--open');
    menuDark.classList.toggle('menu--open');
});

menuClose.addEventListener('click', function() {
    menuList.classList.remove('menu__list--open');
    menuDark.classList.toggle('menu--open');
})