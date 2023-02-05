/*
Задание 1.

В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
 Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только 
числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции 
корректное название, вызовите функцию, проанализируйте синтаксис.
*/


// Задание 2.

function primeNumb(num) {
  num = +prompt("Введите любое число до 1000")
  if (num > 1 && num < 1000) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  } else {
    return "Число должно быть больше 1 и меньше 1000";
  }
}

console.log(primeNumb());

// Задание 3

function sum(inputNumber1) {
  let inputNumber2 = +prompt('Введите число 2');
  alert(inputNumber1 + inputNumber2);
}

function inputNumber1(call) {
  let inputNumber1 = +prompt('введите число 1');
  call(inputNumber1);
}

inputNumber1(sum);

// Задание 4

function printNumbers(a, b) {

  let timerId = setInterval(function() {
    if (a<b) {
      console.log(a);
      a++;
    } else if (a == b) {
      clearInterval(timerId);
      console.log(a)
    } else if (a>=b){
      clearInterval(timerId);
      console.log("Вы ввели неверные значения")
    } 
  }, 1000);
}

printNumbers(+prompt("Введите первое значение"), +prompt("Введите второе значение"));