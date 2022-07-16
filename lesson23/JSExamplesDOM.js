console.log('Привет, консоль!');

// window.location.href

// получение элемента по id
var firstP = document.getElementById('first');
console.log('firstP', firstP);

// получение элементов по тэгу
var allP = document.getElementsByTagName('p');
console.log('allP', allP); // [<p>, <p>, <p>]

// получение элементов по классу
var allBoxes = document.getElementsByClassName('box');
console.log('allBoxes', allBoxes); // [<p>, <p>, <p>]

// получение элемента по query-селектору (первого)
var bold = document.querySelector('.box b');
console.log('bold', bold); // <b>

// получение элементов по query-селектору
var allBold = document.querySelectorAll('.box b');
console.log('allBold', allBold); // [<b>, <b>]


// элемент.getElementById()
// элемент.getElementsByTagName()
// элемент.getElementsByClassName()
// элемент.querySelector()
// элемент.querySelectorAll()

const firstB = document.querySelector('b');
const firstPAndB = firstP.querySelector('b');

console.log('firstB', firstB);
console.log('firstPAndB', firstPAndB);

// с плюсом - не будет видно, что за элемент. Например, тут результат будет: "plus example:[object HTMLElement]"
// console.log('plus example: ' + firstPAndB);

alert('(1) После нажатия - изменится текст второго <b>');

// firstPAndB.innerText = "[УДАЛЕНО]"
var inner = firstPAndB.innerText;
var innerTextWithoutSpaces = inner.split(' ').join('');
firstPAndB.innerText = innerTextWithoutSpaces;


alert('(2) После нажатия - изменится текст второго <b>');
firstPAndB.innerHTML = firstPAndB.innerHTML + ' <i>italic</i>';


alert('(3) После нажатия - изменятся стили:');
var allBoxesBold = document.querySelectorAll('.box b');
// [<b>, <b>]

for (var bold of allBoxesBold) {
  bold.style.color = 'blue';
  bold.setAttribute('data-bold', "my-value for test JS");

  // названия немного в другом формате. Например, для border-bottom-left-radius - выглядит вот так:
  // bold.style.borderBottomLeftRadius = '10px';
}
