// lesson 3.1


//рег выражения

// const test = '123 John 45 jacob 6 '
// const regex = /\d/gi;
//
// //match | replace | test
//
// console.log(test.match(regex))
//
// const text = "Johnny"
// const regex = /[jon]/ig
// console.log(text.replace(regex, "*"))
//
// console.log(regex.test(text))







//+ - 1>
//* - 0>
//? - 0 | 1



//g
//i
//m
//s


// \d - 0-9 | D - !0-9
// \w - words,digits, _ | W !
// \s - space | S - !space


//  CALLBACK FUNCTION

// const func1 = (func) => {
//     func()
// }
//
// const func2 = () => {
//     console.log("its func2")
// }
//
// func1(func2)


//рекурсия
//
// let num = 0;
// const test = () => {
//     num++
//     console.log(num)
//     if(num < 500){
//         requestAnimationFrame(test)
// }
//
// }
// test()




// lesson 3.2



//setInterval
//setTimeout
//clearInterval

// const functionTest = () => {
//     console.log("Hello World!");
// }

// setTimeout(() => {
//     console.log("hello")
// },1000)

// let num = 0
//
//
// // setInterval(functionTest,100)
//
// const interval = setInterval(() => {
//     num++
//     console.log("прошла " + num + " секунд")
//     if (num === 5) {clearInterval(interval)}
// },1000)
//
//
// const box = document.querySelector('.box')
// const  startBtn = document.querySelector('.start-btn')
// const stopBtn = document.querySelector('.stop-btn')
// let interval1 = null
// startBtn.onclick = () => {
//     if(interval1) return
//     interval1 = setInterval(() => {
//         box.style.opacity = box.style.opacity === 0 ? 1 : 0;
//     },1000)
//
// }
//
// stopBtn.onclick = () => {
//     clearInterval(interval1);
//     interval1 = null
//     box.style.opacity = 1;
// }


// event.stopPropagation()



// ад колбеков
//
// const  logger = (user) => {
//     let {username,desc} = user;
//     console.log(`${username} - ${desc}`);
// }
// setTimeout(() => {
//     const user = {
//         username: 'john',
//         desc: 'John Doe',
//     }
//     logger(user);
//     setTimeout(() => {
//         user.username = 'Andrew';
//         user.desc = '1';
//     },1000)
//     logger(user);
// },1500)

// PROMISE
//pending -- fulfilled | rejected
// console.log(1)
// setTimeout(()=>{
//     console.log("timeOut");
// })
// new Promise((resolve, reject) => {
//     console.log("promise console");
//     resolve();
// })
//     .then(() => {
//         console.log("promise complete");
//     })
// console.log(5)
// const count = 1
//
// new Promise((res,rej) => {
//     const user ={
//         username: 'andrew',
//         desc: 'hum',
//
//     }
//     setTimeout(() => {
//         logger(user)
//        if(count === 1) {
//            res(user)
//        }
//     },1500)
// })
//     .then(
//         (user) => {return new Promise((res,rej) => {
//             setTimeout(()=>{
//                 user.username = 'MAX';
//                 user.desc = 'woman';
//                 logger(user)
//                 res(user)
//             },1500)
//         })},
//         (user) => {console.warn("error")}
//     )
// .then(
//     (user) => {
//         return new Promise((res,rej) => {
//             setTimeout(()=>{
//                 user.username = 'SOFIA';
//                 user.desc = 'BLABLA';
//                 logger(user)
//                 rej("error")
//             },1500)
//         })
//     },
//     (user) => {
// console.warn("error")
//     }
// )
// .then(
//     () => {},
//     (text) => {
//         console.warn("error")
//     }
// )

// queueMicrotask(() => {
//     console.log('queueMicrotask');
// })\


// all | allSettled | race | any
// const delay = (seconds, flag, text) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(flag) reject("error");
//             resolve(text);
//         },seconds);
//     });
// }
//
// const promise1 = delay(1000,true,"first promise");
// const promise2 = delay(2000,false,"second promise");
//
// Promise.allSettled([promise1, promise2])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//
// Promise.any([promise1, promise2])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// Promise.race([promise1, promise2])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// Promise.all([promise1, promise2])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//------------------- 1

//
// console.log(1);
//
// setTimeout(() => {
//     console.log(2);
//     Promise.resolve().then(() => console.log(3));
// }, 0);
//
// Promise.resolve().then(() => console.log(4));
//
// console.log(10);
//
// //--------------------- 4
//
// setTimeout(() => {
//     console.log(2);
//     queueMicrotask(() => console.log(6))
//     setTimeout(() => {
//         console.log(3);
//         queueMicrotask(() => console.log(4))
//     }, 1000);
//
// }, 1000);
//
// console.log(10)
// setTimeout(function timeout() {
//     console.log('Таймаут');
// }, 0);
//
// let p = new Promise(function(resolve, reject) {
//     console.log('Создание промиса');
//     resolve();
// });
//
// p.then(function(){
//     console.log('Обработка промиса');
// });
//
// console.log('Конец скрипта');
//6
// console.log(1);
//
// setTimeout(() => console.log(2));
//
// Promise.resolve().then(() => console.log(3));
//
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
//
// Promise.resolve().then(() => console.log(5));
//
// setTimeout(() => console.log(6));
//
// console.log(7);
// console.log(1);
//
// setTimeout(() => console.log(2));
//
// Promise.reject(3).catch((error) => {console.log(error)});
//
// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));
//
// Promise.resolve(5).then((data) => {console.log(data)});
//
// console.log(6);
//
// setTimeout(() => console.log(7),0);

//try catch | finally
//  const textContains = (text) => {
//     try{
//         if(text.length === 0 || !text){
//             throw new Error("no text")
//         };
//         console.log(text);
//     }catch(err){
//         console.log("error:", err.message);
//     }finally {
//         console.log("end")
//     }
//  }
//  textContains("text")





//lesson 3.4

//AJAX

// XML

//http

//https

// const func = () => {
//     fetch("./json.json")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         });
// }
// func()


// const func = async () => {
//     const response = await fetch("json.json")
//     const data = await response.json()
//     console.log(data)
// }
// func()



//lesson 5
// const form = document.querySelector('form');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
//
//
// const BASE_API = 'https://jsonplaceholder.typicode.com/posts';
//
// const getPosts = async() => {
//     try{
//         const response = await fetch(BASE_API);
//         const data = await response.json();
//         console.log(`Количество постов: ${data.length}`)
//     }catch(error){
//         console.warn(`Произошла ошибка`, error);
//     }
// }
//
// getPosts();
//
// const sendAsJson = async(payload) => {
//     try{
//         const response = await fetch(BASE_API, {
//             method: "POST",
//             body: JSON.stringify(payload)
//         });
//         const data = await response.json();
//         console.log('Ответ от send JSON', data);
//         await getPosts();
//     }catch(error){
//         console.warn(`Произошла ошибка при send JSON`, error);
//     }
// }
//
// const sendAsFormData = async(payload) => {
//     try{
//         const response = await fetch(BASE_API, {
//             method: "POST",
//             body: payload
//         });
//         const data = await response.json();
//         console.log('Ответ от send Form Data', data);
//         await getPosts();
//     }catch(error){
//         console.warn(`Произошла ошибка при send Form Data`, error);
//     }
// }
//
// form.addEventListener('submit', async(event) => {
//     event.preventDefault();
//     const mode = event.submitter.value;
//     if(mode == 'json'){
//         await sendAsJson({
//             email: emailInput.value,
//             password: passwordInput.value
//         })
//     }else{
//         const formData = new FormData(form);
//         await sendAsFormData(formData)
//     }
//     form.reset();
// })


//lesson6
import { books_API, getBooks, createBook, updateBook, deleteBook } from './api.js';

const completedSelect = document.querySelector('#completed');
const searchInput = document.querySelector('#search');
const sortBySelect = document.querySelector('#sortBy');
const orderSelect = document.querySelector('#order');
const limitInput = document.querySelector('#limit');
const urlText = document.querySelector('.url');
const list = document.querySelector('.tasks');
const loadMoreBtn = document.querySelector('.load-more');
const form = document.querySelector('form');

let page = 1;
let searchTimer;

const getLimit = () => Math.max(1, Number(limitInput.value) || 5);

const buildQuery = () => {
    const query = new URLSearchParams();

    if (completedSelect.value) query.set('isRead', completedSelect.value);

    const search = searchInput.value.trim();
    if (search) query.set('search', search);

    query.set('sortBy', sortBySelect.value || 'year');
    query.set('order', orderSelect.value);
    query.set('page', page);
    query.set('limit', getLimit());

    return query;
};

const syncAddress = () => {
    const params = new URLSearchParams();

    if (completedSelect.value) params.set('completed', completedSelect.value);

    const search = searchInput.value.trim();
    if (search) params.set('search', search);

    if (sortBySelect.value) params.set('sortBy', sortBySelect.value);
    params.set('order', orderSelect.value);
    params.set('limit', getLimit());

    const pageUrl = new URL(window.location);
    pageUrl.search = params.toString();

    try {
        history.replaceState({}, '', pageUrl);
    } catch (err) {
        console.warn('Не удалось обновить адрес страницы:', err.message);
    }
};

const restoreFromAddress = () => {
    const params = new URLSearchParams(window.location.search);

    completedSelect.value = params.get('completed') ?? '';
    searchInput.value = params.get('search') ?? '';
    sortBySelect.value = params.get('sortBy') ?? '';
    orderSelect.value = params.get('order') ?? 'asc';
    limitInput.value = params.get('limit') ?? '5';
};

const showEmpty = () => {
    list.innerHTML = '';

    const li = document.createElement('li');
    li.className = 'empty';
    li.textContent = 'Ничего не найдено';

    list.append(li);
};

const removeEmpty = () => {
    list.querySelector('.empty')?.remove();
};

const createBookItem = (book) => {
    const li = document.createElement('li');
    li.dataset.id = book.id;

    const title = document.createElement('h3');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = book.author;

    const year = document.createElement('p');
    year.textContent = book.year;

    const status = document.createElement('p');

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Удалить';

    const showReadState = () => {
        status.textContent = book.isRead ? 'Прочитана' : 'Не прочитана';
        toggleBtn.textContent = book.isRead ? 'Отметить непрочитанной' : 'Отметить прочитанной';
    };

    toggleBtn.addEventListener('click', async () => {
        toggleBtn.disabled = true;

        try {
            const updated = await updateBook(book.id, { ...book, isRead: !book.isRead });
            book.isRead = updated.isRead;
            showReadState();
        } catch (err) {
            console.warn('Не удалось обновить книгу:', err.message);
        } finally {
            toggleBtn.disabled = false;
        }
    });

    deleteBtn.addEventListener('click', async () => {
        deleteBtn.disabled = true;

        try {
            await deleteBook(book.id);
            li.remove();
            if (!list.children.length) showEmpty();
        } catch (err) {
            deleteBtn.disabled = false;
            console.warn('Не удалось удалить книгу:', err.message);
        }
    });

    showReadState();
    li.append(title, author, year, status, toggleBtn, deleteBtn);

    return li;
};

const appendBooks = (books) => {
    removeEmpty();

    books.forEach(book => {
        if (!list.querySelector(`[data-id="${book.id}"]`)) {
            list.append(createBookItem(book));
        }
    });
};

const loadBooks = async (reset = true) => {
    if (reset) {
        page = 1;
        list.innerHTML = '';
        loadMoreBtn.hidden = true;
    }

    const query = buildQuery();
    urlText.textContent = `${books_API}?${query}`;
    loadMoreBtn.disabled = true;

    try {
        const books = await getBooks(query);

        appendBooks(books);
        if (!list.children.length) showEmpty();

        loadMoreBtn.hidden = books.length < Number(query.get('limit'));
    } catch (err) {
        if (err.status === 404) {
            if (!list.children.length) showEmpty();
            loadMoreBtn.hidden = true;
        } else {
            if (!reset) page -= 1;
            console.warn('Не удалось загрузить книги:', err.message);
        }
    } finally {
        loadMoreBtn.disabled = false;
    }
};

const applyFilters = () => {
    syncAddress();
    loadBooks(true);
};

[completedSelect, sortBySelect, orderSelect, limitInput].forEach(control => {
    control.addEventListener('change', applyFilters);
});

searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(applyFilters, 400);
});

loadMoreBtn.addEventListener('click', () => {
    page += 1;
    loadBooks(false);
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));
    const book = {
        title: data.title.trim(),
        author: data.author?.trim() ?? '',
        year: data.year ? Number(data.year) : 0,
        isRead: Boolean(form.elements.isRead?.checked),
    };

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    try {
        const created = await createBook(book);
        appendBooks([created]);
        form.reset();
    } catch (err) {
        console.warn('Не удалось добавить книгу:', err.message);
    } finally {
        submitBtn.disabled = false;
    }
});

restoreFromAddress();
loadBooks(true);