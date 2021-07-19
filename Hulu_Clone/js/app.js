const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

loginBtn. addEventListener('click', openModal);
closeBtn. addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open the modal
function openModal() {
  modal.style.display = 'block';
}
// Close the modal
function closeModal() {
  modal.style.display = 'none';
}
// Open the modal
function outsideClick(e) {
  if(e.target === modal) {
    closeModal();
  };
}
