
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



  const works = document.querySelector('.otherWorks');
 const popupArray = [
  {
    id:1,
    Name: 'Profesional Art Printing Data',
    tital: 'Multi Post Stories',
    tital2: 'Keeping track of hundreds  of components website',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featureimage: 'images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  },
  {
    id:2,
    Name: 'Profesional Art Printing Data',
    tital: 'Multi Post Stories',
    tital2: 'Keeping track of hundreds  of components website',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featureimage: 'images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    button: 'see project',
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  },
  {
    id:3,
    Name: 'Profesional Art Printing Data',
    tital: 'Multi Post Stories',
    tital2: 'Keeping track of hundreds  of components website',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featureimage: 'images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  },
  {
    id:4,
    Name: 'Profesional Art Printing Data',
    tital: 'Multi Post Stories',
    tital2: 'Keeping track of hundreds  of components website',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featureimage: 'images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  },
  {
    id:5,
    Name: 'Profesional Art Printing Data',
    tital: 'Multi Post Stories',
    tital2: 'Keeping track of hundreds  of components website',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featureimage: 'images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  },
  {
    id:6,
    Name: 'Profesional Art Printing Data',
    tital: 'Multi Post Stories',
    tital2: 'Keeping track of hundreds  of components website',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featureimage: 'images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  }];
 function generatecard (){
 works.innerHTML =popupArray .map((x) => {
  const{id,Name,desc,description,featureimage,technologies,tital,tital2,demoLink,sourceLink}=x
    return `<div class="work2">
    <div class="work2Info">
        <h3 class="work2Title">
            ${Name}
        </h3>
        <p class="work2Description">
           ${description}
        </p>
        <ul class="work2Languages">
          <li class="work2Button">${technologies[0]}</li>
            <li class="work2Button">${technologies[1]}</li>
            <li class="work2Button">${technologies[2]}</li>
        </ul>
    </div>
    <div class="projectLink">
<button data-modal-target="#modal${id}" class="work2Link">See Project</button>
    </div>
 </div>

 <div class="windor" id="windor">
 <button data-close-button class="close-btn">&times;</button>
                <h1 class="popup-story">${tital}s</h1>
                <h2 class="keeper">${tital2}</h2>
                
                <ul id="languages">
                    <li>${technologies[0]}</li>
                    <li>${technologies[1]}</li>
                    <li>${technologies[2]}</li>
                </ul>
                <img class="popup-image" src="${featureimage}" alt="Snapshoot">
                <p id="loren">${desc}</p>
                <div class="popup-btn-wrapper">
                    <button type="button" class="btn-popup-btn">
                      See Live
                      <i
                        class="fa-solid fa-arrow-up-right-from-square"
                      ></i></button
                    ><button type="button" class="btn-popup-btn">
                      See Source <i class="fa-brands fa-github"></i>
                    </button>
                  </div>
            </div>
            <div id="overlay"></div>
            `;
  }).join('');
};
generatecard();

const openModalBtn=document.querySelectorAll('[data-modal-target]');
const closeModalBtn=document.querySelectorAll('[data-close-button]');
const overlay=document.getElementById('overlay');
var modalPage=document.getElementById('windor');


function openModal(modal) {
  if (modal == null) return;
  modalPage.classList.add('active');
  overlay.classList.add('active');

}
function closeModal(modal) {
  if (modal == null) return;
  modalPage.classList.remove('active');
  overlay.classList.remove('active');
}


closeModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
openModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});


