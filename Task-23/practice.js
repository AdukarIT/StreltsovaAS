
// Задание №1

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


newArrey.splice(0, 3, Arrey[2]/number,Arrey[1]/number, Arrey[0]/number);

console.log(newArrey);