// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Creo un array in cui inserisco le email autorizzate 
const authorized = ["michela@gmail.com", "ciao@gmail.com", "heiyo@outlook.com", "webdeveloper@gmail.com"];
console.log(authorized);

const userEmailInput = document.getElementById('user-email');
console.log(userEmailInput);
const userEmail = userEmailInput.value;
console.log(userEmail);

const buttonLogin = document.getElementById('btn-login');
console.log(buttonLogin);

const access = document.getElementById('access');
console.log(access);

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
    // basta anche solo scrivere if (find)
        access.innerHTML += ` Accesso autorizzato! Benvenuto!`
        access.style.color = '#3DCF5C'
            
    } else {
        access.innerHTML += ` ACCESSO NEGATO! Spiacente non sei autorizzato!`;
        access.style.color = 'red';
    }
} ) 

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








