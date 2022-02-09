
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Creo un array in cui inserisco le email autorizzate e salv in js gli elementi attraverso cui l'utente da l'input
const authorized = ["michela@gmail.com", "mdc@gmail.com", "heiyo@outlook.com", "webdeveloper@gmail.com"];
console.log(authorized);

const userEmailInput = document.getElementById('user-email');
console.log(userEmailInput);

const button = document.getElementById('btn-login');
console.log(button);

const access = document.getElementById('access');
console.log(access);

let login = false;

// Quando l'utente clicca sul bottone mi salvo dentro una variabile l'email scritta 
// Creo ciclo for che passa dentro l'array partendo da 0 e arriva alla fine dell'array (per arrivare a fine array uso .length)
    // --> all'interno del for creo un if per vedere se l'email dell'utente è tra quelle autorizzate - uso un valore booleano per tenerne conto

button.addEventListener('click', function(){
        const userEmail = userEmailInput.value;
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
        
        } else {
            access.innerHTML += ` ACCESS DENIED! You are an IMPOSTOR!`
        }
    }
    
)



/*
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi ha il numero più alto.  (e se pari?)

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer usando Math.floor e Math.randon

const userNumber = Math.floor( Math.random()* 6 + 1 );
console.log(userNumber);

const computerNumber = Math.floor( Math.random()* 6 + 1 );
console.log(computerNumber);

// Creo degli if per verificare chi vince o se sono pari

if( userNumber > computerNumber ) {
    console.log("Ha vinto l'utente");

} else if (computerNumber > userNumber) {
    console.log("Ha vinto il comupter");

} else {
    console.log("PARI!!!");
}
*/




