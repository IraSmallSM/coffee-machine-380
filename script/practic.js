'use strict';


/*
// window.document.documentElement.body


//Поиск элементов


// актуальные методы
/*
let coffeeMachine = document.querySelector('#coffee');
console.log(coffeeMachine);// универсальный, для любых типов селекторов

let image =  document.querySelector('img');
console.log(image);

let coffeeItems = document.querySelectorAll('.coffee-item');
console.log(coffeeItems);

let itemImages = document.querySelectorAll('.coffee-item img');
console.log(itemImages);
let cupImages = document.querySelectorAll('.coffee-item img, .coffee-cup img');
console.log(cupImages);

*/

//--------------работа с элементами
// 1. Изменение css-свойств
/*let coffeeMachine = document.querySelector('.coffee-machine');
coffeeMachine.style.border = '4px solid red';
coffeeMachine.style.borderRadius = '10px';
coffeeMachine.style.position = 'absolute';
coffeeMachine.style.top = '15px';
coffeeMachine.style.left = '150px';

let coffeeMachineTop = coffeeMachine.style.top;
console.log(parseInt(coffeeMachineTop));

*/

/*
//изменение атрибутов
let balance = document.querySelector("input[type='text']");
let balanceType = balance.getAttribute('type');
console.log(balanceType);
balance.setAttribute('type', 'date');

console.log(balance.hasAttribute('placeholder'));
balance.removeAttribute('aria-label');


//а пример ниже можно применять только с стандартным атрибутам
balance.value = 500;// == balance.setAttribute('value', 500);
console.log(balance.value);// == balance.getAttribute('value');

*/

/*
//изменения классов
let changeButton = document.querySelector('.btn');
console.log(changeButton.classList);
changeButton.classList.remove('btn-primary');
changeButton.classList.add('btn-success');
// changeButton.classList.toggle('btn-success'); вкл. / выкл.
*/
/*
//изменение содержимого элементов
let displayText = document.querySelector('.display-text');
console.log(displayText.innerHTML);
console.log(displayText.innerText);

//displayText.innerHTML = '<b>Готовим кофе</b>';
displayText.innerText = '<b>Готовим кофе</b>';

*/

//события и слушатели событий
//click mouserover mouseup mousedown mousemove - мышь
//focus chance - для input
// изменения  с помощью атрибут


///--------планирование---------------
//таймаут
/*
let timeout = setTimeout(painBody, 3000, 'green');

let changeButton = document.querySelector('.btn');
changeButton.onclick = function() {
  clearTimeout(timeout);
}


function painBody(color) {
  document.body.style.background = color;
}
*/

/*
let interval = setInterval(trashConsole, 3000);

let changeButton = document.querySelector('.btn');
changeButton.onclick = function() {
  clearInterval(interval);
}


function trashConsole() {
  console.log(Math.random())
}
*/


