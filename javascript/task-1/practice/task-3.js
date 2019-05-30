let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
let c = prompt("Введите третье число");

if (a>b && b>c) {
    console.log(c);
    console.log(b);
    console.log(a);
} else if (c>b && b>a) {
    console.log(a);
    console.log(b);
    console.log(c);
} else if (a>c && c>b) {
    console.log(b);
    console.log(c);
    console.log(a);
} else if (c>a && a>b) {
    console.log(b);
    console.log(a);
    console.log(c);
} else if (b>c && c>a) {
    console.log(a);
    console.log(c);
    console.log(b);
} else if (b>a && a>c) {
    console.log(c);
    console.log(a);
    console.log(b);
}