// Задание №1

 var a = prompt("Введите число");
 var b = prompt("Введите число");
 var c = prompt("Введите число");

 function numbers(a, b, c) {
 	if (a>b && b>c) 
 		return(a);
 	else if (c>b && b>a)
 		return(c);
 	else if(b>c && c>a)
 		return(b);
 	else if(a>c && c>b)
 		return(a);
 	else if(c>a && a>b)
 	    return(c);
 	else if( b>a && a>c)
 	    return(b);
 }

 numbers(a, b, c);





 // Задание№2

 var a = prompt("Введите количество суток");
 var b = prompt("Введите количество часов");
 var c = prompt("Введите количество минут");
 var d;
 function seconds(a, b, c) {
 	d=a*24*60*60+b*60*60+c*60;{
 	console.log(d);
 }

 }

 seconds(a, b, c);





// Задание№3


var x = prompt("Введите число  и получите его факториал");
var y=1;

function factorial(x) {
	for( var i=1; i<=x; i++) {
		y *=i;
	}
}

factorial(x);
console.log(y);





// Задание№4


let a = prompt("Введите число");

function numberReverse(a) {
	if (a < 10) { 
		return String(a); 
	} 
	else { 
		return String(a % 10 + numberReverse((a - (a % 10)) / 10)); 
	} 
} 

let c = numberReverse(a);
console.log(c);
