// 1.Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message і
// цілочисельне значення затримки delay (в мс) і повертає Promise, який чекає задану кількість часу
// (використовуючи аргумент delay) і завершується повідомленням message.
//     Приклад застосування функції:
//     getPromise("test promise", 2000).then(function(data) {
//         console.log(data);
//     });
// Результат: через 2 сек в консолі виводиться "test promise"
// const getPromise = (message, delay) => {
//     return new Promise((resolve,reject) => {
//         if (isNaN(delay) || message !== 'string'){
//             reject(new Error('incorrect data'))
//         }else{
//             setTimeout(() => {
//                 resolve((message))
//             }, delay)
//         }
//
//     })
// }
// getPromise('test promise', 2000)
//     .then((data) => {
//     console.log(data)
// })
//     .catch((err)=>{
//         console.error(err.message)
//     })

// 2.Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел.
// Функція повинна повернути Promise, робота якого завершується поверненням добутку елементів масиву,
// якщо вони є типу Numbers, або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.
// Приклад застосування функції:
// calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// "Error! Incorrect array!"
// const numbers = [2,2,2,'2',2];
// function calcArrProduct (array){
//     let result = 0;
//     return new Promise((resolve, reject) => {
//         for (const arrayElement of array) {
//             if (isNaN(arrayElement) || arrayElement !== 'number'){
//                 reject(new Error('array has not a number element'))
//             }else {
//                 result += arrayElement
//             }
//         }
//         resolve(result)
//     })
// }
// calcArrProduct(numbers)
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.error(err)
//     })

// 3.Створіть наступний асинхронний ланцюжок promise:
//     new Promise(function (resolve, reject) {
//         // Запитуємо у користувача number за допомогою prompt()
//         // Якщо користувач ввів не число - викликаємо reject()
//         // Якщо користувач ввів число- викликаємо resolve(number)
//     }).catch(function (error) {
//         return new Promise(function (resolve, reject) {
//             // Запитуємо у користувача number, до тих пір, поки він його не введе
//             // Після вводу числа - викликаємо resolve(number)
//         });
//     }).then(function (result) {
//         // Вивід number у консоль
//     });
// function correctNumb() {
//     return new Promise((resolve, reject) => {
//         const result = +prompt('write the number');
//         if (isNaN(result)) {
//             reject(new Error('is not a number'))
//         } else {
//             resolve(result)
//         }
//     })
// }
// function askNumber() {
//     return new Promise((resolve, reject) => {
//         correctNumb()
//             .then(resolve)
//             .catch(() => {
//                 askNumber().then(resolve).catch(reject)
//             })
//     })
// }
// new Promise((resolve, reject) => {
//     correctNumb()
//         .then(resolve)
//         .catch(() => {
//             askNumber().then(resolve).catch(reject)
//         })
// })
//     .catch((err) => {
//         console.log(err)
//         return askNumber()
//     })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// 4.Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом (від 0 до N мілісекунд).
// Використовуючи проміси потрібно змінити цикл так, щоб числа виводилися в строгій послідовності від 0 до 10. Наприклад,
//     якщо виведення нуля займає 4 секунди, а одиниці 2 секунди,
//     то одиниця повинна дочекатися виведення  нуля і тільки потім почати свій відлік (щоб дотримуватися послідовності).
// Для розв’язку задачі необзідно застосувати задану функцію delay(i, time), яка повертає проміс,
//     який резолвиться поточним значенням числа-лічильника циклу і, яке виводиться через час time мілісекунд.
//
//     Приклад  роботи:
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
    for (let i = 0; i <= 10; i++) {
        await delay(i,Math.random() * 1000)
        console.log(i)
    }
}
showNumbers();