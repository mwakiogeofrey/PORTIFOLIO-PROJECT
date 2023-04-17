document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('#menuIcon');
  const navbar = document.querySelector('.navbar');
  const logo = document.querySelector('.logo');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('uil-multiply');
    navbar.classList.toggle('active');
    logo.classList.toggle('active');
  };

  window.onscroll = () => {
    menuIcon.classList.remove('uil-multiply');
    navbar.classList.remove('active');
    logo.classList.remove('active');
  };
});
