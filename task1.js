// //2. Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище. Підключіть створений файл до HTML-документу.
// console.log('Turkevych')
//
// // 3. a) оголосіть дві змінні;
// // b) запишіть у змінні будь-які значення;
// // c) виведіть на екран значення змінних;
// // d) скопіюйте значення однієї змінної в іншу;
// // e) виведіть на екран значення змінних.
// let firstName = 'Anton';
// let secondName = 'Vitalik';
// firstName = secondName;
// document.write(firstName, secondName);
//
// //4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”.
// //Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
// const person = {
//     name: 'Vitalik',
//     age: 22,
//     married: false,
//     kids: null,
//     threeHand: undefined
// }
//
// //5. Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку.
// // Результат запишіть в змінну isAdult і виведіть в консоль.
// const isAdult = confirm('are you adult');
// console.log(isAdult);
//
// // 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
// //     - ваше ім’я
// // - ваше прізвище
// // - навчальна група
// // - ваш рік народження.
// //     Присвойте змінним відповідні значення.
// //     Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
// //     Визначте тип кожної змінної.
// //     Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
// //     Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
// const name = 'Vitalik';
// const surName = 'Turkevych';
// const studyGroup = 'JS fundamental';
// const dateOfBirthday = 2001;
// const married = false;
// const kids = null;
// const threeHand = undefined;
// console.log(dateOfBirthday, married, surName, name, studyGroup, kids, threeHand);
//
// // 7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними.
// // Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.
// const email = prompt('your email?');
// const password = prompt('your password?');
// document.write(`Dear User, your email is ${email}, your password is ${password}`);
//
// // 8. Напишіть скріпт, який вираховує кількість секунд в годині,
// // в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
//
// const secondInHour = 60 * 60;
// const secondInDay = 3600 * 24;
// const secondInMonth = 86400 * 30;
// console.log(secondInHour, secondInDay, secondInMonth)
//
// const answerSecondInHour = 60 * 60;
// const answerSecondInDay = 60 * 60 * 24;
// const answerSecondInMonth = 60 * 60 * 24 * 30;
// console.log(answerSecondInHour, answerSecondInDay, answerSecondInMonth)
