// Все элементы label внутри таблицы. Должно быть 3 элемента.

let label = document.querySelectorAll("table label");

console.log(label);






// Первую ячейку таблицы (со словом "Возраст").

let age = document.querySelector("table tr td");

console.log(age);







// Вторую форму в документе.

let formTwo = document.querySelector('[name="search-person"]');

console.log(formTwo);







// Форму с именем search, без использования её позиции в документе.


let formNameSearch = document.querySelector('[name="search"]');

console.log(formNameSearch);







// Элемент input в форме с именем search. Если их несколько, то нужен первый.

let inputOne = formNameSearch.getElementsByTagName('input')[0];

console.log(inputOne);






// Элемент с именем info[0], без точного знания его позиции в документе.

let infoNull = document.querySelector('[name="info[0]"]');

console.log(infoNull);







// Элемент с именем info[0], внутри формы с именем search-person.

let infoOne = formTwo.querySelector('[name="info[1]"]');

console.log(infoOne);