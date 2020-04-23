'use strict';
let state = 'waiting';
let cupImg = document.querySelector('.coffee-cup');
cupImg.onclick = takeCoffee;
let progressBar = document.querySelector('.progress-bar');
let water = document.querySelector('.water div');



function bayCoffee(name, price, element) {
    if (state != 'waiting') {
        return;
    }
    let balanceInput = document.querySelector('input[placeholder="Баланс"]');
    if (+balanceInput.value < price) {
        changeDisplayText('Недостаточно средств');
        balanceInput.style.background = 'yellow';
    } else {
        balanceInput.value -= price;
        balanceInput.style.background = '';
        state = 'cooking';
        getRaperGlass(name);
    }
}

function getRaperGlass(name) {
    changeDisplayText('Ваш ' + name + ' готовится');
    cupImg.classList.remove('d-none');
    let j = 0;
    let intervalFirst = setInterval(function() {
        j ++;
        cupImg.style.backgroundPositionX = (310 - j*4) + 'px';
        if (j == 68) {
            clearInterval(intervalFirst);
            moveWater();
            cookCoffee(name);
        }
    }, 40);
}

function cookCoffee(name) {
        let i = 0;
        let interval = setInterval(function() {
        i++;
        progressBar.style.width = i + '%';
        if (i == 110) {
            clearInterval(interval);
            water.style.width = '';
            changeDisplayText('Ваш ' + name + ' готов');
            state = 'ready';
            cupImg.style.cursor = 'pointer';

        }
    }, 100);
}
function moveWater() {
        let k = 0;
    let intervalSecond = setInterval( function() {
        k +=2;
        water.style.width = k + 'px';
        if( k == 80) {
            clearInterval(intervalSecond);
        }
    }, 5);

}


function takeCoffee() {
    if (state != 'ready') {
        return;
    }
    state = 'waiting';
    cupImg.style.backgroundPositionX = '';
    cupImg.style.cursor = '';
    cupImg.classList.add('d-none');
    changeDisplayText('Выберите кофе');
    progressBar.style.width = 0;
}


function changeDisplayText(text) {
    let displayText = document.querySelector('.display-text');
    displayText.innerHTML = text;
}



//-----------купюры--------------------

let bills =document.querySelectorAll('.bills img');
 for (let i=0; i < bills.length; i++) {
   bills[i].onmousedown = takeMoney;
   }

 function takeMoney(event) {
   event.preventDefault();
   let bill = event.target;

   bill.style.position = 'absolute';
   bill.style.transform = 'rotate(90deg)';
   bill.style.margin = 0;

   let billCoords = bill.getBoundingClientRect();
   let billWidth = billCoords.width;
   let billHeight = billCoords.height;
   // console.log(event.clientX, event.clientY)  отображает положение курсора

  // следующие две строки устанавливаются при нажатии
   bill.style.top = event.clientY - billWidth/2 +'px'; // купюра совмещается с центром курсора (места x  и y инверсируем , так как bill.style.transform = 'rotate(90deg)'  - x с y поменялись местами)
   bill.style.left = event.clientX - billHeight/2 +'px';


   // а в этой фукции те же две строки всякий раз обновляются, купюра прилипла к курсору
   window.onmousemove = function(event) {
     bill.style.top = event.clientY - billWidth/2 +'px';
     bill.style.left = event.clientX - billHeight/2 +'px';
   }

   //а здесь купюра отлипает (inAtm() - проверка на заданные координаты)
   bill.onmouseup = function() {
     window.onmousemove = null;
     console.log(inAtm(bill));
   }


 }

function inAtm(bill) {
  let atm = document.querySelector('.atm img');
  let atmCoords = atm.getBoundingClientRect();//координаты купюроприемника
  let billCoords = bill.getBoundingClientRect();// координаты "носа" купюры

  let billLeftTopCorner = {'x': billCoords.x, 'y': billCoords.y};
  let billRightTopCorner = {'x': billCoords.x + billCoords.width, 'y': billCoords.y};

  let atmLeftTopCorner = {'x': atmCoords.x, 'y': atmCoords.y};
  let atmRightTopCorner = {'x': atmCoords.x + atmCoords.width, 'y': atmCoords.y};
  let atmLeftBottomCorner = {'x': atmCoords.x, 'y': atmCoords.y + atmCoords.height/2};

  if (billLeftTopCorner.x > atmLeftTopCorner.x
    && billRightTopCorner.x < atmRightTopCorner.x
    && billLeftTopCorner.y > atmLeftTopCorner.y + 120
    && billLeftTopCorner.y < atmLeftBottomCorner.y
    ) {
    return true;
  } else {
   return false;

  }

}
