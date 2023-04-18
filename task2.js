// // 1.Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:a < b < c
// const a = 2;
// const b = 4;
// const c = 8;
// const result = a < b < c;
// console.log(result);
//
// // 2.Є такий код:
// let x = 1;
// let y = 2;
//
// let res1 = ' ' + x + y;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // ""12""
// console.log(typeof res1); // ""string""
//
// let res2 = 'true' + y;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // ""true2""
// console.log(typeof res2); // ""string""
//
// let res3 = x > y;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // ""boolean""
//
// let res4 = NaN + x + y;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // ""number""
//
// // 3.Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку.
// //Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи.
// //Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”.
// //Якщо вік менше 18 років вивести “Ви ще надто молоді”,
// const isAdult = prompt('How old are u?');
// const resultAge = isAdult >= 18 ? 'Ви досягли повнолітнього віку.' : 'Ви ще надто молоді.';
// console.log(resultAge);
//
// // 4.Задано масив чисел, знайти число яке найбільш часто входить в масив,
// //занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// const count = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {});
// const maxCount = Math.max(...Object.values(count));
// const newArr = arr.filter((elem) => count[elem] !== maxCount);
//
// const mostFrequentNumber = Object.keys(count).find(key => count[key] === maxCount);
// console.log(mostFrequentNumber)
// console.log(newArr)
//
// // 5.Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// // Необхідно
// // a) визначити і вивести в консоль площу трикутника
// // b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// //  Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести
// // 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми' +
// // ' (наприклад:  8.42355465 =>  8.424).
//
// // const sideA = +prompt('length of triangle A?');
// // const sideB = +prompt('length of triangle B?');
// // const sideC = +prompt('length of triangle C?');
// //
// // const resultSide = (sideA + sideB + sideC) / 2;
// // if (!sideA || !sideB || !sideC || isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
// //     alert('Incorrect data')
// // } else {
// //     const resultTriangle = (sideA * sideA + sideB * sideB === sideC * sideC) ? 'rectangular' : 'not rectangular';
// //     console.log(resultTriangle);
// //     console.log(resultSide.toFixed(3));
// // }
//
// // 6.Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання.
// //     Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// //     В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// //     В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// //     В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// //     В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.
//
// const date = new Date();
// const hours = date.getHours();
// if (hours >= 5 && hours < 11) {
//     console.log('Доброго ранку')
// } else if (hours >= 11 && hours < 17) {
//     console.log('Доброго дня')
// } else if (hours >= 17 && hours < 23) {
//     console.log('Доброго вечора')
// } else if (hours >= 23 && hours < 5) {
//     console.log('Доброї ночі')
// }
//
// const date2 = Date.now();
// const hours2 = Math.floor(date2 / (1000 * 60 * 60) % 24);
// switch (hours2) {
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log('Доброго ранку');
//         break;
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//         console.log('Доброго дня');
//         break;
//     case 17:
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//         console.log('Доброго вечора');
//         break;
//     case 23:
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log('Доброї ночі');
//         break;
//     default:
//         console.log('Неправильний час')
// }

// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Вася працює програмістом і отримує 50$ за кожні 100 рядків коду(99 рядків - 0$, 199 рядків - 50$).
// За кожне третє запізнення Васю штрафують на 20$. Реалізувати меню :

// користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати
let rate = 50;
let latePenalty = 20;

const desiredIncome = +prompt('What is Vasia desired income?');
const numDelays = +prompt('How late are you?')

function calculateLine(desiredIncome, numDelays) {
    let totalIncome = desiredIncome + (numDelays * latePenalty);
    return Math.floor((totalIncome / rate) * 100);
}

const resultVasia = calculateLine(desiredIncome, numDelays);
console.log(resultVasia)

// користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг коштів. Порахувати, скільки разів Вася може запізнитися.

const numberOfLines = +prompt('The number of lines written by Vasia');
const desiredIncomeForDelays = +prompt('What is Vasia desired income?');

function calculateDelays(linesOfCode, desiredIncome) {
    let totalIncome = (linesOfCode / 100) * rate;
    return Math.floor((totalIncome - desiredIncome) / latePenalty)
}

const resultVasia2 = calculateDelays(numberOfLines,desiredIncomeForDelays);
console.log(resultVasia2)

// користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей заплатять Васі і чи заплатять взагалі.
const numberOfLinesForPayment = +prompt('The number of lines written by Vasia?');
const numDelaysForPayment = +prompt('How late are you?')
function calculatePayment (numberOfLines, numDelays){
    let totalIncome = (numberOfLines / 100) * rate;
    let penalty = Math.floor(numDelays / 3) * latePenalty;
    let totalPayment = totalIncome - penalty;
    let willGetPaid = (totalPayment >= 0);
    return {totalPayment,willGetPaid}
}
const resultVasia3 = calculatePayment(numberOfLinesForPayment,numDelaysForPayment);
console.log(resultVasia3)