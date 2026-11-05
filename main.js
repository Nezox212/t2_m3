//1) Напишите функцию для извлечения чисел - это функция которая принимает строку и
// возвращает массив всех чисел в строке
// Пример:
//
// const extractNumbers(str) {
//     return // Ваш код
// }

// extractNumbers("a1fg5hj6") // вернёт [1, 5, 6]

const regex = /\d+/g
const numbers = (str) => {
    return str.match(regex)
}
console.log(numbers("a1fg5hj6"))
console.log(numbers("dstyf23y4t2613sdhf2vo"))



//2) Напишите функцию рекурсию которая будет выводить в консоль числа фибоначчи
// с задержкой в одну секунду (ограничение число 144)
let num = 0;
let num1 = 1;

const fib = () => {
    if (num <= 144) {
        console.log(num);
        let nextNum = num + num1;
        num = num1;
        num1 = nextNum;

        setTimeout(fib, 1000);
    }
};

fib();


//3) Сделать запрос на API используя async await и try catch
// Делайте запроса на этот API => https://fakestoreapi.com/products
// Из полученных данных возьмите ключ title у каждого объекта и выведите их в консоль


const API = "https://fakestoreapi.com/products"
let numOfTitle = 0


const justFunc = async () => {
    try{
        const res = await fetch(API)
        const data = await res.json()
        for (let item of data) {
            numOfTitle++
            console.log(`${numOfTitle}: ${item.title}`)
        }

    }
    catch(err){
        console.warn(err)
    }
}
justFunc()

//4) Создайте 5 кнопок внутри которого будут названия цветов на английском.
// Используйте делегирование событий, навешивая обработчик события на родителя.
// При помощи делегирования событий сделайте так чтобы при нажатии на какую либо
// из кнопок менялся цвет заднего фона body на цвет нажатой кнопки


const btnColorChanger = document.querySelectorAll("button");

btnColorChanger.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.style.backgroundColor = btn.textContent
    })
})



//5) Создайте меню с несколькими пунктами и кнопку «Открыть меню». При нажатии на
// кнопку меню должно появляться, при повторном нажатии — скрываться. Активный пункт
// меню при клике должен подсвечиваться (добавляйте класс active), а с остальных пунктов
// этот класс убирайте. Всё переключение делайте только через classList.


const openBtn = document.querySelector('.open');
const menu = document.querySelector('#menu');

openBtn.onclick = () => {
    menu.classList.toggle('active');


}



//6) Отобразите на странице цифру ноль и начните его увеличивать на +1
// каждую мили-секунду  - остановите отсчёт когда счётчик дойдёт до 100
const ms = document.querySelector('.timeMS');
let msTime = 0
const MSAdder = () => {

    const timer = setInterval(() => {

        ms.textContent = msTime++ ;
        if(ms.textContent >= 100) {
            clearInterval(timer);
        }
    },1)
}
MSAdder();


//7) Создайте файл products.json с массивом из 4–5 товаров
// (поля: id, name, price, inStock: true/false). При загрузке страницы получайте
// эти данные через fetch и async/await. Отфильтруйте только те товары, у которых
// inStock: true, и выведите их на страницу в виде карточек с названием и ценой. Если товар
// недоступен — не показывайте его совсем.


const API_products = "./products.json";
const cards = document.querySelector('.productCards');
const getProducts = async () => {
    const response = await fetch(API_products);
const data = await response.json();
console.log(data);
for (let products of data) {
    if(products.inStock) {
        cards.innerHTML += `
<div class="card">
<div class="name">${products.name}</div>
<div class="id">#${products.id}</div>
<div class="price">${products.price}$</div>
</div>
`

    }
}
}
getProducts();


//8) Создайте страницу с кнопкой «Загрузить» и полем ввода для поиска.
// При нажатии на кнопку отправляется GET запрос на https://fakestoreapi.com/products
// через fetch и async/await. Все полученные товары выводятся на страницу с названием
// и ценой и рейтингом. При вводе текста в поле поиска список товаров фильтруется в реальном
// времени — отображаются только те товары, название которых содержит введённый текст.
// Используйте try/catch для обработки ошибок.

const findInput = document.querySelector('.find');
const loadBtn = document.querySelector('.load');
const products = document.querySelector('.products');
const API_load = "https://fakestoreapi.com/products"
let isLoaded = false


let allProducts = [];

loadBtn.onclick = async () => {
    if(!isLoaded) {
        const response = await fetch(API_load);
        allProducts = await response.json();
        renderProducts(allProducts);
        isLoaded = true;
    }
}

function renderProducts(productsArray) {
    products.innerHTML = '';
    for (let product of productsArray) {
        products.innerHTML += `
        <div class="cardP">
            <div class="idP">${product.id}</div>
            <div class="titleP">${product.title}</div>
            <div class="priceP">${product.price}</div>
            <div class="descriptionP">${product.description}</div>
            <div class="categoryP">${product.category}</div>
        </div>`;
    }
}

findInput.addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase().trim();
    const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchText)
    );
    renderProducts(filtered);
});



