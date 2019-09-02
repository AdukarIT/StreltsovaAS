let quessionOfServer = new Object();
	quessionOfServer.loading = 'Загрузка...';
	quessionOfServer.success = 'Спасибо! Скоро мы свяжемся с вами!';
	quessionOfServer.failure = 'Что-то пошло не так!'

let formContacts = document.forms[0];
let input = formContacts.getElementsByTagName("input");
let quessionOfUser = document.createElement("div");
quessionOfUser.classList.add("quession-of-user");

formContacts.addEventListener("submit", function(event) {
	event.preventDefault();
	formContacts.appendChild(quessionOfUser);


let request = new XMLHttpRequest();
	request.open("POST", "server.php")
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
let formData = new FormData(formContacts);
	request.send(formData);
	request.onreadystatechange = function() {
		if (request.readyState < 4) {
			quessionOfUser.innerHTML = quessionOfServer.loading;
		} else if (request.readyState === 4) {
			if(request.status ===200 && request.status <300) {
				quessionOfUser.innerHTML = quessionOfServer.success;
			} else {
				quessionOfUser.innerHTML =quessionOfServer.failure;
			}
		}
	}


})



