'use strict';


// Add text h2 - Task[i]
const title = document.querySelectorAll('h2');

for (let i = 0; i < title.length; i++) {
    title[i].innerText = `Task ${i + 1}`
}

// Add class valid or invalid
// ...


// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
const btnName = document.querySelector('.btn--name');
const outputName = document.querySelector('.output--name');

btnName.addEventListener('click', getName);

function getName() {
    let name = document.getElementById('fieldName').value;
    if (name == 0) {
        outputName.textContent = `Вы не ввели имя!`;
        outputName.classList.add('danger');
    } else if (name == name.replace(/[A-Za-zА-Яа-яЁё]/, '')) {
        outputName.textContent = `Имя из цифр состоять не может`;
    } else {
        name = name[0].toUpperCase() + name.slice(1);
        outputName.textContent = `Привет, ${name}!`;
        outputName.classList.add('success');
    }
}

// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const outputYear = document.querySelector('.output--year');
const btnYear = document.querySelector('.btn--year');
const YEAR = new Date().getFullYear();

const getYear = () => {
    const yearBirth = Math.abs(+document.getElementById('fieldUserYear').value);
    console.log(isNaN(yearBirth));
    const age = YEAR - yearBirth;
    if (yearBirth == 0) {
        outputYear.textContent = `Вы не ввели возраст!`;
        outputYear.classList.add('danger');
    } else if (yearBirth < 1900 || yearBirth > 2020 || isNaN(yearBirth)) {
        outputYear.textContent = `ерунда :)`;
        outputYear.classList.add('danger');
    } else {
        outputYear.textContent = `${age} ${ageToStr(age)}`;
        outputYear.classList.add('success');
    }
}

function ageToStr(age) {
    let count,
        txt;

    count = age % 100;
    if (count >= 5 && count <= 20) {
        txt = 'лет';
    } else {
        count = count % 10;
        if (count == 1) {
            txt = 'год';
        } else if (count >= 2 && count <= 4) {
            txt = 'года';
        } else {
            txt = 'лет';
        }
    }
    return txt;
}

btnYear.addEventListener('click', getYear);

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
const btnPerimeter = document.querySelector('.btn--perimeter');
const outputPerimeter = document.querySelector('.output--perimeter');

btnPerimeter.addEventListener('click', getPerimeter);

function getPerimeter() {
    const fieldSide = +document.getElementById('fieldSide').value;
    const perimeter = fieldSide * 4;

    outputPerimeter.classList.add('success');
    outputPerimeter.textContent = `${perimeter}`
}

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const btnSquare = document.querySelector('.btn--square');
const outputSquare = document.querySelector('.output--square');

btnSquare.addEventListener('click', getSquare);

function getSquare() {
    const fieldRadiusValue = +document.getElementById('fieldRadius').value;

    const square = Math.PI * Math.pow(fieldRadiusValue, 2);

    outputSquare.classList.add('success');
    outputSquare.textContent = `${square.toFixed(2)}`
}

// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const fieldUsd = document.getElementById('fieldUsd');
const outputConvert = document.querySelector('.output--convert');
const exchangeEuro = 0.85;

fieldUsd.addEventListener('input', getExchange);

function getExchange() {
    outputConvert.textContent = (fieldUsd.value * exchangeEuro).toFixed(2);
    outputConvert.classList.add('success');
}

// 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
// const fieldMemory = document.getElementById('fieldMemory'),
//     outMemory     = document.querySelector('.output--memory'),
//     outEnding     = document.querySelector('.ending--memory'),
//     amount        = 1024 / 820;

// fieldMemory.addEventListener('input', getQuantity);

// function getQuantity() {

//     const fieldMemoryValue = fieldMemory.value;

//     const quantity = Math.floor(fieldMemoryValue * amount);

//     outMemory.classList.add('success');
//     outMemory.innerText = quantity;

//     outEnding.textContent = ending(quantity, ['', 'а', 'ов']);
//     outEnding.classList.add('success');
// }

function ending(quantity, txt) {
    if (quantity > 100) quantity = quantity % 100;
    if (quantity <= 20 && quantity >= 10) return txt[2];
    if (quantity > 20) quantity = quantity % 10;
    return quantity === 1 ? txt[0] : quantity > 1 && quantity < 5 ? txt[1] : txt[2];
}

const fieldMemory = document.getElementById('fieldMemory'),
      amount    = 1024 / 820,
      outEnding = document.querySelector('.ending--memory'),
      outMemory = document.querySelector('.output--memory');

fieldMemory.oninput = function () {
    const quantity  = Math.floor(fieldMemory.value * amount);

    outMemory.innerText = quantity;
    outMemory.classList.add('success');

    outEnding.textContent = ending(quantity, ['', 'а', 'ов']);
    outEnding.classList.add('success');
}

// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
const fieldSumMoney   = document.getElementById('fieldSumMoney'),
      fieldPriceCandy = document.getElementById('fieldPriceCandy'),
      outAmountCandy  = document.querySelector('.output--amount-candy'),
      outChange       = document.querySelector('.output--short-change'),
      btnCandy        = document.querySelector('.btn--result-candy'),
      outCandyEnding  = document.querySelector('.ending--candy');

const amountCandy = () => {
    const sumMoneyValue  = (+fieldSumMoney.value).toFixed(2),
          priceCandy     = (+fieldPriceCandy.value).toFixed(2),
          resAmountCandy = Math.floor(sumMoneyValue / priceCandy),
          sumCandy       = priceCandy * resAmountCandy,
          shortChange    = sumMoneyValue - sumCandy;

    outAmountCandy.textContent = resAmountCandy;
    outAmountCandy.classList.add('success');

    outCandyEnding.textContent = candyEnding(resAmountCandy, ['ку', 'ки', 'ок']);
    outCandyEnding.classList.add('success');

    outChange.textContent = shortChange.toFixed(2);
    outChange.classList.add('success');
}

function candyEnding(resAmountCandy, text) {
    if (resAmountCandy > 100) resAmountCandy = resAmountCandy % 100;
    if (resAmountCandy <= 20 && resAmountCandy >= 10) return text[2];
    if (resAmountCandy > 20) resAmountCandy = resAmountCandy % 10;
    return resAmountCandy === 1 ? text[0] : resAmountCandy > 1 && resAmountCandy < 5 ? text[1] : text[2];
}

btnCandy.addEventListener('click', amountCandy);


// 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
const fieldNum = document.getElementById('fieldNumThreeDigit'),
      outNum   = document.querySelector('.output--number');

fieldNum.oninput = function() {
    let fieldNumValue = +fieldNum.value;

    console.log(fieldNumValue);
    
    if (fieldNumValue < 100 || fieldNumValue > 999) {
        outNum.textContent = 'Это не трехзначное число';
    } else {
        for (var y = 0; fieldNumValue; fieldNumValue = Math.floor(fieldNumValue / 10)) {
            y *= 10;
            y += fieldNumValue % 10;
        }
        outNum.textContent = y;
        outNum.classList.add('success');
    }
}
