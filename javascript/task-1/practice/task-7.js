var x = prompt("Введите число");


for(x; x>0; x--) {
	if (x%2!=0) continue;
	console.log(x);
}