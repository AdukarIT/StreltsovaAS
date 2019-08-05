// // Дан элемент #elem. Добавьте ему класс "www".

let elem = document.getElementById("elem");
elem.className="www";
console.log(elem);





// // Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс


if (elem.className=="www") {
	console.log("Такой класс существует");
	}	else {
			console.log("Такого класса нет!");
		}


elem.classList.remove("www");
console.log(elem);







// // Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body

let a = document.createElement("p");
let b = document.createElement("div");
let c = document.createElement("p");
a.innerHTML = "one";
c.innerHTML = "two";

b.appendChild(a);
b.appendChild(c);


console.log(b);

function recursiveSearchTags(document, tag) {
 let tageName= document.getElementsByTagName(tag);
 let arr = [];
 for(i=0; i<arr.length; i++);
 arr.push(tageName);
 return arr;
}

console.log(recursiveSearchTags(document, "div"));
console.log(recursiveSearchTags(document, 'p'));

// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы четные позиции имели красный фон.

let arrNumbers = ["one", "two", "three", "four", "five"];  

function getArray(arrNumbers) {
  let parent = document.body;
  let ul = document.createElement("ul");
  for (i = 0; i < arrNumbers.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(arrNumbers[i]);
    if (i % 2==0) {
      li.style.background = "red";
    }
    li.appendChild(text);
    ul.appendChild(li);
    parent.appendChild(ul);
  }
}
getArray(arrNumbers);

// Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

let previos = elem.previousElementSibling;
let textNode = document.createTextNode('!');
previos.appendChild(textNode);
