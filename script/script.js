'use strict';
let state = 'waiting';
let cupImg = document.querySelector('.coffee-cup img');
cupImg.onclick = takeCoffee;
let progressBar = document.querySelector('.progress-bar');


function bayCoffee(name, price, element) {
  if( state != 'waiting') {
    return;
  }
  let balanceInput = document.querySelector('input[placeholder="Баланс"]');
    if(+balanceInput.value < price) {
    changeDisplayText('Недостаточно средств');
    balanceInput.style.background = 'yellow';
  } else {
    balanceInput.value -= price;
    balanceInput.style.background = '';
    state = 'cooking';
    cookCoffee (name, element);
  }
}


function cookCoffee(name, buttonElement) {
  changeDisplayText('Ваш ' + name +' готовится');
  let buttomImg = buttonElement.querySelector('img');
  let cupSrc = buttomImg.getAttribute('src');
  cupImg.setAttribute('src', cupSrc);
  cupImg.classList.remove('d-none');


  let i = 0;
  let interval = setInterval(function () {
    i++;
    progressBar.style.width  = i + '%';
    cupImg.style.opacity = i + '%';
    if(i == 110) {
      clearInterval(interval);
      changeDisplayText('Ваш ' + name + ' готов');
      state = 'ready';
      cupImg.style.cursor = 'pointer';

    }
  }, 100);
}

function takeCoffee() {
  if (state != 'ready') {
    return;
  }
  state = 'waiting';
  cupImg.style.opacity = 0;
  cupImg.style.cursor = '';
  cupImg.classList.add('d-none');
  changeDisplayText('Выберите кофе');
  progressBar.style.width = 0;
}


function changeDisplayText(text) {
  let displayText = document.querySelector('.display-text');
  displayText.innerHTML = text;
}
