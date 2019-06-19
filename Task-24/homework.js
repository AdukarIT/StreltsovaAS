// Задание 1

let Obj = {
    name: "Masha",
    years: 24,
    surname: "Gagarina",

}

let string = "name";

function ObjStr(Obj, string) {
    for (let key in Obj) {
        if (key == string) {
            return true;
        } else {
        	false;
        }
    }
}

console.log(ObjStr(Obj, string));

// Задание 2

 let pancakes ={
 	milk: 500,
 	egges: 150,
 	sugar: 30,
 	flour: 200,
 	numberOfServings: 3,
 	getNumberOfServings: function() {
 		let milk = this.milk / this.numberOfServings;
 		let egges = this.egges / this.numberOfServings;
 		let sugar = this.sugar / this.numberOfServings;
 		let flour = this.flour / this.numberOfServings;
 			return  " На одну порцию блинов необходимо: "  + "молоко" + " - " + milk + "," + " яйца" + " - " + egges + "," + " сахар" + " - " + sugar + ", " + "мука" + " - " + flour + "."
 	}
 };

 pancakes.getNumberOfServings();


 // Задание 3

  let Cylinder = {
  	radius: 10,
  	height: 15,
  	getVolume: function() {
  		let p = 3.14;
  		let result1;
  		let result = p * this.height * (this.radius ** 2); {
  			console.log(result);
  		}
  	}

  };

  Cylinder.getVolume();

  // Задание 4

  let penguin = {
  	name: "Гантер",
  	source: "Время приключений",
  	creator: "Пендлтон Уорд",
  	canFly: false,
  	sayHello: function() {
  		console.log( "Привет!" + " Меня зовут " + this.name + "." + "Я из мультфильма - " + this.source + "." + " Мой создатель - " + this.creator + ".")
  	},
  	fly: function() {
  		if (this.canFly == true) {
  			console.log( this.name + "может летать!");
  		} else {
  			console.log( this.name + " не может летать!");
  		}
  	}


  };

  penguin.sayHello();
  penguin.fly();