// 1.Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону,
// потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.
// $('h2.head').addClass('color');
// $('span.inner').addClass('inner');

// 2.На HTML-сторінці є посилання <a>. У випадку коли,
//href починається на https://, потрібно додати посиланню атрибут target="_blank".

// $(document).ready(function (){
//    $('a[href="https://"]').attr('target','_blank')
// });
// const a = document.querySelector('a');
// console.log(a);

// 3.Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так,
// щоб він став безпосередньо над <h3>.

// $('h3 + div').each(function() {
//     $(this).insertBefore($(this).prev('h3'));
// });

// 4.На HTML-сторінці є 6 чекбоксів. Напишіть скріпт,
//який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.

let checkBox = $('input[type="checkbox"]');
checkBox.on('click',function (){
    let checked = checkBox.filter(':checked').length
    if (checked >= 3){
        checkBox.prop('disabled',true)
    }
})