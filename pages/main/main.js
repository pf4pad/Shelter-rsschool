// pets slider



// dom for slider

let sliderOuter = document.querySelector('.outer-slider');
let sliderInner = document.querySelector('.all-pets');

let sliderLeftBtn = document.querySelector('.pets-slider__button-left');
let sliderRightBtn = document.querySelector('.pets-slider__button-right');
let x = sliderInner.style.left;

let width = window.innerWidth;

// dom for modal window
let modal = document.querySelector('.modal');
let modalWindows = document.querySelectorAll('.modal-window');
let cancelBtn = document.querySelectorAll('.cancel');
let aboutBtns = document.querySelectorAll('.pets-card__button');


// get random number function
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// stack for don't allow repeat cards
let petStack = [];
let rightStack = [];
let leftStack = [];

// loading cards randomly in slider with DOM
function slideLoad() {
  let k;
  for (let i = 0; i < 8; i++) {
    k = getRandomNumberBetween(0, 7);
    while (petStack.includes(k)) {
      k = getRandomNumberBetween(0, 7);
    }
    petStack.push(k);
  }
  k = petStack[0];
  petStack.push(k);


  petStack.forEach(k => {
    let petWrap = `<div class="pets-cards">
            <div class="pets-card" onclick="openModal(${k})">
                <div class="pets-card__image">
                    <img class="pets-card_image-img" src="${pets[k].img}" alt="${pets[k].type} ${pets[k].name}">
                </div>
                <h3 class="pets-card__name">${pets[k].name}</h3>
                <button class="pets-card__button" data-modal="${k}">Learn more</button>
            </div>
        </div>`;

    sliderInner.innerHTML += petWrap;
  })
}

function rightLoad() {
  rightStack = [];
  let k;
  let xStack = petStack.slice(6, 9);

  for (let i = 0; i < 3; i++) {
    k = getRandomNumberBetween(0, 7);
    while (xStack.includes(k) || rightStack.includes(k)) {
      k = getRandomNumberBetween(0, 7);
    }
    rightStack.push(k);
  }

  xStack.forEach(item => {
    rightStack.push(item);
  })

  for (let i = 0; i < 2; i++) {
    k = getRandomNumberBetween(0, 7);
    while (rightStack.includes(k)) {
      k = getRandomNumberBetween(0, 7);
    }
    rightStack.push(k);
  }

  k = rightStack[0];
  rightStack.push(k);

  sliderInner.innerHTML = '';

  rightStack.forEach(k => {
    let petWrap = `<div class="pets-cards">
            <div class="pets-card" onclick="openModal(${k})">
                <div class="pets-card__image">
                    <img class="pets-card_image-img" src="${pets[k].img}" alt="${pets[k].type} ${pets[k].name}">
                </div>
                <h3 class="pets-card__name">${pets[k].name}</h3>
                <button class="pets-card__button" data-modal="${k}">Learn more</button>
            </div>
        </div>`;

    sliderInner.innerHTML += petWrap;
  })
}

function leftLoad() {
  console.log(petStack);
  leftStack = [];
  let k;
  let xStack = petStack.slice(0, 3);

  for (let i = 0; i < 3; i++) {
    k = getRandomNumberBetween(0, 7);
    while (xStack.includes(k) || leftStack.includes(k)) {
      k = getRandomNumberBetween(0, 7);
    }
    leftStack.push(k);
  }

  console.log(leftStack)

  xStack.forEach(item => {
    leftStack.push(item);
  })

  for (let i = 0; i < 2; i++) {
    k = getRandomNumberBetween(0, 7);
    while (leftStack.includes(k)) {
      k = getRandomNumberBetween(0, 7);
    }
    leftStack.push(k);
  }

  k = leftStack[0];
  leftStack.push(k);

  console.log(leftStack)

  sliderInner.innerHTML = '';

  leftStack.forEach(k => {
    let petWrap = `<div class="pets-cards">
            <div class="pets-card" onclick="openModal(${k})">
                <div class="pets-card__image">
                    <img class="pets-card_image-img" src="${pets[k].img}" alt="${pets[k].type} ${pets[k].name}">
                </div>
                <h3 class="pets-card__name">${pets[k].name}</h3>
                <button class="pets-card__button" data-modal="${k}">Learn more</button>
            </div>
        </div>`;

    sliderInner.innerHTML += petWrap;
  })
}

function moveRight() {
  sliderInner.classList.remove('move-left');
  sliderInner.classList.remove('move-right-768');
  sliderInner.classList.remove('move-right-320');
  if (width >= 1280) {
    sliderInner.classList.add('move-right');
  }
  if (width < 1280 && width >= 768) {
    sliderInner.classList.add('move-right-768');
  }
  if (width < 768) {
    sliderInner.classList.add('move-right-320');

  }
  sliderRightBtn.removeEventListener('click', moveRight);
  sliderLeftBtn.removeEventListener('click', moveLeft);
}
function moveLeft() {
  if (width >= 1280) {
    sliderInner.classList.add('move-left');
  }
  if (width < 1280 && width >= 768) {
    sliderInner.classList.add('move-left-768');
  }
  if (width < 768) {
    sliderInner.classList.add('move-left-320');

  }
  sliderRightBtn.removeEventListener('click', moveRight);
  sliderLeftBtn.removeEventListener('click', moveLeft);
}

sliderInner.addEventListener('animationend', () => {
  if (sliderInner.classList.contains('move-right') || sliderInner.classList.contains('move-right-768') || sliderInner.classList.contains('move-right-320')) {
    rightLoad();
    petStack = rightStack.slice(0, rightStack.length);
  }
  else if (sliderInner.classList.contains('move-left') || sliderInner.classList.contains('move-left-768') || sliderInner.classList.contains('move-left-320')) {
    leftLoad();
    petStack = leftStack.slice(0, leftStack.length);
  }
  sliderInner.classList.remove('move-right');
  sliderInner.classList.remove('move-right-768');
  sliderInner.classList.remove('move-right-320');
  sliderInner.classList.remove('move-left');
  sliderInner.classList.remove('move-left-768');
  sliderInner.classList.remove('move-left-320');
  sliderRightBtn.addEventListener('click', moveRight);
  sliderLeftBtn.addEventListener('click', moveLeft);
})

sliderRightBtn.addEventListener('click', moveRight);

sliderLeftBtn.addEventListener('click', moveLeft);

document.addEventListener("DOMContentLoaded", () => {
  slideLoad();
})

// open modal window by adding DOM elements
function openModal(k) {

  modal.classList.add('display-flex');

  let modalWrapper = `<div class="modal-window">
                            <div class="cancel" onclick="closeModal()">
                                <span class="first-x"></span>
                                <span class="second-x"></span>
                            </div>
                            <div class="modal-window__image">
                                <img src="${pets[k].img}" alt="${pets[k].name}" class="modal-window__image-img">
                            </div>
                            <div class="modal-window__content">
                                <div class="modal-window__content-title">
                                    <h2 class="modal-window__content-title-name">${pets[k].name}</h2>
                                    <p class="modal-window__content-title-breed">${pets[k].type} - ${pets[k].breed}</p>
                                </div>
                                <p class="modal-window__content-description">${pets[k].description}</p>
                                <ul class="modal-window__content-specifications">
                                    <li class="modal-window__content-specifications-item"><span>Age:</span> ${pets[k].age}</li>
                                    <li class="modal-window__content-specifications-item"><span>Inoculations:</span> ${pets[k].inoculations.join()}</li>
                                    <li class="modal-window__content-specifications-item"><span>Diseases:</span> ${pets[k].diseases.join()}</li>
                                    <li class="modal-window__content-specifications-item"><span>Parasites:</span> ${pets[k].parasites.join()}</li>
                                </ul>
                            </div>
                        </div>`;

  modal.innerHTML = modalWrapper;

  document.body.style.overflow = 'hidden';

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal()
    }

  })
}

function closeModal() {
  modal.innerHTML = '';
  modal.classList.remove('display-flex');
  document.body.style.overflow = 'visible';
}

// hamburger menu

let logo = document.querySelector('.header-logo');

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let list = document.querySelector('.list');
let navigationItems = document.querySelectorAll('.list__item');

function closeMenu() {
  hamburger.classList.remove('rotate-hamburger');
  nav.classList.remove('menu-open');
  list.classList.remove('list-open');
  logo.classList.remove('right126');
  document.body.style.overflow = 'visible';
  list.style.paddingTop = '0';
}

function openMenu() {
  hamburger.classList.add('rotate-hamburger');
  nav.classList.add('menu-open');
  list.classList.add('list-open');
  logo.classList.add('right126');
  document.body.style.overflow = 'hidden';
  if (window.innerHeight < 600) {
    list.style.paddingTop = '15%';
  }
}

hamburger.addEventListener('click', () => {
  if (list.classList.contains('list-open')) {
    closeMenu();
  }
  else {
    openMenu();
  }
})

// click outside to close menu

nav.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav')) {
    closeMenu();
  }
})

// close menu 320px

// close menu on click to navigation
navigationItems.forEach(item => {
  item.addEventListener('click', () => {
    closeMenu();
  })
})
