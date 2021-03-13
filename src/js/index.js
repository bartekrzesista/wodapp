import '../scss/main.scss';

import {registerSW} from './pwa.js';
registerSW();

const counter = document.querySelector(".main__counter");
const addBtn = document.querySelector(".main__btn-add");
const deleteBtn = document.querySelector(".main__btn-delete");

let counterCurrentValue = 0;
counter.innerHTML = counterCurrentValue;

let date = new Date().toLocaleString("pl-PL");
const key = date.slice(0, 10);

if(localStorage.getItem(key) == false) {
    localStorage.setItem(key, 0);
}
else {
    counter.innerHTML = localStorage.getItem(key);
}

addBtn.addEventListener("click", () => {
    counterCurrentValue++;
    counter.innerHTML = counterCurrentValue;
    localStorage.setItem(key, counter.innerHTML);
});

deleteBtn.addEventListener("click", () => {
    if(counterCurrentValue > 0) {
        counterCurrentValue--;
        counter.innerHTML = counterCurrentValue;
        localStorage.setItem(key, counterCurrentValue);
    }
});


