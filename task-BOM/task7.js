// 1.За допомогою методів об’єкта window створити:
//     1) нове вікно розміром 300х300 пікселів.
// 2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
// 3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
// 4) із затримкою 2 сек закрийте вікно.

// const newWindow = window.open('', 'name', 'width=300,height=300,color=black');
// newWindow.document.body.style.backgroundColor = 'red';
// setTimeout(() => {
//     newWindow.resizeTo(500, 500);
//     setTimeout(() => {
//         newWindow.moveTo(200, 200);
//         setTimeout(() => {
//             newWindow.close();
//         }, 2000);
//     }, 2000);
// }, 2000);

// 2.
// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту
// – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
// function changeStyle(){
//     const text = document.getElementById('text');
//     text.style.fontSize = '20px';
//     text.style.color = 'orange';
//     text.style.fontFamily = 'Comic Sans MS'
// }

// 3.
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями
// на кожному елементові:
//     1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
// 2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
// 3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
// 4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//     Приклад – курсор наведений на лінку.
// function changeFirstButton(){
//     const buttonBlock = document.getElementById('buttonBlock');
//     buttonBlock.style.backgroundColor = 'blue';
// }
// function changeSecondButton(){
//     const buttonBlock = document.getElementById('buttonBlock');
//     buttonBlock.style.backgroundColor = 'pink';
// }
// function changeThirdButton(){
//     const buttonBlock = document.getElementById('buttonBlock');
//     buttonBlock.style.backgroundColor = 'brown';
// }
// function changeThirdWhiteButton(){
//     const buttonBlock = document.getElementById('buttonBlock');
//     buttonBlock.style.backgroundColor = 'white';
// }
// function hoverOverText(){
//     const buttonBlock = document.getElementById('buttonBlock');
//     buttonBlock.style.backgroundColor = 'yellow';
// }
// function hoverOutText(){
//     const buttonBlock = document.getElementById('buttonBlock');
//     buttonBlock.style.backgroundColor = 'white';
// }

// 4.
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
//     Можуть видалятися всі елементи в будь-якому порядку.
// function removeOption(){
//     const select = document.getElementById('mySelect');
//     const selectedOption = select.options[select.selectedIndex];
//     select.removeChild(selectedOption)
// }

// 5.
// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",
//     а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
// const myButton = document.getElementById('liveButton');
// const container = document.getElementById('container');
//
// myButton.addEventListener("click", function() {
//     container.innerHTML += "<p>I was pressed!</p>";
// });
// myButton.addEventListener("mouseover", function() {
//     container.innerHTML += "<p>Mouse on me!</p>";
// });
// myButton.addEventListener("mouseout", function() {
//     container.innerHTML += "<p>Mouse is not on me!</p>";
// });

// 6.
// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти)
// вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.

// const width = document.getElementById('width');
// const height = document.getElementById('height');
//
// function windowSize(){
//     let windowWidth = window.innerWidth;
//     let windowHeight = window.innerHeight;
//
//     width.textContent = windowWidth + 'px';
//     height.textContent = windowHeight + 'px';
// }
// windowSize();
// window.addEventListener('resize',windowSize);

// 7.
// На сторінці потрібно реалізувати 2 випадаючих списки.
//     У першому містяться назви країн, у другому – назви міст.
//     Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна -
// в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript.' +
// ' Також потрібно нижче вивести назву обраної країни і місто.

const citiesByCountry = {
    ger: ['Berlin', 'Munich', 'Frankfurt'],
    usa: ['New York', 'Los Angeles', 'Chicago'],
    ukr: ['Kyiv','Lviv','Dnipro']
}

const selectCountry = document.getElementById('countries');
const selectCities = document.getElementById('cities');
const resultSelect = document.getElementById('result');

function cities(){
    selectCities.innerHTML = ''

    const selectedCountry = selectCountry.value;
    const cities = citiesByCountry[selectedCountry];

    cities.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.text = item;
        selectCities.add(option);
    })
    resultSelect.innerText = `Select country: ${selectCountry.options[selectCountry.selectedIndex].text}.
     Select city: ${selectCities.value}`
}
selectCountry.addEventListener('change',cities)
cities();

