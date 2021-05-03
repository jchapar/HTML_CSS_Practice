// Bring in elements
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

// Navigation Toggle
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
})
