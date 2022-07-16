console.log('Hello!');

var count = 0;
var resultElement = document.getElementById('result');

function printHello() {
  console.log('Кнопка нажата! (' + new Date().toISOString() + ')');
}

function showResult() {
  // console.log('Кнопка нажата ' + count + ' раз(а)!');
  resultElement.innerText = 'Кнопка нажата ' + count + ' раз(а)!';
}

function countPlus() {
  count += 1;
  showResult();
}

function countMinus() {
  count -= 1;
  showResult();
}


// form

var form = document.forms.info;
var ageInput = form.elements.age;
form.onsubmit = validate;
ageInput.onchange = resetAgeInputColor;
// console.log('form', form);
// console.log('ageInput', ageInput);

function validate() {
  var ageStr = ageInput.value;
  var age = parseInt(ageStr);

  if (isNaN(age)) {
    ageInput.style.borderColor = "red";
    ageInput.focus();
    return false;
  }

  if (age < 10 || age > 120) {
    ageInput.style.borderColor = "red";
    ageInput.focus();
    return false;
  }

  return true;
}

// ageInput.oninput = resetAgeInputColor;
// resetAgeInputColor - как сбрасывать цвет?
function resetAgeInputColor() {
  ageInput.style.borderColor = "unset";
}


// $("#hello").click(countPlus);
// $("#hello").hide();
// $("#hello").html("<b>Тут была кнопка<b>");

// $('#jquery-result').load('file.txt');

function loadFile() {
  $('#jquery-result').load('file.txt');
}

$("#hello").click(loadFile);

// или в "одну строку":
// $("#hello").click(function () {
//   $('#jquery-result').load('file.txt');
// });