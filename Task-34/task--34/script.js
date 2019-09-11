// На странице есть изначально пустое поле для выбора (select) и кнопка “Получить досье”.
// При загрузке страницы при помощи GET-запроса 
// (https://jsonplaceholder.typicode.com/users) 
// получите данные о пользователях. Элемент select заполните именами пользователей. 
// По нажатию на кнопку “Получить досье” выведите ниже всю доступную информацию о выбранном 
// // в данный момент пользователе.

$.ajax("https://jsonplaceholder.typicode.com/users", {
	method: "GET",
	dataType: "json",
	error: function(jqXHR, textStatus, errorThrown){
		console.log("Ошибка:" + textStatus, errorThrown);
	},
	success: function(data) {
		let arr = data;
		console.log(arr);
		for(let i = 0; i< arr.length; i++ ){
			$("select").append(`<option value="${arr[i].id}">"${arr[i].name}"</option>`);
		}

		
			$("button").click(function(){
				for(let a = 0; a < arr.length; a++){
					if (arr[a].id == select.value){
					$("#info").append(`${JSON.stringify(arr[a])}`)
					}
				}
						
			})
		
	}
})