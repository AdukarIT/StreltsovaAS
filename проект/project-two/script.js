$.ajax("https://raw.githubusercontent.com/AdukarIT/StreltsovaAS/master/json/books.json", {
	method: "GET",
	dataType: "json",
	error: function(jqXHR, textStatus, errorThrown){
		console.log("Ошибка:" + textStatus, errorThrown);
	},
	success: function(data) {
		let arr = data;
		console.log(arr)
		for(let i = 0; i<arr.length; i++) {
			$(".books").append(`<tr class="books__item">${arr[i].title}</tr>`)

		}
	}
})