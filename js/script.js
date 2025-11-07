// prendo tutti gli elementi

const tempoElem = document.querySelector("h1");
const istruzione = document.querySelector("p");
const confermaBtn = document.getElementById("confermaBtn");
const startBtm = document.getElementById("startBtn");
const risultati = document.querySelector(".risultati");
const imput1= document.getElementById("num1");
const imput2= document.getElementById("num2");
const imput3= document.getElementById("num3");
const imput4= document.getElementById("num4");
const imput5= document.getElementById("num5");

//console.log(tempoElem, istruzione, confermaBtn,startBtn, risultati, 
// imput1, imput2, imput3, imput4, imput5);

//1. Creare l'interfaccia ( anche senza css)----> fatto
//2. Generare i 5 numeri random

let countdown = 30;
let randomNumber = [];



tempoElem.innerHTML = countdown;


function generateRandomNumber() {
    const numeri = [];
    for (let i = 0; i < 5; i++){
    const newNumber = Math.floor(Math.random() * 99) + 1;
    numeri.push(newNumber);
    }
    return numeri;
}


//3. Stampare i 5 numeri in pagina


//4. Far scomparire i 5 numeri dopo 30 secondi e mostrare gli input
//5. Al click sul bottone leggere i numeri inseriti dall'utente
//6. Controllare quanti dei umeri sono stati indovinati
//7. Stampare il risultato del punteggio

