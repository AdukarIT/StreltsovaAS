// Задание №1 

function numbers(a, b, c) {
	return a+b+c;
} 

let d = numbers(4, 5, 6); {
	console.log(d);
}

// или

function numbers(a, b, c) {
	return a+b+c;
} 

console.log(numbers(4, 5, 6));


// Задание№2

let x = prompt("Введите число");

let a = 0;

function sum(x) {
	for(let i=0; i<=x; i++) {
		a+=i;
	}
}

sum(x)

console.log(a);


// Задание №4

let x = prompt("Введите число");

let a = 1;

function factorial(x) {
	for(let i=1; i<=x; i++) {
		a *=i;
	}
}

factorial(x);
console.log(a);