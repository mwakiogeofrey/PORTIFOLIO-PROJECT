document.addEventListener('DOMContentLoaded', function(){
    const menuIcon = document.querySelector('#menuIcon');
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('uil-multiply');
      navbar.classList.toggle('active');
      logo.classList.toggle('active');
    };
  

})
   



