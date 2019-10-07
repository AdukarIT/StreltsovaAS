class Catalogue{
	constructor(editor) {
		this.books = [];
		this.editor = editor;
		// мод окно
		this.load();
		this.redraw();
		this.edit();

		$(".book-add").click(()=>{
  			this.show();
  		}) 


		
		$(".modal-window__button_save").click(()=>{
			this.saveAndRedrawBook();

			
			// $(".hidden-td").click(function(event){
				// event.target.closest("tr").remove()
			// })

		})
	
  		$(".hidden-td").click(function(event){
			event.target.closest("tr").remove()

		})

		
	}

	load(){
		this.books = [	 
						{"id": 1,
					"title": "Винни-пух",
					"author": "Алан Милн",
					"price": "5$",
					"description": "Винни-Пух — плюшевый медвежонок, большой друг Кристофера Робина. С ним происходят самые разные истории. Однажды, выйдя на полянку, Винни-Пух видит высокий дуб, на верхушке которого что-то жужжит: жжжжжжж! Зря никто жужжать не станет, и Винни-Пух пытается влезть на дерево за мёдом. "
						},
						 {"id": 2,
					"title": "Гадкий утёнок",
					"author": "Ханс Христиан Андерсон",
					"price": "2$",
					"description": "В зарослях лопуха у одной старой усадьбы мама-утка вывела утят, но последний её птенец выглядел ужасно и не был похож на остальных. Обитатели птичьего двора сразу невзлюбили гадкого утёнка, из-за чего постоянно нападали на птенца. Мать, поначалу защищавшая сына, вскоре тоже охладела к нему."
						},
						{"id": 3,
					"title": "Денискины рассказы",
					"author": "Виктор Драгунский",
					"price": "3$",
					"description": "Цикл рассказов советского писателя Виктора Драгунского, посвящённый случаям из жизни дошкольника, а затем ученика младших классов школы Дениса Кораблёва." 
						},
					 	{"id": 4,
					"title": "Витя Малеев в школе и дома",
					"author": "Николай Носов",
					"price": "2$",
					"description": "Николай Николаевич Носов - признанный мастер детской литературы, автор таких произведений как 'Приключения Незнайки и его друзей' и 'езнайка на Луне'."
						},

					];
		
	}

	redraw(){

				for(let i = 0; i < this.books.length; i++){
					$(".catalog__table__body").append(`<tr id="${this.books[i].id}"><tr>`)
					$(`#${this.books[i].id}`).append(`
						<td>${this.books[i].id}</td>
						<td>${this.books[i].title}</td>
						<td>${this.books[i].author}</td>
						<td>${this.books[i].price}</td>
						<td>${this.books[i].description}</td>
						<td class="hidden-td"></td>`)
				}
	}	

	show() {
  			$("#bookEditorModal").css("display", "block");
  		
    }

	edit(){
 			$(".catalog__table__body tr").click((event)=>{ 
 				if(!event.target.classList.contains(`hidden-td`)) {
 					let id = event.target.closest("tr").getAttribute('id');
 					let book = this.books.find((elem) => {
 						return elem.id == id;
 					})
  					this.editor.show(book, obj => {
  						$(event.target).append(`
						<td>${obj.id}</td>
						<td>${obj.title}</td>
						<td>${obj.author}</td>
						<td>${obj.price}</td>
						<td>${obj.description}</td>
						<td class="hidden-td"></td>`)
				})
  		 //сюда вернули объект из ихмененной книги из модального окна
 			}

		// let rowBooks = event.target.rows;


		// let idGet = rowBooks.cells[0].val();
		// console.log(idGet);




  		}) 

		// $("#title").innerHTML = event.target.books.title;
		// $("#author").innerHTML = this.books.author;
		// $("#price").innerHTML = this.books.price;
		// $("#description").innerHTML = this.books.description;
  		


		


		// 	// по клику на строке
		// // редактируют строку
		// // вызов мод окна запис данные вызывается сэйв зис.буукс и записываеися новая книжка


	}




	
	saveAndRedrawBook(){
	let newBook = {};
		

	function getRandomId(max) {
  		return Math.floor(Math.random() * Math.floor(max));
	}

		newBook.id = getRandomId(100);
		newBook.title = $("#title").val();
		newBook.author = $("#author").val();
		newBook.price = $("#price").val();
		newBook.description = $("#description").val();


   		$(".catalog__table__body").append(`<tr class="newString"></tr>`);
		$(".newString").append(`
						
			<td>${newBook.id}</td>
			<td>${newBook.title}</td>
			<td>${newBook.author}</td>
			<td>${newBook.price}</td>
			<td>${newBook.description}</td>
			<td class="hidden-td"></td>`)

		this.books.push(newBook);
		$("#bookEditorModal").css("display", "none");

	}

}


class BookEditor{
	constructor(){
	
		this.show();
		this.hide();
		this.id;



	}

	show(elem, callback){
		let book = elem;
		if(book) {
			this.id = book.id;
			$("#title").val(elem.title);
			$("#author").val(elem.author);
			$("#price").val(elem.price);
			$("#description").val(elem.description);
			$("#bookEditorModal").css("display", "block");

			$(".book-add").click(function(){
	  			$("#bookEditorModal").css("display", "block");

	  		})
	  	} 

	  	$(".modal-window__button_save").click((e) => {
	  		let obj = {
		  		id: this.id,
		  		title: $("#title").val(),
				author: $("#author").val(),
				price: $("#price").val(),
				description: $("#description").val()
			}
			callback;
			 // передали в колбек объект с измененной книгой в каталог
	  	})
	  	
    }
    
    hide() {
  		$(".modal-window__button_close").click(function(){
			$("#bookEditorModal").css("display", "none");

			console.log(this.books)
		})

    	 // просто скрываем модальное окно
    }
    
}
