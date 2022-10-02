// ЗАДАНИЕ №1
// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, 
// и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.


// Создала функцию для подбора случайных чисел для элементов массива

function rnd(n) {
   return Math.floor(Math.random() * n);
}
// Создала массив
let digits = new Array(10);

for (let i = 0; i < digits.length; i++) {
   digits[i] = rnd(100);
}
// Создала функцию для вывода на экран
function printD(arr) {
   document.write(digits.join(" - ") + "<hr/>");
}

printD(digits);

// Задача - увеличить каждый элемент массива на 1 и вернуть новый массив
function mult(arr) {
   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] + 1;
   }
}

mult(digits);
printD(digits);

// ЗАДАНИЕ №2
// Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.
//  В ином случае она задаёт вопрос confirm и возвращает его результат.
// 1	function checkAge(age) {
//    2	if (age > 18) {
//    3	return true;
//    4	} else {
//    5	return confirm('Родители разрешили?');
//    6	} }
let age = prompt("Сколько Вам лет?");
function checkAge(age){
   return (age > 18) ? true: confirm('Родители разрешили?')
}


if (checkAge(age)){
   document.write("Доступ разрешен")
} else{
   document.write("Доступ запрещен")

}