// ЗАДАНИЕ №1
// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, 
// и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.

// Создала функцию для подбора случайных чисел для элементов массива
function rnd(n) {
   return Math.floor(Math.random() * n);
};
// Создала массив
let digits = new Array(10);

for (let i = 0; i < digits.length; i++) {
   digits[i] = rnd(100);
};
// Вывела на экран первоначальный массив
document.write(digits.join(" - ") + "<hr/>");
// Создала функцию, которая увеличивает каждый элемент массива на 1
function mult(i) {
   return ++i
};
//Функция map(fn, array)
function map(fn, arr) {
   let res = [];
   for (let i = 0; i < arr.length; i++) {
      res[i] = fn(arr[i]);
   }
   return res;
};
// Вывела на экран новый массив
document.write(map(mult, digits).join(" - ") + "<hr/>");


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
(age >= 18)? document.write("Доступ разрешен"): confirm('Родители разрешили?');



