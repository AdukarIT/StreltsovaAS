// // Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

var input = document.createElement("input");
var button = document.createElement("button");
button.innerHTML = "Жми";

document.body.appendChild(input);
document.body.appendChild(button);

button.addEventListener("click", function(){
	var inputTwo = document.createElement("input");
	document.body.insertBefore(inputTwo, button);
	return inputTwo;
})







// Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered, при втором клике удалите класс bordered и добавьте класс striped, при третьем клике удалите класс striped и добавьте класс highlight.


products.addEventListener("click", function(){
	products.classList.add("bordered");
})

products.addEventListener("dblclick", function(){
	products.classList.add("striped");
	products.classList.remove("bordered");
})

products.addEventListener("click", function(event) {
	if (event.detail == 3) {
		products.classList.remove("striped");
		products.classList.remove("bordered");
		return products.classList.add("highlight");
	}
})








// Модифицируйте задачу 7. Добавьте три radiobutton. При выборе первого включается класс bordered, при выборе второго отключается bordered и включается striped, при выборе третьего включается highlight и отключается striped.

radioButtonOne.addEventListener("click", function(){
	radioButtonOne.classList.add("bordered");
})

radioButtonTwo.addEventListener("click", function() {
	radioButtonTwo.classList.add("striped");
	radioButtonOne.classList.remove("bordered");

})

radioButtonThree.addEventListener("click", function() {
	radioButtonThree.classList.add("highlight");
	radioButtonTwo.classList.remove("striped")
})







// Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст. Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.

buttonFour.innerHTML="Нажмите на кнопку!";

function off() {
	alert(buttonFour.innerHTML);
}
buttonFour.addEventListener("click", off)

buttonOff.innerHTML = "Отключить!";

buttonOff.addEventListener("click", function(event){
 buttonFour.removeEventListener("click", off)
});  




// Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.

let blockTarget = document.getElementById("blockTarget");
let paragraph = document.getElementById("paragraphTarget");
let buttonTarget = document.getElementById("buttonTarget");
let linkTrr = document.getElementById("linkTrr");


blockTarget.addEventListener("click", function(event) {
	alert(event.target.tagName);
})
paragraph.addEventListener("click", function(event) {
	var target = event.target;
	alert(target.tagName);
})


buttonTarget.addEventListener("click", function(event){
	var target = target.event;
	alert(target.tagName);
})
linkTrr.addEventListener("click", function(event){
		var target=event.target;
		alert(target.tagName);
});


// Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия: при наведении мыши на картинку, изображение будет заменяться другим изображением. При выходе мыши за пределы изображения, будет восстанавливаться первоначальное изображение.

dogImage.addEventListener("mouseover", function(){
	this.src="puppy.jpg";
});

dogImage.addEventListener("mouseout", function(){
	this.src="dog.jpg";
});




// Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах и всплывает над контентом. Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.

cat.onclick = function(){
	cat.style.position = "absolute";
	cat.style.transform = "scale(1.5)";
	document.body.style.background = "grey";
}