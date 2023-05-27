// 1.Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині.
// Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи,
// тип операційної системи, час роботи системи в хвилинах (використати модуль OS),
// поточну робочу директорію і назву файлу сервера (використати модуль path).

// const http = require('http');
// const os = require('os');
// const path = require('path');
//
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//
//     const username = os.userInfo().username;
//     const osType = os.type();
//     const uptime = Math.floor(os.uptime() / 60);
//     const currentDirectory = process.cwd();
//     const serverFilename = path.basename(__filename);
//
//     const html = `
//     <html>
//       <head>
//         <title>Node.js HTTP Server</title>
//       </head>
//       <body>
//         <h1>Server Information</h1>
//         <h2>Username: ${username}</h2>
//         <h3>OS Type: ${osType}</h3>
//         <h4>Uptime (minutes): ${uptime}</h4>
//         <h5>Current Directory: ${currentDirectory}</h5>
//         <h6>Server Filename: ${serverFilename}</h6>
//       </body>
//     </html>
//   `;
//
//     res.end(html);
// });
//
// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// 2.Необхідно створити власний модуль personalmodule.js, який містить функцію,
// що приймає ім’я системного юзера і працює з поточним часом та на основі пори
// доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції
// модуля на зовні можна використати об’єкт module.exports.
// Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:

const http = require('http');
const { greetUser } = require('./personalmodule');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const username = 'Vitalik';

    const greeting = greetUser(username);

    const html = `
    <html>
      <head>
        <meta charset="utf-8">
        <title>Greetings</title>
      </head>
      <body>
        <h1>${greeting}</h1>
      </body>
    </html>
  `;

    res.end(html);
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});