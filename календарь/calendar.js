$(function(){

	function openDatepicker(){
		$(".datepicker-button__active").click(function(){
		$(".datepicker__hidden").toggle(".datepicker__active");
		openPullDatepicker();
	});
	}

	openDatepicker();

// ПОЛУЧИЛИ ТЕКУЩУЮ ДАТУ
	let date = new Date();
	// получили месяц текущей даты
	let month = date.getMonth();
	// получили год текущей даты
	let year = date.getFullYear();
	// последний день месяца
	let lastDay = new Date(year, month+1, 0).getDate();
	// первый день месяца
	let firstDay = new Date(year, month, 1)


function openPullDatepicker(){

// получаем день недели первого числа месяца
	let dayWeek = firstDay.getDay();
		if (dayWeek === 0) {
			dayWeek = 7;
		}
// это пустые п
	for(let a=1; a<dayWeek; a++) {
		$(".datepicker-days-week").append(`<p></p>`)
	}
	
// получаем все количество дней в месяце
	for(let i = 1; i<=lastDay; i++) {
		$(".datepicker-days-week").append(`<p>${i}</p>`)
	}
	$(".datepicker-days-week p").css("margin-left", "40px")


// выведем в п месяц и год.текущие

	let monthArr=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

	$(".datepicker-month").text(`${monthArr[new Date().getMonth()]} ${date.getFullYear()}`);

	$(".datepicker-month").css("font-size", "35px");
	$(".datepicker-month").css("color", "#911E42")

 // при клике назад
	$(".datepicker-button__prev").click(function(){
//    $(".datepicker-days-week p").revome()
			$(".datepicker-month").text(`${monthArr[new Date().getMonth()-1]} ${date.getFullYear()}`);

		
// 				// получаем день недели первого числа месяца
// 	let dayWeek = new Date(year, month-1, 1).getDay();
// 		if (dayWeek === 0) {
// 			dayWeek = 7;
// 		}
// // это пустые п
// 	for(let t=1; t<dayWeek; t++) {
// 		$(".datepicker-days-week").append(`<p></p>`)
// 	}
	
// полчаем все количество дней в месяце

	// for(let h = 1; h<=lastDay; h++) {
	// 	$(".datepicker-days-week").append(`<p>${h}</p>`)
	// }
		})



	$(".datepicker-button__next").click(function(){
		$(".datepicker-month").text(`${monthArr[new Date().getMonth()+1]} ${date.getFullYear()}`);
	})






	// function prevMonthAndYear(){
	// 	month=month-1;
	// 	$(".datepicker-button__prev").click(function(){
	// 		$(".datepicker-month").text(`${month} ${year}`)
	// 	})
		
	// }

	// function nextMonthAndYear(){
	// 	$(".datepicker-button__next").click(function(){
	// 	 month = month+ 1;
	// 		$(".datepicker-month").text(`${month} ${year}`)
	// 	})
	// }




}
	

})


	