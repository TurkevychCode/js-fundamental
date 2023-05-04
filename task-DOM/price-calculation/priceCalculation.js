// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.
const colorElements = document.querySelectorAll('.color');
colorElements.forEach(color => {
    color.addEventListener('click', () => {
        document.getElementById('outprice').textContent = color.getAttribute('data-price');
        document.querySelector('.color.active').classList.remove('active');
        color.classList.add('active');
    })
})