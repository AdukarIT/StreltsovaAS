
// Задание №1

let x = prompt("Введите номер квартиры");

let a=1;
let b=2;
let c=3;
let d=4;
let e=5;

if(x<=20 && x>=1 ) {
	console.log(a);
} else if (x>20 && x<=40) {
	console.log(b);
} else if(x>40 && x<=60) {
	console.log(c);
} else if(x>60 && x<=80) {
	console.log(d);
} else if(x>80 && x<=100) {
	console.log(e);
} else if (x<1) {
	console.log("Введенное число должно быть больше 1. Попробуйте еще раз.");
} else if(x>100) {
	console.log("Введенное число должно быть меньше 100. Попробуйте еще раз.");
}


// Задание№2

let x = prompt("Введите марку автомобиля");

let a = "BMW";
let b = "Suzuki";
let c ="Ford";
let d ="Peugeot etc";
let e = "Toyota";
let f ="Opel";
let j ="Volvo";

switch(x){

	case a:
	console.log("Германия");
	break;

	case b:
	console.log("Япония");
	break;

	case c:
	console.log("США");
	break;

	case d:
	console.log("Франция");
	break;

	case e:
	console.log("Япония");
	break;

	case f:
	console.log("Германия");
	break;

	case j:
	console.log("Швеция");
	break;

	default:
    console.log("some_input");

}


// Задание№3 

let x = prompt("Введите год") 

if (x%4==0 && x%100!==0) {
	console.log("Год високосный");
} else if (x%100==0) {
	console.log("Год невисокосный");
} else if(x%100==0 && x%400==0) {
	console.log("Год високосный");
}


//Задание№4

let x = prompt("Введите число");

if (x<1 || x>20) {
    console.log("Введенное число должно быть от 1 до 20. Попробуйте еще раз.")
}

let i =1;

for(i; i<11; i++){
    console.log(i+"*"+x+"="+i*x);
}


//Задание№5

var i

var summa = 0;

for(i=0; i<51;i++) {
    if(i%2==0) continue;
    summa +=i;
    console.log(summa);
    }


//Задание№5

var a=1;
var b=1;
var c=0;


var i;

for(i=2; i<16; i++) {
	c=a+b
    console.log(c);
    a=b;
    b=c;
}