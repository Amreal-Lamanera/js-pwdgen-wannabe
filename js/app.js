//ESERCIZIO PER OGGI:
//chiedi nome
//chiedi cognome
//chiedi colore preferito
//scrivi sulla pagina nomecognomecolorepreferito21

const psw = document.getElementById('my_psw');

const name = prompt('Scrivi il tuo nome');
const surName = prompt('Scrivi il tuo cognome');
const favColor = prompt('Qual è il tuo colore preferito?');

psw.innerHTML = 'Password consigliata ' + name + surName + favColor + Math.floor(Math.random() * 100);