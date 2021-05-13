// const toggle = document.querySelector('.toggle');
const bars = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-times');
const toggle = document.querySelector('.toggle');
const logo = document.querySelector('.logo');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  logo.classList.toggle('.active');
  navigation.classList.toggle('.active');
});
