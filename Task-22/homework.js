// Задание№1

let katet_1 = prompt("Введите длину первого катета");

let katet_2 = prompt("Введите длину второго катета");

let gip = prompt("Введите длину гипотенузы");

function triangle(katet_1, katet_2, gip) {
	if (gip*gip==katet_1*katet_1+katet_2*katet_2)
		return true;
	
	else
		return false;

}

triangle(katet_1, katet_2, gip);


// Задание№2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// let n = prompt("Введите число","2");
// let str = prompt("Введите текст в строку","");

// function repeat(str, n) {
// 	for(i=1; i<=n; i++)
// 		str *= n;
// }

// let a = repeat(str, n);
// console.log(a);




// Задание№3

let a = prompt("Введите количество учеников");
let b = prompt("Введите количество парт");

function chirdren(a, b) {
	if (a%b==0) return "Мест всем хватает и не осталось лишних парт";
	else if (a%b>=1.5) return "Остались лишние места"; 
	else return "Остались лишние дети";
}

chirdren(a, b);

// Задание№4

let mark = prompt("Введите отметку");

function marks(mark) {
	switch(mark) {
		case "1":
		return "Unsatisfactory";
		break;

		case "2":
		return "Unsatisfactory";
		break;

		case "3":
		return "Satisfactory";
		break;

		case "4":
		return "Satisfactory";
		break;

		case "5":
		return "Almost good";
		break;

		case "6":
		return "Good";
		break;

		case "7":
		return "Very good";
		break;

		case "8":
		return "Almost excellen";
		break;

		case "9":
		return "Excellent";
		break;

		case "10":
		return "Brilliant";
		break;

		default:
		return "Введенное вами не является отметкой! Попробуйте еще раз."
		break;
	}
}

marks(mark);




// Задание№7


let a = prompt("Введите число");

function PrimeNumber(a) {
	if (a%2==0 && a!=2 || a==1) {
    console.log("Число составное");
	} else if (a%3==0 && a!=3) {
		console.log("Число составное");
	} else {
		console.log("Число простое");
	}
}


console.log(PrimeNumber(a));

// Задание№8

let a = prompt("Введите номер месяца");

function NumberMonth(a) {
	if (a==1 || a==2 || a==12) 
	return "Зима";

	else if (a==3 || a==4 || a==5)
	return "Весна";

	else if (a==6 || a==7 || a==8)
	return "Лето";

	else if (a==9 || a==10 || a==11)
	return "Осень";

	else 
		return "Введенное число не является числом или не соотвествует номеру месяца";

}

NumberMonth(a);

// Задание№9


let i = 99;

function Numbers() {
	for (i; i>=10; i--)	{
    if (i%7!==0) continue;
		console.log(i);
	}
}

Numbers()

// Задание №10

let a = 2;
let b = 20;

let Number = prompt("Введите число");

function NumberPrompt(a, b) {
	if (Number<a || Number>b) {
		console.log("Введенное число должно быть от 2 до 20. Попробуйте еще раз.");
	}
}

NumberPrompt(a, b);

function DivisorsOfNumbers(a, b) {
	for(let i = 1; i<=Number; i++) {
		if (Number%i==0) {
			console.log(i);
		}
	}
}

DivisorsOfNumbers(a, b);


// Задание №11 

let x = 2;
let y = 20;

let Number = prompt("Введите число");

function NumberPrompt(x, y) {
	if (Number<x || Number>y) {
		console.log("Введенное число должно быть от 2 до 20. Попробуйте еще раз.");
	}
}

NumberPrompt(x, y);

function DivisorsOfNumbers(a, y) {
	for(let i = 1; i<=Number; i++) {
		if (Number%i==0) {
			console.log(i);
		}
	}
}

DivisorsOfNumbers(x, y);



// Задание№ 12

let size = prompt("Выберите единицы измерения: кб, мб, гб");
let unit = prompt("Введите количество единиц");
let result;

function BiteConverter( size, unit) {
	switch(size){
		case("кб"): сonsole.log("кб");
		result = unit * 1024
		break;

		case("мб"): console.log("мб");
		result = unit * 1024 * 1024
		break;

		case("гб"): console.log("гб");
		result = unit * 1024 * 1024 * 1024;
		break;
	}
	return "В " + unit + size + result + " кб";
}

BiteConverter( size, unit);


