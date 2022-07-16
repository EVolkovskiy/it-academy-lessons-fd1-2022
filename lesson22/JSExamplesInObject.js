
console.log('Проверка на "присутствие":');
var capitalObject = { "Беларусь": "Минск", "Англия": "Лондон" };

console.log("Пытаемся получить значение по ключу:");
console.log('capitalObject["Беларусь"]: ' + capitalObject["Беларусь"]); // Минск
console.log('capitalObject["Англия"]: ' + capitalObject["Англия"]); // Лондон
console.log('capitalObject["Япония"]: ' + capitalObject["Япония"]); // undefined
console.log('\n');

// но мы хотим видеть true или false
console.log("Пытаемся использовать оператор in:");
console.log('"Беларусь" in capitalObject: ' + ("Беларусь" in capitalObject)); // true
console.log('"Англия" in capitalObject: ' + ("Англия" in capitalObject)); // true
console.log('"Япония" in capitalObject: ' + ("Япония" in capitalObject)); // false - т.к. этой страны в объекте
console.log('\n')
