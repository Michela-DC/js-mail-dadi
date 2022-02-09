// Chiedi all’utente la sua email, 
// controlla che sia nella lista di chi può accedere - Creo un array in cui inserisco le email autorizzate e salvo in js gli elementi attraverso cui l'utente da l'input
// stampa un messaggio appropriato sull’esito del controllo.

const authorized = ["michela@gmail.com", "ciao@gmail.com", "heiyo@outlook.com", "webdeveloper@gmail.com"];
console.log(authorized);

const userEmailInput = document.getElementById('user-email');
console.log(userEmailInput);

const buttonLogin = document.getElementById('btn-login');
console.log(buttonLogin);

const access = document.getElementById('access');
console.log(access);

const emailSection = document.getElementById('email')
const diceGame = document.getElementById('dadi');
const container = document.querySelector('.container');
const buttonContainer = document.getElementById('btn-container');
const buttonYes = document.getElementById('btn-yes');
const buttonNo = document.getElementById('btn-no');

let login = false;

// // Quando l'utente clicca sul bottone mi salvo dentro una variabile l'email scritta e faccio partire il ciclo
// Creo ciclo for che passa dentro l'array partendo da 0 e arriva alla fine dell'array (per arrivare a fine array uso .length)
    // --> all'interno del for creo un if per vedere se l'email dell'utente è tra quelle autorizzate - uso un valore booleano per tenerne conto

buttonLogin.addEventListener('click', function(){
        const userEmail = userEmailInput.value;
        //prendo il valore che è stato inserito nella casella di input 
        console.log(userEmail);

        for(let i = 0; i < authorized.length; i++){
            console.log(authorized[i]);
        
            if (userEmail === authorized[i]){
                login = true;
            } 
        }
        
        console.log(login);
        
        if (login === true){
            access.innerHTML += ` ACCESS GRANTED! You are a chosen one!`
            access.style.color = '#3DCF5C'
            
            buttonContainer.style.display = 'block';

            // Se sceglie il bottone yes allora si apre la pagina del gioco 
            buttonYes.addEventListener('click', function() {
                emailSection.style.display = 'none';
                diceGame.style.display = 'block';
                }
            )

            buttonNo.addEventListener('click', function() {
                const chooseNo = document.createElement('div');
                chooseNo.innerHTML += ` Did you watch The Matrix? You should!`;
                chooseNo.style.fontSize = '20px'
                chooseNo.style.color = 'white';
                container.append(chooseNo);
                }
            )

        } else {
            access.innerHTML += ` ACCESS DENIED! You are an IMPOSTOR!`;
            access.style.color = 'red';
        }
    }
) 

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer usando Math.floor e Math.random
// Stabilire il vincitore, in base a chi ha il numero più alto.  (e se pari?)

const buttonRed = document.getElementById('btn-red');
console.log(buttonRed);

const buttonBlue = document.getElementById('btn-blue');
console.log(buttonBlue);

const result = document.getElementById('result');

const userNumber = Math.floor( Math.random()* 6 + 1 );
console.log(userNumber);

const computerNumber = Math.floor( Math.random()* 6 + 1 );
console.log(computerNumber);


// Creo le reazione a quando clicco su bottono rosso = parte il gioco

buttonRed.addEventListener('click', function(){
        
        if( userNumber > computerNumber ) {
            result.innerHTML += ` You beat the computer! Your number ${userNumber} > Computer number ${computerNumber} `;
        
        } else if (computerNumber > userNumber) {
            result.innerHTML += ` The computer won! Computer number ${computerNumber} > Your number ${userNumber}`;
        
        } else {
            result.innerHTML += ` It's a tie! Your number ${userNumber} = Computer number ${computerNumber}`;
        }
    }
)

// Creo reazione se clicco bottone blu - Chiede se ha visto Matrix

buttonBlue.addEventListener('click', function(){
    result.style.fontSize = '20px';
    result.innerHTML += ` Did you watch The Matrix? You should!`;
    }
)