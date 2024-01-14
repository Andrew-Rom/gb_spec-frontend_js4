// // Задание №1
// // Необходимо найти, установить и применить библиотеку, которая позволит
// // избежать проблем со сложением и умножением чисел с плавающей запятой

// // function calculateResultSum(purchases, discount) {
// //     let total = purchases.reduce((acc, purchase) => acc += purchase, 0);
// //     total = total * discount;
// //     return total;
// // }

// const np = require('number-precision');

// function calculateResultSum(purchases, discount) {
//     let total = purchases.reduce((acc, purchase) => np.plus(acc, purchase), 0);
//     total = np.times(total, discount);
//     return total;
// }

// const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
// console.log("Общая стоимость покупок: " + total + " рублей");


// // Задание №2
// // 1. Необходимо вынести функцию .calculateResultSum() в отдельный
// // файл, импортировать её в основной файл и использовать.
// // 2. Также необходимо вынести запуск скрипта в скрипты запуска NPM,
// // для того, чтобы можно было запускать скрипт с помощью команды
// // npm run start.

// // const calc = require ('./calculateResultSum.js')
// // const total = calc.calculateResultSum([12.1, 32.2, 43.1], 0.9);
// // console.log("Общая стоимость покупок: " + total + " рублей");

// import calcResultSum from "./calc.js"; // added "type": "module" in the package.json

// const total = calcResultSum([12.1, 32.2, 43.1], 0.9);
// console.log("Общая стоимость покупок: " + total + " рублей");


// // Задание №3
// // - Найти библиотеку, которая поможет окрасить текст в терминале
// // - Применить возможности библиотеки и окрасить сообщение о стоимости
// // покупок красным, если стоимость больше 50 рублей и зеленым, если
// // стоимость менее 50 рублей

// require("colors");
// const calc = require("./calculateResultSum.js");

// const total1 = calc.calculateResultSum([12.1, 32.2, 43.1], 0.9);
// const output1 = `Общая стоимость покупок ${total1} рублей`;
// console.log((total1 > 50) ? output1.red : output1.green);

// const total2 = calc.calculateResultSum([12.1, 2.2, 3.1], 0.9);
// const output2 = `Общая стоимость покупок ${total2} рублей`;
// console.log((total2 > 50) ? output2.red : output2.green);


