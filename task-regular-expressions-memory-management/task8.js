// 1.Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
//     Приклад роботи:
// upperCase('regexp');
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"
// let regex = /[A-Z][a-z]*/;
// const resp = prompt('some text');
//
// if (regex.test(resp)) {
//     console.log('String\'s starts with uppercase character')
// } else console.warn('String\'s not starts with uppercase character');

// 2.Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true
// const checkEmail = (email) => {
//     const regex = /[A-Za-z0-9._-]+@[A-Za-z]+\.[A-Za-z]{2,}$/;
//     if (regex.test(email)) {
//         console.log('true')
//     } else console.log('false')
// }
// checkEmail("Qmail2@gmail.com");

// 3.Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
//     Приклад роботи:
//     Вхідний рядок: "Java Script"
// Вихід: “Script, Java”
// const str = 'Java Script';
// const regex = /^(\w+)\s+(\w+)$/;
// const modifyStr = str.replace(regex, '$2, $1')
// console.log(modifyStr);

// 4.Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

// const cardNumber = '5431-3124-4124-4134';

// function cardValidation(numberCard){
//     const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/
//     if (regex.test(numberCard)){
//         console.log('true')
//     }else console.log('false')
// }
// cardValidation(cardNumber);

// 5.Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
//Вимоги:
//  •  Цифри (0-9).
//  •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
//  •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.
// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"

// function checkEmail(email){
//     const regex = /^[a-zA-Z0-9]+([_\-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/
//     if (regex.test(email)){
//         console.log('true')
//     }else console.log('false')
// }
//
// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');

// 6.Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів,
//     що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в
// цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
//     Приклад роботи:
//     checkLogin('ee1.1ret3');
// true
// //1.1, 3
//
// checkLogin('ee1*1ret3');
// false
// //1, 1, 3

function checkLogin(login){
    const regex = /^[a-zA-Z][a-zA-Z0-9]{2,10}$/
    const numbers = login.match(/\d+(\.\d+)?/g);
    if (!regex.test(login)){
        console.log(numbers)
        return console.log(false)
    }else {
        console.log(numbers)
        return console.log(true)
    }
}
checkLogin('ee1.1ret3'); //true
checkLogin('ee1*1ret3'); //false



