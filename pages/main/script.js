
const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];

function onScroll() {
  document.documentElement.style.overflow = '';
};

function offScroll() {
  document.documentElement.style.overflow = 'hidden';
};

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const backgroundHidden = document.querySelector('.background-hidden');
const logo = document.querySelectorAll('.logo');



burger.addEventListener('click', () => {

  setTimeout(() => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav--active');
    backgroundHidden.classList.toggle('visually-hidden');
    if (document.documentElement.style.overflow === 'hidden') {
      onScroll()
    } else {
      offScroll()
    }
  }, 300)


  logo.forEach(item => {
    item.classList.toggle('visually-hidden');
  })


})

function closeMenu() {
  burger.classList.remove('burger--active');
  menu.classList.remove('nav--active');
  backgroundHidden.classList.toggle('visually-hidden');
  logo.forEach(item => {
    item.classList.toggle('visually-hidden');
  })
  onScroll()
}


menu.addEventListener('click', (e) => {

  if (e.target.classList.contains('nav__link') ||
    e.target.classList.contains('burger--active')) {
    closeMenu()
  }
});

backgroundHidden.addEventListener('click', closeMenu)


const MODAL = document.querySelector('.card-list');
const OVERLAY = document.querySelector('.overlay');
const petName = document.querySelectorAll('.class-name');
const ALL_SLIDES = document.querySelector('.all-pets');
const BtnLeft = document.querySelector('.btn-slider-main-prev');
const BtnRight = document.querySelector('.btn-slider-main-next');

const slides = document.querySelector('.card-list')

let width = window.innerWidth;
// Функция случайного числа min max


function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let y;

let arrPet = [];
let stackPet = [];

function slideLoad() {

  switch (arrPet.length) {
    case 0:
      y = 4;
      break;
    case 1:
      y = 0;
      break;
    case 2:
      y = 2;
      break;
    case 3:
      y = 1;
      break;
    case 4:
      y = 5;
      break;
    case 5:
      y = 7;
      break;
    case 6:
      y = 3;
      break;
    case 7:
      y = 6;
      break;
    default:
      y = getRandomInRange(0, 7);
  }

  arrPet.push(y);

  if (arrPet.length > 8) {
    if (stackPet.length >= 8) {
      stackPet = [];
    }
    while (stackPet.includes(i)) {
      y = getRandomInRange(0, 7);
    }
    stackPet.push(y);
  }



  let slide = `<li class="card-item">
                  <img src="${pets[y].img}" alt="${pets[y].type} ${pets[y].name}" class="card-img">
                  <h4 class="class-name">
                    ${pets[y].name}
                  </h4>
                  <a href="" class="card-btn" onclick="getModal(${y})">
                      Learn more
                  </a>
                </li>`;
  ALL_SLIDES.innerHTML += slide;

}


document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i <= 7; i++) {
    slideLoad();
  }

  let left = 0;

  num = 360

  function click(num) {
    BtnLeft.addEventListener('click', () => {

      if (left === 0) {
        left = -1800
      }
      if (left >= -1800) {
        left = left + num;
      }
      if (ALL_SLIDES.style.left < 0) {
        left = 0;
      }

      ALL_SLIDES.style.left = left + 'px'
    })
    BtnRight.addEventListener('click', () => {

      left = left - num;

      if (left < -1800) {
        left = 0;
      }
      ALL_SLIDES.style.left = left + 'px';

    })
  }


  // if (width >= 1280) {
  //   num = 3 * num
  //   click(num)
  // }
  // if (width < 1280 && width >= 760) {
  //   num = 2 * num
  //   click(num)
  // }
  // if (width < 760) {

  //   click(num)
  // }
  click(num)


})

function getModal(y) {

  OVERLAY.classList.add('overlay-active')

  let modal = `<div class="modal">
                    <button class="modal__close">✕</button>
                    <img class="modal__image" src="${pets[y].img}" alt="${pets[y].type} ${pets[y].name}">
                    <div class="modal__text">
                      <h3 class="modal__title">${pets[y].name}</h3>
                      <h4 class="modal__subtitle">${pets[y].type} - ${pets[y].breed}</h4>
                      <h5 class="modal__description">${pets[y].description}</h5>
                      <ul class="list-reset modal__list">
                        <li class="modal__item">
                          <p class="modal__age"> <span>Age:</span> ${pets[y].age}</p>
                        </li>
                        <li class="modal__item">
                          <p class="modal__inoculations"><span>Inoculations:</span> ${pets[y].inoculations.join()}</p>
                        </li>
                        <li class="modal__item">
                          <p class="modal__diseases"><span>Diseases:</span> ${pets[y].diseases.join()}</p>
                        </li>
                        <li class="modal__item">
                          <p class="modal__parasites"><span>Parasites:</span> ${pets[y].parasites.join()}</p>
                        </li>
                      </ul>
                    </div>

                  </div>`



  OVERLAY.innerHTML = modal
  MODAL.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;
    if (target === OVERLAY || target.classList.contains('modal__close')) {
      onScroll()
    };
  })
}

OVERLAY.addEventListener('click', (e) => {
  const target = e.target;
  if (target === OVERLAY || target.classList.contains('modal__close'))

    OVERLAY.classList.remove('overlay-active');

  onScroll()
})


