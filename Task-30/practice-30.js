// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), 
// surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
//  Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это 
//  произведение (умножение) ставки rate на количество отработанных дней days.

function Worker(name, surname, rate, days){
	this.name = name;
	this.surname = surname;
	this.rate = rate;
	this.days = days;
	this.getSalary = function(){
		 return rate*days;
	}
}

let ivan = new Worker("Ivan", "Ivanov", 50, 10);
console.log( ivan.getSalary());

let vova = new Worker("Vova", "Protsko", 10, 8);
console.log(vova.getSalary());


// 2. Реализуйте класс User принимающий объект со свойствами name 
// и password, предусмотрите метод login, возвращающее значение true 
// в случае совпадение связки имя/пароль  и changeName(). 
// Отнаследуйте класс User в класс Admin и сделайте так, чтобы админ всегда имел дефолтное поле имя (admin) 
//  чтобы в реализации отсутствовала возможность смены имени, а также при логине в консоль выводилось 
//  сообщение о том, что админ залогинен.

function User(name, password) {
	this.name = name;
	this.password = password;
	this.login = function(){
		if (name == password) return true;
	}
}

let dasha = new User("Dasha", "Dasha");
console.log(dasha.login());

function Admin(name, password) {
	this.name = name;
	this.password = password;
	
}

User.prototype = Object.create(Admin.prototype); 