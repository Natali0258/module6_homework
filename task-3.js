/*Написать функцию, которая принимает 
число как аргумент и возвращает функцию, 
которая также принимает число как аргумент 
и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/
const num1 = +prompt("Введите первое число");
const num2 = +prompt("Введите второе число");
function takeNumber(num1) {
  return function (num2) {
    return num1 + num2;
  };
}
const sumFunction = takeNumber(num1);
const sum = sumFunction(num2);
console.log(sum);
