// строка - это массив букв
var str1 = "Какая-то Строка";

console.log('Буква 1 - это "' + str1[0] + '"');
console.log('Буква 2 - это "' + str1[1] + '"');
console.log('Буква 3 - это "' + str1[2] + '"');
console.log('Буква 4 - это "' + str1[3] + '"');
console.log('\n');

console.log("строка и for in");
for (var index in str1) {
  console.log('Буква ' + (parseInt(index) + 1) + ' - это "' + str1[index] + '"');
}
console.log('\n');

console.log("Методы строк (пару примеров):");
// Методы строк, массивов, объектов - это встроенные готовые готовые функции, доступные "через точку"
console.log("str1.toLowerCase(): ", str1.toLowerCase()); // toLowerCase - к нижнему регистру
console.log("str1.toUpperCase(): ", str1.toUpperCase()); // toLowerCase - к верхнему регистру
console.log("str1.split('а'): ", str1.split('а')); // split - разбиение строки по делителю (сам делитель пропадает)
console.log("str1.slice(3, 10): ", str1.slice(3, 10)); // slice - "срез" (индекс-начала, индекс-окончания-среза) - тут мы вырезаем часть строки с 3 буквы по 10 (не включая 10)
console.log("str1.replace('a', '3'): ", str1.replace('a', '3')); // заменить все буквы а на 3
console.log("str1.charAt(5): ", str1.charAt(5)); // charAt - character at - "буква на позиции..." 5
console.log('\n');

console.log("Пример с использованием методов строк (и массивов):");
// expression - математическое выражение
var expressionStr = prompt('Ведите выражение (вида "a+b"):'); // "5+6"
var expressionArr = expressionStr.split('+'); // ["5", "6"]
var aStr = expressionArr[0]; // "5"
var bStr = expressionArr[1]; // "6"
var a = parseInt(aStr); // 5
var b = parseInt(bStr); // 6
var result = a + b; // 5 + 6 = 11
var min = Math.min(a, b); // 5
var max = Math.max(a, b); // 6
alert('Результат сложения = ' + result +
 '\n' + 'min: ' + min +
 '\n' + 'max: ' + max);

console.log('\n');
console.log('\n');

console.log("Методы массивов (пару примеров):");
var capitalArray = ["Минск", "Париж", "Будапешт", "Лондон", "Токио"];

console.log('capitalArray: ', capitalArray);

// includes - включает ли? (эту-строку)
console.log('capitalArray.includes("Париж"): ', capitalArray.includes("Париж")); // true
console.log('capitalArray.includes("Нью-Йорк"): ', capitalArray.includes("Нью-Йорк")); // false -- это в массиве нету - так что результат - false

// indexOf - "какой индекс у..." (этого-элемента) (если элемент есть - вернёт его номер, если нет -1)
console.log('capitalArray.indexOf("Лондон"): ', capitalArray.indexOf("Лондон")); // 3
console.log('capitalArray.indexOf("Нью-Йорк"): ', capitalArray.indexOf("Нью-Йорк")); // -1

// join - метод, обратный к строка.split(); - т.е. объединяет строки используя "соединитель"
console.log('capitalArray.join("-"): ', capitalArray.join("-")); // выводим через -
console.log('capitalArray.join(" ==+== "): ', capitalArray.join(" ==+== ")); // выводим через эту строку
console.log('\n');
console.log('\n');

console.log("Встроенные объекты (Math - математика):");
console.log('\n');
console.log("Math.PI:", Math.PI); // 3.1415926535
console.log("Math.sqrt(25): ", Math.sqrt(25)); // 5
console.log("Math.sqrt(1681): ", Math.sqrt(1681)); // 41
console.log("Math.abs(100): ", Math.abs(100)); // abs - absolute - берёт число по модулю (если число было < 0 -> оно домножается на -1)
console.log("Math.abs(-99): ", Math.abs(-99)); // 99
console.log("Math.round(9.66): ", Math.round(9.66)); // round - округлить до целого (будет 10)
console.log("Math.round(9.12): ", Math.round(9.12)); // 9
console.log("Math.random()", Math.random()); // random - случайность - выдаёт случайное рациональное число от (0, 1)
console.log("Math.random()", Math.random()); // каждый раз разное значение
console.log("Math.random()", Math.random());
console.log("Math.random()", Math.random());
console.log("Math.random()", Math.random());

// от 0 до end (end - правая граница)
// function getRandomNumber(end) {
//   // (0, 1) * end   ->   (0, end)
//   return Math.round(Math.random() * end);
// }

// от start до end (start - левая граница. end - правая граница)
function getRandomNumber(start, end) {
  return Math.round(Math.random() * (end - start)) + start;
}

// неправильно - правая граница больше, чем нужно
// (0, 1) * end      ->   (0, end)
// (0, end) + +start ->   (start, end+start)

// правильно:
// (0, 1) * (end - start)     ->   (0, end - start)
// (0, end - start) + start   ->   (start, end - start + start)
// (start, end)

// 11 ... 51
// разница = 51 - 11 = 40
// генерируем случ. число до 40
// + 11

// 5 ... 13
// разница = 13 - 5 = 8
// генерируем случ. число до 8 // 0, 1, 2, 3, 4, 5, 6, 7, 8
// +5
// 5, 6, 7, 8, 9, 10, 11, 12, 13

console.log("getRandomNumber(-100, 100)", getRandomNumber(-100, 100));
console.log("getRandomNumber(-100, 100)", getRandomNumber(-100, 100));
console.log("getRandomNumber(-100, 100)", getRandomNumber(-100, 100));
console.log("getRandomNumber(-100, 100)", getRandomNumber(-100, 100));
console.log("getRandomNumber(-100, 100)", getRandomNumber(-100, 100));
console.log("getRandomNumber(-100, 100)", getRandomNumber(-100, 100));
console.log("getRandomNumber(-100, 100)", getRandomNumber(-100, 100));
console.log("getRandomNumber(-100, 100)", getRandomNumber(-100, 100));
console.log("getRandomNumber(-100, 100)", getRandomNumber(-100, 100));
console.log('\n');
console.log('\n');

console.log("Встроенные объекты (Date - дата и время):");
var now = new Date(); // получить сегодня
var yesterday = new Date("2022-07-01");

console.log("now: ", now);
console.log("yesterday: ", yesterday);
console.log("в этот момент год          = ", now.getFullYear());
console.log("в этот момент месяц        = ", now.getMonth());
console.log("в этот момент день         = ", now.getDay());
console.log("в этот момент час          = ", now.getHours());
console.log("в этот момент минута       = ", now.getMinutes());
console.log("в этот момент секунда      = ", now.getSeconds());
console.log("в этот момент миллисекунда = ", now.getMilliseconds());
// эти значения можно и установить, используя now.setFullYear, now.setMonth и т.д. - см. в книге
console.log('\n');

// дата может быть как число:
var nowNumber = Number(new Date()); // большое число - это кол-во миллисекунд, прошедших с 1 января 1970г
console.log('с 1 января 1970г прошло:');
console.log('миллисекунд: ', nowNumber);
console.log('секунд     : ', Math.round(nowNumber / 1000));
console.log('минут      : ', Math.round(nowNumber / 1000 / 60));
console.log('часов      : ', Math.round(nowNumber / 1000 / 60 / 60));
console.log('дней       : ', Math.round(nowNumber / 1000 / 60 / 60 / 24));
console.log('лет        : ', Math.round(nowNumber / 1000 / 60 / 60 / 24 / 365));
console.log('\n');
