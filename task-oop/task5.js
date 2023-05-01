// Напишіть клас Круг та реалізуйте функціонал:
//     Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
// Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
// Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
// Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
// Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
// Визначте метод перевірки попадання крапки до кола;
// Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).
// class Circle {
//     constructor(x, y, radius) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius
//     }
//
//     getLengthOfCircle() {
//         return 2 * Math.PI * this.radius
//     }
//
//     static staticGetLength(radius) {
//         return 2 * Math.PI * radius
//     }
//
//     getCopy() {
//         return new Circle(this.x, this.y, this.radius)
//     }
//
//     static staticGetCopy(x, y, radius) {
//         return new Circle(x, y, radius)
//     }
//
//     isPointInside(x, y) {
//         const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
//         return distance <= this.radius
//     }
//
//     toString() {
//         return `Circle with center ${this.x}, ${this.y} and radius ${this.radius}`
//     }
// }
//
// const myCircle = new Circle(2, 2, 8);
// console.log(myCircle);
//
// const getLength = myCircle.getLengthOfCircle();
// console.log(getLength);
//
// const staticGetLength = Circle.staticGetLength(5);
// console.log(staticGetLength);
//
// const copyCircle = myCircle.getCopy();
// console.log(copyCircle);
//
// const staticCopyCircle = Circle.staticGetCopy(5, 5, 10);
// console.log(staticCopyCircle);
//
// const isInSide = myCircle.isPointInside(4, 6);
// console.log(isInSide);
//
// const string = myCircle.toString();
// console.log(string);

//
// Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
//     Наприклад:
// let sayHello = 'Hello';
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// };
//
// function propsCount(currentObject) {
//     if (typeof currentObject !== 'object') throw new TypeError('Parameter is not an object!')
//     return  Object.keys(currentObject).length;
// }
//
// const resultCurrent = propsCount(mentor);
// console.log(resultCurrent);
//
// Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи.
//     Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
// В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента.
//     Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
//     Приклад результату:
//     const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//
//     showFullName() {
//         console.log(`Hi my name is ${this.name}, and my surname is ${this.surname}`)
//     }
// }
//
// class Student extends Person {
//     currentDate = new Date().getFullYear();
//
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//
//     showFullName(middleName) {
//         console.log(`Hi my name is ${this.name}, and my surname is ${this.surname},my middle name ${middleName}`)
//     }
//
//     showCourse() {
//         let universityCourse = this.currentDate - this.year + 1;
//         if (universityCourse < 1) {
//             console.log('You haven t entered university yet');
//         } else if (universityCourse > 6) {
//             console.log('You have already graduated from university');
//         } else console.log(`Current course: ${universityCourse}`);
//     }
// }
// const respStudent = new Student('Vitalik', 'Turkevych', 2018);
// respStudent.showFullName('R');
// respStudent.showCourse();
//
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
//     поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнила в маркері (у відсотках);
// метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера.
// Продемонструвати роботу написаних методів
// class Marker{
//     constructor(markerColor,amountOfInk) {
//         this.markerColor = markerColor;
//         this.amountOfInk = amountOfInk;
//     }
//     printing(text){
//         let inkPerChar = 0.5;
//         let printedText = '';
//         for (const letter of text) {
//             if (letter !== ' ' && this.amountOfInk >= inkPerChar){
//                 printedText += letter;
//                 this.amountOfInk -= inkPerChar;
//             } else printedText += ' ';
//         }
//         console.log("%c" + printedText, "color:" + this.markerColor);
//     }
// }
// const resultMarker = new Marker('blue',10);
// resultMarker.printing('Hello World');
// console.log(resultMarker);
//
// class InfoMarker extends Marker{
//     constructor(markerColor,amountOfInk,capacity) {
//         super(markerColor,amountOfInk);
//         this.capacity = capacity;
//     }
//     markerFiling(){
//        this.amountOfInk = this.capacity;
//         console.log('Marker has been refilled')
//     }
// }
// const marker = new InfoMarker('yellow', 50, 100);
// marker.markerFiling();
// marker.printing('Hi how are you?')
// console.log(marker);
// 5.
// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище),
// dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
// 1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate
// на кількість відпрацьованих днів workingDays.

// 2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при
// визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.

// 3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.

// 4) Вивести значення зарплати з новим experience.

// 5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати
// зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value

// 6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
//     Example usage:
//     let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
//
// let worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .
//
// let worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .
//
// Output example:
//     John Johnson
//
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690
//
// Tom Tomson
// Tom Tomson salary: 1056
//     . . . . . .
//     New experience: 1.5
// Tom Tomson  salary: 1584
//
// Andy Ander
// Andy Ander salary: 667
//     . . . . . .
//     New experience: 1.5
// Andy Ander  salary: 1000.5
//
// Sorted salary:
//     John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584

class Worker {
    #experience = 1.2;

    constructor(fullName,dayRate,workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.#experience = 1.2;
    }
    showSalary(){
        console.log(`${this.fullName} receives per month: ${this.dayRate * this.workingDays}`)
    }
    getSalaryWithExperience() {
        return this.dayRate * this.workingDays * this.#experience;
    }
    showSalaryWithExperience(){
        let salaryWithExperience = this.dayRate * this.workingDays * this.#experience;
        console.log(`${this.fullName} receives per month, taking into account the additional experience factor:
        ${salaryWithExperience}`);
    }
    get experience (){
        console.log(this.#experience)
    }
    set experience(value){
        if (value < 1){
            console.log('experience cannot be less than 1');
        }
        this.#experience = value
    }
}
const worker1 = new Worker('Vitali',12,30);
const worker2 = new Worker('Oleh',7,30);
const worker3 = new Worker('Anton',24,30);

worker1.experience = 2;
worker2.experience = 1.2;
worker3.experience = 1.6;

worker1.showSalary();
worker1.showSalaryWithExperience();
worker2.showSalary();
worker2.showSalaryWithExperience();
worker3.showSalary();
worker3.showSalaryWithExperience();

const workers = [worker1, worker2, worker3];
function sortWorkers(workers){
    workers.sort((a,b)=> a.getSalaryWithExperience() - b.getSalaryWithExperience());
    workers.forEach(worker => console.log(`${worker.fullName}: ${worker.getSalaryWithExperience()}`));
}
sortWorkers(workers)

