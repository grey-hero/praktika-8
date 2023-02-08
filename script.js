




//let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
//let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
//alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let minValue = 0;
let maxValue = 100;

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
const minValInput = document.getElementById('minVal');
minValInput.value = minValue;
const maxValInput = document.getElementById('maxVal');
maxValInput.value = maxValue;

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

// Первеод числа в текст
function intToText(number) {
    text = "";
    if(number == 0){
        text = "ноль";
    }
    if(number < 0){
        text = "минус";
    }
    number = Math.abs(number);
    if(number > 99){
        sto = Math.floor(number / 100);
        switch(sto){
            case 1:
                text = text + " сто";
                break;
            case 2:
                text = text + " двести";
                break;
            case 3:
                text = text + " триста";
                break;
            case 4:
                text = text + " четыреста";
                break;
            case 5:
                text = text + " пятьсот";
                break;
            case 6:
                text = text + " шестьсот";
                break;
            case 7:
                text = text + " семьсот";
                break;
            case 8:
                text = text + " восемьсот";
                break;
            case 9:
                text = text + " девятьсот";
                break;       
        }
    }
    ten = Math.abs(number) % 100;
    if(ten > 19 || ten < 10){
        bigTen = Math.floor(ten / 10);
        smallTen = Math.abs(ten) % 10;
        switch(bigTen){
            case 2:
                text = text + " двадцать";
                break;
            case 3:
                text = text + " тридцать";
                break;
            case 4:
                text = text + " сорок";
                break;
            case 5:
                text = text + " пятьдесят";
                break;
            case 6:
                text = text + " шестьдесят";
                break;
            case 7:
                text = text + " семьдесят";
                break;
            case 8:
                text = text + " восемьдесят";
                break;
            case 9:
                text = text + " девяносто";
                break;
        }
        switch(smallTen){
            case 1:
                text = text + " один";
                break;
            case 2:
                text = text + " два";
                break;
            case 3:
                text = text + " три";
                break;
            case 4:
                text = text + " четыре";
                break;
            case 5:
                text = text + " пять";
                break;
            case 6:
                text = text + " шесть";
                break;
            case 7:
                text = text + " семь";
                break;
            case 8:
                text = text + " восемь";
                break;
            case 9:
                text = text + " девять";
                break;
        }
    }else{
        switch(ten){
            case 11:
                text = text + " одиннадцать";
                break;
            case 12:
                text = text + " двенадцать";
                break;
            case 13:
                text = text + " тринадцать";
                break;
            case 14:
                text = text + " четырнадцать";
                break;
            case 15:
                text = text + " пятнадцать";
                break;
            case 16:
                text = text + " шестнадцать";
                break;
            case 17:
                text = text + " семнадцать";
                break;
            case 18:
                text = text + " восемнадцать";
                break;
            case 19:
                text = text + " девятнадцать";
                break;
        }
    }
    if(text[0] == " "){
        text = text.slice(1); 
    }
    if(text.length < 20){
        return text;
    }else{  
        return number;
    }
}


function culc() {
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    
    qwestRan = Math.round(Math.random() * 2);
    returnNumber = intToText(answerNumber);
    switch (qwestRan) {
        case 0:
            answerField.innerText = `Вы загадали число ${returnNumber }?`;
            break;
        case 1:
            answerField.innerText = `Да это легко! Ты загадал ${returnNumber }?`;
            break;
        case 2:
            answerField.innerText = `Наверное, это число ${returnNumber }?`;
            break;
    }
}

document.getElementById('btnStart').addEventListener('click', function () {
    gameRun = true;
    var game_go = document.querySelectorAll('.game_go');
    for (var i = 0; i < game_go.length; i++) {
        game_go[i].classList.remove('d-none');
    }
    var game_go = document.querySelectorAll('.game_start');
    for (var i = 0; i < game_go.length; i++) {
        game_go[i].classList.add('d-none');
    }

    if(maxValInput.value == "" || Number(maxValInput.value) < -999 || Number(maxValInput.value) > 999){

    }
    maxValue = (maxValInput.value == "" || Number(maxValInput.value) < -999 || Number(maxValInput.value) > 999) ? 999 : Number(maxValInput.value);
    minValue = (minValInput.value == "" || Number(minValInput.value) < -999 || Number(minValInput.value) > 999) ? -999 : Number(minValInput.value);
    culc();
})

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    var game_go = document.querySelectorAll('.game_start');
    for (var i = 0; i < game_go.length; i++) {
        game_go[i].classList.remove('d-none');
    }
    var game_go = document.querySelectorAll('.game_go');
    for (var i = 0; i < game_go.length; i++) {
        game_go[i].classList.add('d-none');
    }
    document.getElementById('gamebox').classList.remove('win_class');
    orderNumberField.innerText = orderNumber = 1;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            culc();
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            culc();
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        
        winRan = Math.round(Math.random() * 2);
        switch (winRan) {
            case 0:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
                break;
            case 1:
                answerField.innerText = `Это победа \n\u{1F60E}`
                break;
            case 2:
                answerField.innerText = `У меня получилось \n\u{1F60E}`
                break;
        }
        document.getElementById('gamebox').classList.add('win_class');
        gameRun = false;
    }
})

