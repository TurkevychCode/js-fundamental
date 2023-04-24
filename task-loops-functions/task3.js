// 1.
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри: початкове значення кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]
// function createArray(start, end) {
//     let newArray = [];
//     while (start <= end) {
//         newArray.push(start)
//         start++
//     }
//     return newArray
// }
// const result = createArray(2, 9);
// console.log(result);

// 2.
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// 1,2,2,3,3,3...
// function wholeNum(a,b){
//     let newArray = [];
//     let count = 1;
//     for (let i = a; i <= b; i++, count++) {
//         for (let j = 0; j < count; j++) {
//             newArray.push(i)
//         }
//     }
//     return newArray
// }
// const result = wholeNum(1,3);
// console.log(result);

// 3.Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]
// function randArray(k) {
//     let randomArray = [];
//     for (let i = 0; i <= k; i++) {
//         randomArray.push(Math.floor(Math.random() * 500) + 1);
//     }
//     return randomArray;
// }
//
// const result = randArray(5);
// console.log(result);

// 4.Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]
// const arr = [5, 3, 4, 5,6,7,3];
// function compact (arrayNumb){
//     let newArray = [];
//     for (let i = 0; i < arrayNumb.length; i++) {
//         if (!newArray.includes(arrayNumb[i])){
//             newArray.push(arrayNumb[i])
//         }
//     }
//     return newArray;
// }
// const result = compact(arr);
// console.log(result);
// console.log(arr);

// 5.Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних
// (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
// [[5, 12, 99, 2, 2, 4, 3],[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”]
// let arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '3', 'a', 'text'], 'strong', 'broun'];
//
// function sortArrays(arr) {
//     let stringArr = [];
//     let numberArr = [];
//     arr.forEach((item) => {
//         if (Array.isArray(item)) {
//             let nestedArrays = sortArrays(item);
//             numberArr = numberArr.concat(nestedArrays[0]);
//             stringArr = stringArr.concat(nestedArrays[1]);
//         } else if (typeof item === "number") {
//             numberArr.push(item);
//         } else {
//             stringArr.push(item);
//         }
//     });
//
//     return [numberArr, stringArr];
// }
//
// const funcResult = sortArrays(arr);
// console.log(funcResult);

// 6.Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат.
// Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
// calc(10, 3, 1); // => 7
// function calc(a,b,op){
//     if (op === 1){
//        return a - b
//     }else if (op === 2){
//         return a * b
//     }else if (op === 3){
//         return a / b
//     }else return a + b
// }
// const result = calc(2,8,2);
// console.log(result);

//7.Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.

// function findUnique(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) return false
//         }
//     }
//     return true
// }
// const result = findUnique([1, 2, 3, 5, 3]);
// console.log(result)
// findUnique([1, 2, 3, 5, 11])
//
// ⭐⭐⭐
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію,
// яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.  (потребує використання closure)
// const tom = create("pass_for_Tom");
// tom("pass_for_Tom"); //повертає true
// tom("pass_for_tom"); //повертає false
//
// function create(arg){
//     return function (value){
//         return value === arg;
//     };
// }
//
// const tom = create('pass_for_Tom');
// console.log(tom);
// console.log(tom('pass_for_Tom'));
// console.log(tom('pass_for_tom'));