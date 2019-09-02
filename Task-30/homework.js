// 1. Реализуйте класс Student (Студент), который будет наследовать от класса User. Этот класс должен иметь 
// следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год
//  поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого 
// можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который
//  будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять
//   год поступления в вуз. Текущий год получите самостоятельно.
//   function User(name, surname) {
//     this.name = name;
//     this.surname = surname;

//     getFullName() {
//       return this.name + ' ' + this.surname;
//     }
//   }

// function User(name, surname) {
// 	this.name = name;
// 	this.surname = surname;
// 	this.getFullName = function (){
// 		return this.name + " " + this.surname;
// 	}
// }

// function Student(name, surname, year, thisYear) {
// 	User.call(this, name, surname);

// 	this.year = year;
// 	this.thisYear = thisYear;

// 	this.getCourse = function(){
// 	return  this.getFullName() + " " + (this.thisYear - this.year) + " курс";
// 	}
// }

// Student.prototype = Object.create(User.prototype);

// let nastya = new Student("Nastya" , "Streltsova", 2016, 2019);

// console.log(nastya);
// console.log(nastya.getCourse());



 // JAVASCRIPT ES6

class User{
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	getFullName(){
		`${this.name} ${this.surname}`;
		}
}


	

class Student extends User {
	constructor(name, surname, year, thisYear) {
		super(name, surname);
		this.name = name;
		this.surname = surname;
		this.year = year;
		this.thisYear = thisYear;

	}
	getCourse() {
		 return `${super.getFullName()} ${(this.thisYear - this.year)} курс` 
		}

}

let nastya = new Student("Nastya" , "Streltsova", 2016, 2019);

console.log(nastya);
console.log(nastya.getCourse());

// 2. Напишите программу, расчиытвающую стоимость и калорийность гамбургеров (чисбургер, бигмак и тд), 
// используя ООП подход.
 
 function Burgers (name, bread, beef, cucumber, onion, cheese, souse, salat) {

 	 	this.bread = bread;
 		this.beef = beef;
 		this.cucumber = cucumber;
 		this.onion = onion;
 		this.cheese = cheese;
 		this.souse = souse;
 		this.salat = salat;
		this.name = name;

 	let callories = {
 		CalloriesBread: this.bread * 30,
  		CalloriesBeef: this.beef * 40,
 		CalloriesCucumber: this.cucumber * 10,
 		CalloriesOnion:this.onion * 8,
 		CalloriesCheese: this.cheese * 20,
 		CalloriesSouse: this.souse *30,
 		CalloriesSalat: this.salat *10
 	}


 	let price = {
 		PriceBread: this.bread * 0.2,
 		PriceBeef: this.beef * 1.2,
 		PriceCucumber: this.cucumber  *0.15,
 		PriceOnion: this.onion  *0.15,
 		PriceCheese: this.cheese  * 0.5,
 		PriceSouse: this.souse  *0.5,
 		PriceSalat: this.salat  *0.1
 	}

 	this.getCallories = function(){
 		let summCallories = 0;
 		for(let key in callories) {	
 			summCallories += callories[key];
 		}
 			return "Каллорийность " + this.name + "a " + "составляет - " + summCallories;
 	}

 	this.getPrice = function() {
 		let summPrice = 0;
 		for(let key in price) {
 			summPrice+=price[key];
 		}
 			return "Стоимость " + this.name + "a " + "составляет - " + summPrice;
 	}
 }


 


 let cheeseBurger = new Burgers("чизбургер", 2, 1, 2, 3, 1, 1, 1);
 let bigMack = new Burgers("бигмак", 3 , 2, 4, 6, 2, 2, 2)
 console.log(cheeseBurger.getCallories());
 console.log(bigMack.getCallories());
 console.log(cheeseBurger.getPrice());
 console.log(bigMack.getPrice());



