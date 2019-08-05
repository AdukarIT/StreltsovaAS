// Создайте селект с несколькими опциями, добавьте одну опцию используя Javascript, 
// сделайте так, чтобы по выбору опции выводилось сообщение 
// с данными этой опции

let select = document.createElement("select");
document.forms.city.appendChild(select);

let Minsk = new Option("Minsk", "cityMinsk");
let Brest = new Option("Brest", "cityBrest");
let Mogilev = new Option("Mogilev", "cityMogilev");


	select.appendChild(Minsk);
	select.appendChild(Brest);
	select.appendChild(Mogilev);



// Создайте форму вычисления процентов по вкладу:
