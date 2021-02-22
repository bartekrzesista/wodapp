import '../scss/main.scss';

import {registerSW} from './pwa.js';
registerSW();

const counter = document.querySelector(".main__counter");
const addBtn = document.querySelector(".main__btn-add");
const deleteBtn = document.querySelector(".main__btn-delete");

let date = new Date().toLocaleString("pl-PL");
const key = date.slice(0, 10);

if(localStorage.getItem(key) == false) {
    localStorage.setItem(key, 0);
}
else {
    counter.innerHTML = localStorage.getItem(key);
}

addBtn.addEventListener("click", () => {
    counter.innerHTML++;
    localStorage.setItem(key, counter.innerHTML);
});

deleteBtn.addEventListener("click", () => {
    if(counter.innerHTML > 0) {
        counter.innerHTML--;
        localStorage.setItem(key, counter.innerHTML);
    }
    else console.log("Już jest zero");
});


