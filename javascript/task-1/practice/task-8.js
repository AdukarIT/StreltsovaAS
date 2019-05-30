var x = prompt("Введите число");

while(x>1) {
	x--;
	if( x%2!=0) continue;
	console.log(x);
}