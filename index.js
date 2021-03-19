
// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

const NUMBS_ARR = [1, 5, 7, 8, 9, 0, -5, -55, 105, 0, 5, 299, 6, 7];

const NUMB_SORTED = NUMBS_ARR.sort((a, b) => b - a);

const MAX_NUMB = NUMB_SORTED[0];

console.log(MAX_NUMB);

// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”].
//  Створити новий масив де будуть тільки Стрінгові значення.

const ARR = ["test", 12, undefined, null, -5, "javascript", "1", false, true, 0, "!"];

const STRING_ARR = [];

ARR.map(el => typeof (el) === "string" ? STRING_ARR.push(el) : '');

console.log(STRING_ARR);

// 3.	Дано колекцію - 
// [{ name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin" },
// { name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user" },
// { name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user" }]
//    – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking.
//     Додати можливість додати нове поле для всіх юзерів – job (true/false);

const USERS = [
    { name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin" },
    { name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user" },
    { name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user" }
];

const USERS_USER = [];

USERS.map(el => el.type === "user" ? USERS_USER.push(el) : '');

console.log(USERS_USER);

const USERS_HIKING = [];

USERS.map(el => {
    for (let i = 0, hobs = el.hobby; i < hobs.length; i++) {
        hobs[i] === "hiking" ? USERS_HIKING.push(el) : '';
    }
});

console.log(USERS_HIKING);

// // 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки
// (додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.

const PRIVATE_DATA = document.createElement('div');
PRIVATE_DATA.textContent = 'Try to do this, mid Techies';
document.body.append(PRIVATE_DATA);

window.addEventListener('keydown', e => {
    if (e.altKey && e.code == 'KeyU') {
        textSpan.style.display = 'none';
        textInput.style.display = 'inline-block';
    }
})

window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.code === 'KeyC') {
        alert('It\'s better for all to ban Techies, take Invoker, pls :)\nWill we play dota at night? )))')
    };
});

// // 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн
//  та її столицею на сторінку, назву країни зробити великими буквами. 

const COUNTRIES = [];

const COUNTRIES_LIST = document.createElement('ol');

function getCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => {
            data.map(el => {

                const COUNTRY_WRAPPER = document.createElement('li');
                const COUNTRY = document.createElement('ul');
                const COUNTRY_NAME = document.createElement('li');
                const COUNTRY_CAPITAL = document.createElement('li');

                COUNTRY_NAME.textContent = el.name;
                COUNTRY_CAPITAL.textContent = el.capital;

                COUNTRY.append(COUNTRY_NAME);
                COUNTRY.append(COUNTRY_CAPITAL);
                COUNTRY_WRAPPER.append(COUNTRY);

                COUNTRIES_LIST.append(COUNTRY_WRAPPER);
            })
            PRIVATE_DATA.append(COUNTRIES_LIST);
        })
};

getCountries();