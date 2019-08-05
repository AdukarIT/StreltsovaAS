// 1. Дана форма, напишите проверку: на правильность заполнения двух текстовых полей: имя (id="name") 
// и минут (id="minutes"). Используйте проверку на оставление поля пустым ("") и правильного формата. 
// заполнения числового поля (isNaN).



minutes.onblur = function(){
	if(isNaN(this.value))
		alert("Вы ввели не число.Исправьте, пожалуйста.");
	else if (this.value == "")
		alert("Поле обязательно должно быть заполнено. Пожалуйста, введите данные");
}

name.onblur = function(){
	 if (this.value == "")
		alert("Поле обязательно должно быть заполнено. Пожалуйста, введите данные");
}





// Создать страницу с текстовым полем и двумя кнопками. При нажатии одной из них происходит передача данных 
// содержимого текстового поля по электронной почте (action="mailto:address@domen.domen"), при нажатии другой
//  – происходит очистка текстового поля.


let input = document.createElement("input");
let buttonPush = document.createElement("button");
let buttonReset = document.createElement("button");

task2.appendChild(input);
task2.appendChild(buttonPush);
task2.appendChild(buttonReset);

buttonPush.innerHTML = "Отправить";
buttonReset.innerHTML = "Сбросить";


buttonPush.addEventListener("click", function(event){
		task2.setAttribute("action", "mailto:address@domen.domen");
});

buttonReset.addEventListener("click", function(event){
	input.value = "";
})

// Напишите универсальную функцию для прохождения по полям формы с возможностью проверки введенных данных,
//  для тектовых полей - на текст, для имейла - на имейл и тд. // Поверьте написанную ранее функция 
// на обработку форы регистрации, если поле не проходит валидацию - подсветите его, если все поля валидные -
//  выведите приветственное сообщение.


	let nameFrom = document.getElementById("nameRegistration");
	nameFrom.onblur = function(event){
		let regExName = /([а-я]|[a-z])/i;
		if (!regExName.test(this.value)) {
			this.value = "Введите имя правильно";
			this.style.background="red";
		} else {
			alert("Здравствуйте! Все правильно!")
		}
	}


let email = document.getElementById("email");
	email.onblur = function(event) {
		let regExEmail = /(\w+\-\w+@\w+.\w+|\w+@\w+.\w+)/i;
		if(!regExEmail.test(this.value)) {
			this.value = "Введите имеил адрес правильно"
			this.style.background = "red";
		} else {
			alert("Здравствуйте! Все правильно!")
		}			
	}

let old = document.getElementById("old");
	old.onblur = function(event){
		let regExOld = /\d+/;
		if (!regExOld.test(this.value)) {
			this.value = "Введите возраст в цифрах";
			this.style.background = "red";
		} else {
			alert("Здравствуйте! Все правильно!")
		}
	}
let password = document.getElementById("password");
	password.onblur = function(event){
		let regExPassword = /(\w{6,12})/i;
		if (!regExPassword.test(this.value)) {
			this.value="Пароль должен состоять от 6 до 12.";
			this.style.background = "red";
		} else {
			alert("Здравствуйте! Все правильно!")
		}
	}




// Написать скрипт, которые заменяет слово «функция» в тексте на «функция», используя регулярные вырожения.


function replaceFunction() {
	textFunction.innerHTML = "Написать скрипт, которые заменяет слово «функция» в тексте на «функция», используя регулярные вырожения."
	let regExText = /функция/g;
	replaceButton.addEventListener("click", function(event) {
		let newText = textFunction.innerHTML.replace(/функция/g, "ФУНКЦИЯ");
		textFunction.innerHTML = newText;
	})
}
replaceFunction();



// С помощью test определите, что переданная строка является корректным временем вида '9.59 am',
//  '12.30 pm'.


function checkDate() {
	let regExDate =/^([01]\d|2[0-3]):[0-5]\d\s[ap]m$/g;
	let strOne = "9.59 am"
	textTask6.innerHTML = strOne ;

buttonTask6.addEventListener("click", function(event){
	if (regExDate.test(strOne)) {
		alert("Время корректное!")
	} else {
		alert("Некорректное время!")
	}
})
}
checkDate();

