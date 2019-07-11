
// ПРАКТИКА 1. Задание №1

var  newArrey = [];

for(var i = 2; i<=20; i++) {
	if (i%2==0) {
	newArrey.push(i);
}
}
console.log(newArrey);


// Задание№2


var  newArrey = [];

for(var i = 0; i<=20; i++) {
	if (i%2==0) {
	newArrey.push(i*5);
}
}
console.log(newArrey);

// Задание№3

var a = prompt("Введите первое число");
var b = prompt("Введите второе число");
var c = prompt("Введите третье число");

var Arrey = [a, b, c]; { // нужно делать в цикле
	console.log(Arrey);
}
 
 
var number;

if (a>b && b>=c) {
	number=a;
	console.log(a);

} else if (c>b && b>=a) {
	number = c;
	console.log(c);
} else if (b>c && c>=a) {
	number = b;
	console.log(b);
}


var newArrey = [];

newArrey.push(Arrey[0]/number); // нужно делать в цикле
newArrey.push(Arrey[1]/number);
newArrey.push(Arrey[2]/number);
console.log(newArrey)


// Задание№4

var a = prompt("Введите первое число");
var b = prompt("Введите второе число");
var c = prompt("Введите третье число");


var Arrey = [a, b, c]; {
	console.log(Arrey);
}
 
 
var number;

if (a>b && b>=c) {
	number=a;
	console.log(a);

} else if (c>b && b>=a) {
	number = c;
	console.log(c);
} else if (b>c && c>=a) {
	number = b;
	console.log(b);
}


var newArrey = [];

newArrey.push(Arrey[0]/number);
newArrey.push(Arrey[1]/number);
newArrey.push(Arrey[2]/number);
console.log(newArrey)


newArrey.splice(0, 3, Arrey[2]/number,Arrey[1]/number, Arrey[0]/number); // цикл

console.log(newArrey);







ПРАКТИКА 2. Задание№1 // предлагаю обсудить на занятии


let number = [];
for(let i = 1; i<=35; i++)
	number.push(i); {
		console.log(number);
	}

let NewNumber= [];
for(let i = 1; i<=35; i++)
    NewNumber.push(i);
	NewNumber.splice(0, 10);
for(i=1; i<=10;i++)
 	NewNumber.push(i); {
 		console.log(NewNumber);
 	}
NewNumber.splice(0, 10, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11);
console.log(NewNumber);

// console.log(NewNumber.indexOf(21));

NewNumber.fill(2 ** 1, 10, 15);
console.log(NewNumber);  
 // пять первых степеней двойки вместо 21-25


// console.log(NewNumber.indexOf(26));
// console.log(NewNumber.indexOf(31));

NewNumber.fill(1, 15, 20); {
	console.log(NewNumber);
}
// c 26 по 30 заменили единицами

// console.log(NewNumber.indexOf(31));
// console.log(NewNumber.indexOf(35));


NewNumber.splice(20, 5, NewNumber.slice(20, 25).join(" ")); {
	console.log(NewNumber);
}
// заменяем в массиве с 20 индекса пять элементов на те же, которые копируем  из массива и склеиваем в строку
