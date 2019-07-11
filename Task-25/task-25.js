


// // ЗАДАНИЕ 1 + 2

	let arrRandom = [];
function getRandomNumber(min, max) {

	for(i=0; i<3; i++) {
			arrRandom[i]=Math.round((Math.random()) * (max-min)+ min);
		}
		return arrRandom;
	}


console.log(getRandomNumber(1, 50));


function getObjectFromArr(arrRandom){
	let newArr = [];
	for(i=0; i<arrRandom.length; i++) {
		let object= {
			initial:arrRandom[i],
			sqrt: Math.sqrt(arrRandom[i]),
		}
            object["sqrt100"] = object["sqrt"].toFixed(2);

			 if (Math.round(object.sqrt) == Math.floor(object.sqrt)) {
			object.floor = true;	 
			}	   else {
			 object.floor = false;
			}

			if (Math.round(object.sqrt) == Math.ceil(object.sqrt)) {
			object.ceil = true;	 
			}	   else {
			 object.ceil = false;
			}

		newArr[i]=object;
	}
	return newArr;
}

console.log(getObjectFromArr(arrRandom));


// ЗАДАНИЕ 3

let str = prompt("Введите текст, чтобы проверить являются ли они палиндромом.");

function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return "Это не является палиндром";
    }
    	return "Это палиндром";
    }
}

console.log(palindrome(str));


// ЗАДАНИЕ 4

let str = prompt("Введите текст");

function mostOftenSymbol(str) {
	let strEmpty = "";
	for( let i =0; i< str.length; i++) {
		if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
			 strEmpty += str[i];
		} 
 } return strEmpty;
}


console.log(mostOftenSymbol(str));


// ЗАДАНИЕ 5


function changeSymbol(str, search, replace) {
    let arr = str.split("");
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes(search)) {
            arr[i] = arr[i].replace(search, replace);
        }
    }
    return arr.join(" ");
}

changeSymbol("просто текст", "т", 1);


// ЗАДАНИЕ 6

function symbolUpper(str) {
	let arr = str.split(" ");
	for(i=0; i<arr.length; i++) {
		arr[i]=arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
	}
	return arr;
}


console.log(symbolUpper("fgfg fgfg tyty tytyt ytyt yytd"));


// ЗАДАНИЕ 7

function repet() {
	let text= "я учусь программированию";
	let strEmpty = "";
	for( i=0; i<text.length; i++) {
		if(text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
			 strEmpty+=text[i]
		}
	} text=text.replace(strEmpty, 11);
  return text;
}


console.log(repet());

// ЗАДАНИЕ 8

function days(){
	let day = new Date();
	let dayWeek= day.getDay();
	switch(dayWeek) {
		case 0:
		return "воскресенье";
			break;
		case 1:
		return "понедельник";
			break;
		case 2:
		return "вторник";
			break;
		case 3:
		return "среда";
			break;
		case 4:
		return "четверг";
			break;
		case 5:
		return "пятница";
			break;
		case 6:
		return "суббота";
			break;
	}

}

	console.log(days());


// ЗАДАНИЕ 9

let date = prompt("Введите дату");
	function getDayWeek() {
	let getDate = new Date(+date.slice(6, 10), +date.slice(3, 5) - 1, +date.slice(0, 2));
    let day = getDate.getDay();
	 	switch(day) {
		case 0:
		return "воскресенье";
			break;
		case 1:
		return "понедельник";
			break;
		case 2:
		return "вторник";
			break;
		case 3:
		return "среда";
			break;
		case 4:
		return "четверг";
			break;
		case 5:
		return "пятница";
			break;
		case 6:
		return "суббота";
			break;
	}
}

console.log(getDayWeek());
