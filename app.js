const menue = document.querySelector('.menue_bar');
const wrapper = document.querySelector('.nav_wrapper');
const menuelinks = document.querySelector('.menue_bar_desktop');
/* const navLogo = document.querySelector('#navbar__logo'); */
menue.addEventListener('click', () => {
  menue.classList.toggle('a');
  menuelinks.classList.toggle('active');
  wrapper.classList.toggle('.navopen');
});
const menuBarHide = () => {
  const menuBars = document.querySelector('.a');
  if (window.innerWidth <= 960 && menuBars) {
    menue.classList.toggle('a');
    menuelinks.classList.remove('active');
  }
};
document.getElementById('menubarhide').addEventListener('click', menuBarHide);
/* menuelinks.addEventListener('click', menuBarHide);
menuelinks.addEventListener('click', menuBarHide); */
const data = [{
  name: 'Tonic', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', image: 'pic1.png', srclink: 'test', livelink: 'livelinktest', listOne: 'Uber',
}, {
  name: 'Multi-Post Stories', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', image: 'pic2.png', srclink: 'test2', livelink: 'livelinktest2',
}, {
  name: 'Tonic', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', image: 'pic3.png', srclink: 'test3', livelink: 'livelinktest3',
}, {
  name: 'Multi-Post Stories', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', image: 'pic4.png', srclink: 'test4', livelink: 'livelinktest4',
}];
for (let x = 0; x < data.length; x += 1) {
  const output = document.querySelector('#portfolio');
  output.innerHTML += `<div class='covers'><img class='img__class' src='/img/${data[x].image}'><div class='right__box'><h1 class='popup_tekst'>${data[x].name}<ul class='selections'><li class='main__txt__wrapper'><a href='#' class='main__txt' id='canopy_1'>CANOPY</a></li><li class='main__txt__wrapper'><a href='#' class='main__txt' id='canopy_2'>FACEBOOK</a></li><li class='circle__wrapper'><a href='#' class='circle'></a></li><li class='list__wrapper'><a href='#' class='list' id='back__1'>BACK END DEV</a></li><li class='list__wrapper'><a href='#' class='list' id='back__2'>Full Stack Dev</a></li><li class='circle__wrapper'><a href='#' class='circle'></a></li><li class='list__wrapper'><a href='#' class='list'>2015</a></li></ul></h1><p class='signup-disc'>${data[x].description}<ul class='platform'><li class='pla__btn'>html</li><li class='pla__btn'>css</li><li class='pla__btn'>javascript</li></ul></p><button onclick='openproject(${x})' class='see-project'>see project</button></div></div>`;
}
const modalTriggerButton = document.querySelector('.see-project');
const modal = document.querySelector('#popup');
const madalCloseButton = document.querySelector('.closeBtn');
function openproject(index) {
  document.querySelector('#popup_header').innerHTML = data[index].name;
  document.getElementById('popupimg').src = `/img/${data[index].image}`;
  modal.style.display = 'flex';
}
document.getElementById('openproject').addEventListener('click', openproject);
modalTriggerButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});
madalCloseButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

/* const email = document.getElementsByClassName('text__input');
const form = document.querySelector('.main__form');
const eror_message = document.querySelector('.error'); */
/*
form.addEventListener('submit', () => {
  eror_message.innerHTML = "<p>'Stop'</p>";
  // let messages = 'Plese make all the charactors in small casses.';
  //     for (let i= 0; i <= email.length; i++){
  //         if (email[i] === email[i].toUpperCase()){
  //            return messages;
  //     }
  // }
});
 */