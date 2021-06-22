/*Задание 1.
Дан массив. Нужно вывести в консоль количество 
чётных и нечётных элементов в массиве. Если в 
массиве есть нулевой элемент, то он учитывается 
и выводится отдельно. 
При выполнении задания необходимо учесть, что 
массив может содержать не только числа, но и, 
например, знаки, null и так далее.
На этот раз оформите решение в виде функции, 
постарайтесь дать этой функции корректное название, 
вызовите функцию, проанализируйте синтаксис.*/

let arr = [20, undefined, "+", 3, null, 84, true, "пять", 0, 6, NaN];
let quantityEven = 0;
let quantityOdd = 0;
let quantityNull = 0;
let notNumber = 0;

function countNumElements() {
  console.log(arr);
  arr.forEach(function (item, index, array) {
    if (typeof item === "number" && !isNaN(item)) {
      if (item === 0) {
        quantityNull++;
      } else {
        if (item % 2 === 0) {
          quantityEven++;
        } else {
          quantityOdd++;
        }
      }
    } else {
      notNumber++;
    }
  });
  console.log(`количество чётных элементов в массиве - ` + quantityEven);
  console.log(`количество нечётных элементов в массиве - ` + quantityOdd);
  console.log(`в массиве есть нулевой элемент в количестве - ` + quantityNull);
  console.log(`количество элементов не относящихся к числам - ` + notNumber);
}
countNumElements();
