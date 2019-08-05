// Форма обратной связи содержит поля: имя, емейл, телефон, сообщение. Все поля обязательны для заполнения. 
// Сообщение должно быть от 10 до 1000 знаков. После заполнения каждого из полей рядом с ним должна загораться 
// галочка. При отправке формы выведите сообщение, если какие-то поля не заполнены, а также отмените отправку.


	let textarea = document.getElementById("textarea");
	let regExMessage = /.{10,1000}/g;
		textarea.onblur = (function(e){
	if (!regExMessage.test(this.value))  {
				 alert("Сообщение должно содержать от 10 до 1000 символов");
		}
	})

	checkboxName.hidden = true;
	let name = document.getElementById("name")
	name.onblur = (function(){
		let regExName = /.{1,100}/i;
		if (regExName.test(this.value)) {
			checkboxName.hidden = false;
			checkName.style.backgroundColor="green";
		}
	})

	checkboxEmail.hidden = true;
	let email = document.getElementById("email")
	email.onblur = (function(){
		let regExName = /.{1,100}/i;
		if (regExName.test(this.value)) {
			checkboxEmail.hidden = false;
			checkEmail.style.backgroundColor="green";
		}
	})

	checkboxPhone.hidden = true;
	let phone = document.getElementById("phone-number")
	phone.onblur = (function(){
		let regExName = /.{1,100}/i;
		if (regExName.test(this.value)) {
			checkboxPhone.hidden = false;
			checkPhone.style.backgroundColor="green";
		}
	})


$("button").click(function(){
	if ($("#name").val() == "" ) {
		alert("Заполните поле 'Имя!'");
	}
	else if($("#email").val() == "") {
		alert("Заполните после 'Имэил!'");
	}
	else if($("#phone-number").val() == "") {
		alert("Заполните поле 'Телефонный номер'!");
	}
	else if($("textarea").val() == "") {
		alert("Заполните поле 'Сообщение'!");
	}
})