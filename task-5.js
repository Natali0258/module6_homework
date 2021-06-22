/*Задание 5.
Напишите функцию, которая принимает два 
натуральных числа x и n и возвращает x 
в степени n. Иначе говоря, умножает x на себя 
n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и 
выведите результат в консоль.*/
let findNumberToThePower = (x, n) => {
  if (x > 0 && Number.isInteger(x)) {
    if (n > 0 && Number.isInteger(n)) {
      let result = Math.pow(x, n);
      return result;
    } else {
      console.log("ошибка, степень числа - ненатуральное число");
    }
  } else {
    console.log("ошибка, число ненатуральное");
  }
};
console.log(findNumberToThePower(2, 3));
console.log(findNumberToThePower(2.5, 3));
console.log(findNumberToThePower(-2, 3));
console.log(findNumberToThePower(2, -3));
