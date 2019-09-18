// 'use strict';

// class Catalog {
// 	constructor(book_editor) {
// 		this.books = [];
// 		this.editor = book_editor;
// 		this.create();

// 	}

// 	// load(){
// 	// 	$(".table__list").click(function(){
// 	// 		$.ajax("https://github.com/AdukarIT/StreltsovaAS/blob/master/Task-34/task--34/books.json", {
// 	// 			method: "GET",
// 	// 			dataType: "json",
// 	// 			error: function(jqXHR, textStatus, errorThrown) {
// 	// 				console.log("Ошибка:" + textStatus, errorThrown);
// 	// 			},
// 	// 			success: function(data) {
// 	// 				this.books = data;
// 	// 			}
// 	// 		})
// 	// 	})
// 	// 	this.redraw();
// 	// }

// 	create(){
	// 	$(".book-add").click(function(){
	// 		for(i = 0; i < this.books.length; i++) {			
	// 			$(".catalog").append(`<tr id="tr-string"></tr>`)
	// 			$("#tr-string").append(`
	// 			<td>${this.books[i].id}</td>
	// 			<td>${this.books[i].title}</td>
	// 			<td>${this.books[i].autor}</td>
	// 			<td>${this.books[i].price}</td>
	// 			<td>${this.books[i].description}</td>
	// 			`)
	// 		}
	// 	})
	// }
// }


// const editor = new Catalog('#bookEditorModal');


// $(function(){
			// $.ajax('https://github.com/AdukarIT/StreltsovaAS/blob/master/Task-34/task--34/books.json', {
			// 	method: "GET",
			// 	dataType: "json",
			// 	error: function(jqXHR, textStatus, errorThrown) {
			// 		console.log("Ошибка:" + textStatus, errorThrown);
			// 	},
			// 	success: function(data) {
			// 		let books = [];
			// 		books = data;
			// 		console.log(books);
			// 	}
			// })

		// $(".book-add").click(function(){
		// 	for(i = 0; i < books.length; i++) {			
		// 		$(".catalog").append(`<tr id="tr-string"></tr>`)
		// 		$("#tr-string").append(`
		// 		<td>${this.books[i].id}</td>
		// 		<td>${this.books[i].title}</td>
		// 		<td>${this.books[i].autor}</td>
		// 		<td>${this.books[i].price}</td>
		// 		<td>${this.books[i].description}</td>
		// 		`)
		// 	}
		// })
// })

class Catalogue{
	constructor(book_editor) {
		this.books = [];
		this.editor = book_editor;
		// мод окно
		this.load();
		this.redraw();

		$(".book-add").click(function(){
  			$("#bookEditorModal").css("display", "block");
  		})

  		$(".hidden-td").click(function(event){
			event.target.closest("tr").remove()

		})

		$(".modal-window__button_close").click(function(){
			$("#bookEditorModal").css("display", "none");
		})

		$(".modal-window__button_save").click(function(event){
			this.сreate(books);		

		})

		this.redrawBook(newBook);
	}

	load(){
		this.books = [	 
						{"id": 1,
					"title": "Винни-пух",
					"autor": "Алан Милн",
					"price": "5$",
					"desctiption": "Винни-Пух — плюшевый медвежонок, большой друг Кристофера Робина. С ним происходят самые разные истории. Однажды, выйдя на полянку, Винни-Пух видит высокий дуб, на верхушке которого что-то жужжит: жжжжжжж! Зря никто жужжать не станет, и Винни-Пух пытается влезть на дерево за мёдом. "
						},
						 {"id": 2,
					"title": "Гадкий утёнок",
					"autor": "Ханс Христиан Андерсон",
					"price": "2$",
					"desctiption": "В зарослях лопуха у одной старой усадьбы мама-утка вывела утят, но последний её птенец выглядел ужасно и не был похож на остальных. Обитатели птичьего двора сразу невзлюбили гадкого утёнка, из-за чего постоянно нападали на птенца. Мать, поначалу защищавшая сына, вскоре тоже охладела к нему."
						},
						{"id": 3,
					"title": "Денискины рассказы",
					"autor": "Виктор Драгунский",
					"price": "3$",
					"desctiption": "Цикл рассказов советского писателя Виктора Драгунского, посвящённый случаям из жизни дошкольника, а затем ученика младших классов школы Дениса Кораблёва." 
						},
					 	{"id": 4,
					"title": "Витя Малеев в школе и дома",
					"autor": "Николай Носов",
					"price": "2$",
					"desctiption": "Николай Николаевич Носов - признанный мастер детской литературы, автор таких произведений как 'Приключения Незнайки и его друзей' и 'езнайка на Луне'."
						},

					];
		
	}

	redraw(){

				for(let i = 0; i < this.books.length; i++){
					$(".catalog__table__body").append(`<tr id="${this.books[i].id}"><tr>`)
					$(`#${this.books[i].id}`).append(`
						<td>${this.books[i].id}</td>
						<td>${this.books[i].title}</td>
						<td>${this.books[i].autor}</td>
						<td>${this.books[i].price}</td>
						<td>${this.books[i].desctiption}</td>
						<td class="hidden-td"></td>`)
				}
			

		// this.edit(){
		// 	// по клику на строке
		// // редактируют строку
		// // вызов мод окна запис данные вызывается сэйв зис.буукс и записываеися новая книжка


		}

	

	redrawBook(books, newBook){

		$(".catalog__table__body").append(`<tr class="newString"></tr>`);
		$(".newString").append(`
			<td></td>
			<td>${this.newBook.title}</td>
			<td>${this.newBook.author}</td>
			<td>${this.newBook.price}</td>
			<td>${this.newBook.description}</td>
			<td></td>`)
	}


	сreate(books, newBook ){
		// добавляем новую книгу в this.books  

		this.newBook = {};

		// newBook.id = "$("#id").val()";
		newBook.title = $("#title").val();
		newBook.author = $("#author").val();
		newBook.price = $("#price").val();
		newBook.description = $("#description").val();

        this.books.push(newBook);

        
	}

	edit(some){
    // вызов мод окна и внесение данные сохранение мы сохр метод сэйв...после этого редактируем рэдроубук..
	}

	delete(some){

	}
}


class BookEditor{
	constructor(){
		this.book = null;
	}

	show(book, saveCallback) {
    	this.book = book;
    	this.saveCallback = saveCallback;
        /// заполняем ввод данными Book
        // и показываем модальное окно   
    }
    
    hide() {
    	 // просто скрываем модальное окно
    }
    
    save() {
    	this.book.title = // заполнить все свойства книги новыми значениями
        
    	this.saveCallback(this.book);
        this.hide();
    }
}
