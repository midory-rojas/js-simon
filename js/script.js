// FUNZIONI
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @param {*} min
 * @param {*} max
 * @param {*} quantity
 * return: array
 */
function generateUniqueNumbers(min, max, quantity) {
    const result = [];
    for (let i = 0; result.length < quantity; i++) {
        const random = getRndInteger(min, max);
        if (!result.includes(random)) {
            result.push(random);
        }
    }
    return result;
}

// Prelevare tutti gli elementi del DOM
const startBtn = document.getElementById("start-btn");
const numbersElem = document.getElementById("numbers");
const timerElem = document.getElementById("timer");
const form = document.getElementById("numbers-form");
const inputs = document.querySelectorAll("input");
const resultElem = document.getElementById("result");

// Dati - stato globale
let generatedNumbers = [];
let userNumbers = [];
const min = 10;
const max = 50;
const totalNumbers = 5;
const time = 10000;
let timerId;

// Il Gioco
startBtn.addEventListener("click", function () {
    form.reset();
    form.classList.add("d-none");
    resultElem.classList.add("d-none");

    generatedNumbers = generateUniqueNumbers(min, max, totalNumbers);
    console.log(generatedNumbers);

    numbersElem.innerHTML = generatedNumbers;
    numbersElem.classList.remove("d-none");
    setTimeout(function () {
        numbersElem.classList.add("d-none");
        form.classList.remove("d-none");
    }, time);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    userNumbers = [];

    // Raccolta di numeri di utente
    for (let i = 0; i < inputs.length; i++) {
        const curNumber = parseInt(inputs[i].value);
        if (!userNumbers.includes(curNumber)) {
            userNumbers.push(curNumber);
        }
    }
    console.log(userNumbers);

    // Controllo di numeri corretti
    const correctNumbers = [];
    for (let i = 0; i < userNumbers.length; i++) {
        const curNumber = userNumbers[i];
        if (generatedNumbers.includes(curNumber)) {
            correctNumbers.push(curNumber);
        }
    }

    resultElem.innerHTML = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers}`;
    resultElem.classList.remove("d-none");
});


//Creare l'interfaccia ( anche senza css)----> fatto
// Al click sul bottone
// 1. Generare 5 numeri random comprensi tra 10 e 100, senza ripetizione
// 2. Stampare i numeri in pagina
// 3. Fare partire il timer di 30 secondi (stampare il coundown in pagina)
// 4. Quando il timer scade 
//.       - nascondendere tutti i numeri
//.       - mostrare gli imput
// Quandol'utente clicca sul bottone controlla
//        - raccongliere tutti i numeri dell'utente
//.       - controllare quale sono i numeri corretti
//.       - stampare il risultato
//



