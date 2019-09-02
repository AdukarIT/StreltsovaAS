	function openCalendar(){
		$(".calendar-components-button").click(function(){
		$(".calendar-components-datepicker__hide").toggle("calendar-components-datepicker__show");
		createTable();
	});
	}

	openCalendar();

	var nowDate = new Date()
	var today = nowDate.getDate();
	var currentMonth = nowDate.getMonth();
	var currentYear = nowDate.getFullYear();

	// Получаем последний день месяца
	var temp = new Date(currentYear, currentMonth+1, 0);
	var lastDay = temp.getDate();



	// Цикл, рассчитывающий количество дней в месяце
		// for(var i=1; i<30; i++) {
		// 	nowDate.setDate(i);


		// 	var td = document.createElement("td");
		// 	var arr = [];
		// 	arr.push(td);
		// 	td.innerHTML = nowDate.getDate();
		// }

		// for(var i = 0; i<arr.length; i++){
		// 	var tr = document.createElement("tr");
		// 	for(var j = 0; j < 7; j++){
		// 		tr.appendChild(arr[j]);
		// 	}
		// 	table.appendChild(tr);
		// }

		// Переменная d начинается с первого дня текущего месяца
		function createTable(){
			var d = new Date(currentYear, currentMonth, 1);
			// var currentDay = d.getDate();
			// while (d.getDate != lastDay) {
				// Проверяем какой день недели у дня
				// Понедельник -1.
				// Решаем проблему воскресенья. Ниже порядковый номер текущего дня
				var t = d.getDate()-1;
				if (t < 0) {
					t = 6;
				}

				// Выводим дни первой недели месяца.
				var tr = document.createElement("tr");
				var i = 0;
					while(i < 7) {
						var td = document.createElement("td");

						if(i < t) {
							
							td.innerHTML = "";
					} else {
						td.innerHTML = d.getDate();
						d.setDate(d.getDate() +1);
					}
					tr.appendChild(td);
					i++;
				}
				table.appendChild(tr);

			// }

		}
