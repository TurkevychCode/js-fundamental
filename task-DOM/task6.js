// 1.
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно
// послідовно вивести вміст:
//     1) першого елемента списку
// 2) останнього елемента списку
// 3) другого елемента списку
// 4) четвертого елемента списку
// 5) третього елемента списку
// Приклад:
//     •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3
// const lists = document.querySelectorAll('#list li');
// const numbers = [0,4,1,3,2];
// const items = numbers.map(i => lists[i].textContent);
// alert(items.join('\n'));

//
// 2.
// Для сторінки
// <body>
// <h1>I'am a big header!!!</h1>
// <div id="myDiv">
//     <p>First paragraph</p>
// <p>Second paragraph</p>
// <p>Third paragraph</p>
// <p>Fourth paragraph</p>
// </div>
// <ul id="myList">
// <li>Make</li>
// <li>me</li>
// <li>horizontal!</li>
// </ul>
// <span>Make me invisible, please!</span>
// </body>
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
// const title = document.getElementsByTagName("h1")[0];
// title.style.background = 'green';
//
// const paragraphs = document.querySelectorAll('#myDiv p');
// paragraphs[0].style.fontWeight = 'bold';
// paragraphs[1].style.color = 'red';
// paragraphs[2].style.textDecoration = 'underline';
// paragraphs[3].style.fontStyle = 'italic';
//
// const addingText = document.querySelectorAll('#myList li');
// addingText[0].textContent += addingText[1].textContent + addingText[2].textContent;
// addingText[0].style.listStyle = 'none';
// addingText[1].remove();
// addingText[2].remove();


//
// 3.
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
// main class="mainClass check item">
// <div id="myDiv">
// <p>First paragraph</p>
// </div>
// </main>
// </body>
// const main = document.createElement('main');
// main.setAttribute('class','mainClass check item');
//
// const div = document.createElement('div');
// div.setAttribute('id', 'myDiv');
//
// const p = document.createElement('p');
// p.textContent = 'First paragraph';
//
// div.appendChild(p);
// main.appendChild(div);
// document.body.appendChild(main);

// clock task+


