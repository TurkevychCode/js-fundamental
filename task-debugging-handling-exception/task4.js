// 1.Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) –
// порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
// Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// const arr = [1,2,3,4,5,6,7,8,9,10];
// function sumSliceArray (arr, first, second){
//     for (let i = 0; i < arr.length; i++) {
//         const resultElement = arr[i];
//         if (isNaN(resultElement)){
//             alert('Incorrect data!')
//         }else {
//             return arr[first - 1] + arr[second - 1];
//         }
//     }
// }
// const resultFunctionSumSliceArray = sumSliceArray(arr,3,6);
// console.log(resultFunctionSumSliceArray);

// 2.Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач)
// та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty!
// Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).
// в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму.
// У блоці catch передбачена можливість виведення назви та опису помилки.
// function checkAge(){
//     try {
//         const name = prompt('Enter your name').toLocaleLowerCase();
//         const age = +prompt('Enter your age');
//         const status = prompt('Please enter your status (admin,moderator,user)').toLocaleLowerCase();
//
//         if (isNaN(age)) alert('Incorrect age!');
//         if (status !== 'admin' && status !== 'moderator' && status !== 'user') throw new EvalError('Incorrect status!');
//         if(!name && !age && !status) throw new Error('The field is empty! Please enter your name, age, status!')
//         const parseAge = Math.round(age);
//         if (parseAge < 18 || parseAge > 70) throw new RangeError('Age must be between 18 and 70!');
//
//         alert('You have access to watch the movie!')
//
//     }catch (error){
//         alert(error.message)
//     }
// }
// checkAge();
//
// 3.Реалізуйте функцію calcRectangleArea(width, height),
// яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу.
// Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
//     Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

// function calcRectangleArea(){
//     const width = +prompt('Enter width');
//     const height = +prompt('Enter height');
//     if (isNaN(width) || isNaN(height)){
//         throw new TypeError('Width and height is not a number!')
//     }
//     return width * height;
// }
// const resultCalcRectangle = calcRectangleArea();
// console.log(resultCalcRectangle);
// 4.Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
//     Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.
//     Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн
//     у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
//     Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
//     Приклад роботи програми:
//     console.log(showMonthName(5));  // May
// console.log(showMonthName(14)); // MonthException Incorrect month number
// class MonthException extends Error{
//     constructor(message) {
//         super(message);
//         this.name = 'MonthException';
//     }
// }
// function showMonthName(month) {
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
//         'November', 'December']
//     if (month < 1 || month > 12) {
//         throw new MonthException('Incorrect month number!');
//     }
//     return months[month - 1];
// }
// try {
//     const monthName = showMonthName(14);
//     console.log(`This month is ${monthName}`)
// } catch (error) {
//     if (error instanceof MonthException){
//         console.error(error.message)
//     }else {
//         console.error('I dont know where is the mistake', error.message)
//     }
// }
//
//5.Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт,
// який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
//     Реалізуйте функцію showUsers(ids),
//     яка приймає параметром масив користувацьких айді ids,
//     перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
//     в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів,
//     де значеннями ключів є коректні елементи ids.
//
//     Приклад роботи програми:
//     showUsers([7, -12, 44, 22]);
// // Error: ID must not be negative: -12
// // [ {id: 7}, {id: 44}, {id: 22} ]

// function showUser(id) {
//     if (id < 0) {
//         throw new Error(`ID must not be negative: ${id}`)
//     }
//     return {id};
// }
// function showUsers(ids) {
//     const result = [];
//     for (const id of ids) {
//         try {
//             const user = showUser(id);
//             result.push(user);
//         } catch (error) {
//             console.error(error.message)
//         }
//     }
//     return result;
// }
// const result = showUsers([12,43,31,-3,12,23]);
// console.log(result);