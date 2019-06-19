// Задание 1

let Obj = {
	a: 1,
	b: 2,
	c: 3
}

console.log(Obj.c);
// это первый способ

console.log(Obj["c"]);
// второй способ

for (let key in Obj)
	console.log(key +":" + Obj["c"]);

// Задание 2

let city ={}

city.name = "Minsk";
city.population = 2000000; {
console.log(city);
}

// Задание 3

let cities =[
	{
		name: "Grogno",
		population: 1500000
	},

	{
		name: "Brest",
		population:1600000
	},

	{
		name: "Mogilev",
		population: 1600000
	},

	{
		name: "Vitebsk",
		population:2000000
	},

	{
		name: "Gomel",
		population:2000000
	},

	{
		name: "Minsk",
		population: 2000000
	}
	];

	console.log(cities);

	// Задание 4



	function infoFromCities () {
			let cities =[
	{
		name: "Grogno",
		population: 1500000
	},

	{
		name: "Brest",
		population:1600000
	},

	{
		name: "Mogilev",
		population: 1600000
	},

	{
		name: "Vitebsk",
		population:2000000
	},

	{
		name: "Gomel",
		population:2000000
	},

	{
		name: "Minsk",
		population: 2000000
	}
	];

 	for(i=0; i<=cities.length; i++)
 		console.log(cities[i]);
 }

 	infoFromCities ();


 	// Задание 5

 	
	let Grodno = {
		name: "Grodno",
		population: 1500000,
		getInfoGrodno: function() {
			console.log( "Город " + this.name + ", " + "население - " + this.population + " человек");
		}
	}

	let Brest = {
		name: "Brest",
		population:1600000,
		getInfoBrest: function() {
			console.log( "Город " + this.name + ", " + "население - "  + this.population + " человек" );
		}
	}

	let Mogilev = {
		name: "Mogilev",
		population: 1600000,
		getInfoMogilev: function() {
			console.log( "Город " +this.name + ", " + "население" +  " - " + this.population + " человек");
		}
	}

	let Vitebsk = {
		name: "Vitebsk",
		population:2000000,
		getinfoVitebsk : function() {
			console.log( "Город " + this.name + ", " + "население" + " - " + this.population + " человек");
		}
	}

	let Gomel = {
		name: "Gomel",
		population:2000000,
		getInfoGomel: function() {
			console.log( "Город " + this.name + ", " + "население" + " - " + this.population + " человек");
		}
	}

	let Minsk = {
		name: "Minsk",
		population: 2000000,
		getInfoMinsk: function() {
			console.log("Город " +this.name + ", " + "население" + " - " + this.population + " человек")
		}
	};


	Grodno.getInfoGrodno();
	Brest.getInfoBrest();
	Mogilev.getInfoMogilev();
	Vitebsk.getinfoVitebsk();
	Minsk.getInfoMinsk();
	Gomel.getInfoGomel();




 	// Задание 6

 	let human = {
 		name: "Настя",
 		surname: "Стрельцова",
 		hobbie: "javascript",
 		getInfo: function() {
 			return "Мое имя" + " - " + this.name + "." + " Моя фамилия" + " - " + this.surname + "." + " Я люблю " + this.hobbie + ".";
 		}
 	}

 	human.getInfo();