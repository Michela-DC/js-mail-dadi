// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Creo un array in cui inserisco le email autorizzate 
const authorized = ["michela@gmail.com", "mdc@gmail.com", "heiyo@outlook.com", "webdeveloper@gmail.com"];
console.log(authorized);

const userEmail = prompt('Ciao! Inserisci qui la tua email.');
console.log(userEmail);

let login = false;

// Creo ciclo for che passa dentro l'array partendo da 0 e arriva alla fine dell'array (per arrivare a fine array uso .length)
    // --> all'interno del for creo un if per vedere se l'email dell'utente è tra quelle autorizzate - uso un valore booleano per tenerne conto

for(let i = 0; i < authorized.length; i++){
    console.log(authorized[i]);

    if (userEmail === authorized[i]){
        login = true;
    } 
}

console.log(login);

if (login === true){
    alert("Accesso autorizzato! Benvenuto!");

} else {
    alert ("ACCESSO NEGATO! Spiacente non sei autorizzato!")
}






// Creo ciclo for che passa dentro l'array 
//     --> all'interno del for creo uf if per vedere se l'email dell'utente è tra quelle autorizzate