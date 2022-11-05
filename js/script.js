// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// accordion
document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false,
  openOnInit: [0],
    collapse: false
});
})

// tabs
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})

// search
document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".form").classList.add("form__active");
  document.querySelector(".form-btn__closed").classList.add("form-btn__closed--active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form");
  let closed = document.querySelector(".form-btn__closed");
  if (!target.closest(".form-container")) {
  form.classList.remove("form__active");
  closed.classList.remove("form-btn__closed--active");
  form.querySelector("input").value = "";
  }
})

document.querySelector(".form-btn__closed").addEventListener("click", function() {
  document.querySelector(".form").classList.remove("form__active");
  document.querySelector(".form-btn__closed").classList.remove("form-btn__closed--active");
})

// pagination
const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  loop: true,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

})
