// Сделайте так, чтобы по нажатию на кнопку выводился alert

// let button = document.querySelector("button");

// button.addEventListener("click", function(){
// 	alert("Вы нажали на кнопку!");
// })

// Создайте кнопку с произвольным текстом, сделайте так, чтобы по нажатию текст изменялся на button

// let button = document.querySelector("button");

// button.addEventListener("click", function(){
// 	button.innerHTML = "Теперь кнопка называется так!";
// })
// // Создайте форму с полем для ввода и двумя кнопками, сделайте так, чтобы по нажатию на кнопку disable, поле становилось неактивным, в случае с enable - наоборот

// buttonDisable.addEventListener("click", function() {
// 	input.disabled = true;
// })

// buttonEnable.addEventListener("click", function() {
// 	input.disabled = false;
// })


// Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.


// div.addEventListener("mousemove", function(event) {
// 	p.innerHTML = event.layerX + "," + event.layerY;
// })
// Создайте блок div, в качестве изображения фона установите ему изображение закрытой папки. Добавьте событие, которое выполняется при двойном клике на блоке и заменяет фон блока на изображение открытой папки

// divFolder.addEventListener("dblclick", function(event){
// 	divFolder.style.backgroundImage = "url(open.png)";
// })
// Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px, и цветом фона. Добавление элементов выполните с помощью цикла. Добавьте событие при наведении мыши, которое будет скруглять данные блоки с помощью border-radius до круга. Для замедления эффекта скругления в CSS можно добавить transition.

// function createBlock() {
// 	var block = document.createElement("div");
// 	block.style.width="30px";
// 	block.style.height="30px";
// 	block.style.background="yellow";
// 	block.innerHTML ="hi";

// 	var blockArr = [];
// 	for(var i = 0; i<=400;i++) {
// 	return blockArr;
// }
// }

// createBlock();
