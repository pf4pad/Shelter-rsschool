

// modal window

let modal = document.querySelector('.modal');
let modalWindows = document.querySelectorAll('.modal-window');
let cancelBtn = document.querySelectorAll('.cancel');
let aboutBtns = document.querySelectorAll('.pets-card__button');


let sliderBtns = document.querySelectorAll('.pets-slider-btns');


let width = window.innerWidth;
let sliderInner = document.querySelector('.all-pets');
let sliderOuter = document.querySelector('.outer-slider');

// get random number function
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// stack for don't allow repeat cards
let petStack = [];
let octStack = [];
let sixStack = [];
let threeStack = [];

let k;

// loading cards randomly in slider with DOM
function cardLoad() {

  k = getRandomNumberBetween(0, 7);
  petStack.push(k);

  // if(petStack.length > 8){
  if (octStack.length >= 8) {
    octStack = [];
  }
  if (sixStack.length >= 6) {
    sixStack = [];
  }
  if (threeStack.length >= 3) {
    threeStack = [];
  }
  while (octStack.includes(k) || sixStack.includes(k) || threeStack.includes(k)) {
    k = getRandomNumberBetween(0, 7);
  }
  octStack.push(k);
  sixStack.push(k);
  threeStack.push(k);
  // }



  let cardWrapper = `<div class="pets-cards" onclick="openModal(${k})">
                            <div class="pets-card">
                                <div class="pets-card__image">
                                    <img class="pets-card_image-img" src="${pets[k].img}" alt="${pets[k].type} ${pets[k].name}">
                                </div>
                                <h3 class="pets-card__name">${pets[k].name}</h3>
                                <button class="pets-card__button" data-modal="${k}">Learn more</button>
                            </div>        
                        </div>`;

  sliderInner.innerHTML += cardWrapper;
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 48; i++) {
    cardLoad();
  }
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

// pets pagination

let firstPageBtn = document.querySelector('.first__page');
let prevPageBtn = document.querySelector('.prev__page');
let nextPageBtn = document.querySelector('.next__page');
let lastPageBtn = document.querySelector('.last__page');
// pets page count
let page__count = document.querySelector('.pets-slider-btns__button-num');

let y = sliderInner.style.top;
let x = sliderInner.style.left;

function pageCount() {
  if (width >= 1280) {
    page__count.textContent = `${-y / 930 + 1}`;
  } else if (width >= 768 && width < 1280) {
    page__count.textContent = `${-y / 1395 + 1}`;
  } else {
    page__count.textContent = `${-y / 1395 + 1}`;
  }
  if (page__count.textContent == Math.floor(sliderInner.offsetHeight / sliderOuter.offsetHeight)) {
    lastPageBtn.classList.add('button__inactive');
    nextPageBtn.classList.add('button__inactive');
    firstPageBtn.classList.remove('button__inactive');
    prevPageBtn.classList.remove('button__inactive');
  }
  else if (page__count.textContent == 1) {
    lastPageBtn.classList.remove('button__inactive');
    nextPageBtn.classList.remove('button__inactive');
    firstPageBtn.classList.add('button__inactive');
    prevPageBtn.classList.add('button__inactive');
  }
  else {
    lastPageBtn.classList.remove('button__inactive');
    nextPageBtn.classList.remove('button__inactive');
    firstPageBtn.classList.remove('button__inactive');
    prevPageBtn.classList.remove('button__inactive');
  }
}

nextPageBtn.addEventListener('click', () => {
  if (width >= 1280) {
    y = y - 930;
    if (y < -4650) {
      y = -4650;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 1280 && width >= 768) {
    y = y - 1395;
    if (y < - 9765) {
      y = - 9765;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 758) {
    y = y - 1395;
    if (y < - 20925) {
      y = - 20925;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
})

lastPageBtn.addEventListener('click', () => {
  if (width >= 1280) {
    y = -4650;
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 1280 && width >= 768) {
    y = -9765;
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 768) {
    y = -20925;
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
})

prevPageBtn.addEventListener('click', () => {
  if (width >= 1280) {
    y = y + 930;
    if (y >= 0) {
      y = 0;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 1280 && width >= 768) {
    y = y + 1395;
    if (y >= 0) {
      y = 0;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 768) {
    y = y + 1395;
    if (y >= 0) {
      y = 0;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
})

firstPageBtn.addEventListener('click', () => {
  y = 0;
  pageCount();
  sliderInner.style.top = 0;
})

window.onresize = function () {
  width = window.innerWidth;
  y = 0;
  pageCount();
  sliderInner.style.top = 0;
}

// hamburger menu

let logo = document.querySelector('.header-logo');

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let list = document.querySelector('.list');

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

// close menu on click to burger
hamburger.addEventListener('click', () => {
  if (list.classList.contains('list-open')) {
    closeMenu();
  }
  else {
    openMenu();
  }
})

// close menu on click outside of menu

nav.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav')) {
    closeMenu();
  }
})

// close menu 320px

let navigationItems = document.querySelectorAll('.list__item');

navigationItems.forEach(item => {
  item.addEventListener('click', () => {
    closeMenu();
  })
})