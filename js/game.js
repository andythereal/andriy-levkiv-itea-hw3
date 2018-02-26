var range = 5;
var award = 2;
var totalAward = 0;
var myAward = 0;
var playerNumber;
var question = 'Чи бажаєте почати гру?';

function myAwardFunction(a) { // Тут функція :)
  return myAward = award * a;
}
do {
  var randomNumber = ((Math.random() * range) + 0 | 0);
  var result = confirm(question);
  if (result === false) {
    document.write('Сьогодні ви не виграли 1 328 600 $ :), а могли. ');
  }
  else {
    playerNumber = Number(prompt('Введіть число' + '   //Підказка :) ' + randomNumber));
    if (playerNumber === randomNumber) {
      myAwardFunction(5); // Тут функція :)
    }
    else {
      playerNumber = Number(prompt('Введіть число' + '   //Підказка :) ' + randomNumber));
    }
    if (playerNumber === randomNumber) {
      myAwardFunction(2.5); // Тут функція :)
    }
    else {
      playerNumber = Number(prompt('Введіть число' + '   //Підказка :) ' + randomNumber));
      if (playerNumber === randomNumber) {
        myAwardFunction(1); // Тут функція :)
      }
      else {
        myAwardFunction(0); // Тут функція :)
      }
    }
  }
  totalAward = totalAward + myAward;
  question = 'Чи бажаєте продовжити гру?';
  range = range * 2;
  award = award * 3;
} while (result === true && totalAward < 1000000);
document.write('Дякуємо за гру, Ваш виграш становить - ' + totalAward + '$');
