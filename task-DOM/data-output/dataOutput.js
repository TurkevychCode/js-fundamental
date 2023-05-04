// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const button = document.querySelector('.btn');
button.addEventListener('click',function (){
    const inputs = document.querySelectorAll('.arr');

    const values = [];

    inputs.forEach((input) => {
        values.push(input.value)
    });
    const outBlock = document.querySelector('.out');

    outBlock.innerText = values.join('\n')
})
