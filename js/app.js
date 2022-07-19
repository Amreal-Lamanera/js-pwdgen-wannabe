//ESERCIZIO PER OGGI:
//chiedi nome
//chiedi cognome
//chiedi colore preferito
//scrivi sulla pagina nomecognomecolorepreferito21

const user = {
    name: '',
    surName: '',
    favColor: ''
};

const title = document.getElementById('my_title');

user.name = prompt('Scrivi il tuo nome');
user.surName = prompt('Scrivi il tuo cognome');
user.favColor = prompt('Qual è il tuo colore preferito?');

title.innerHTML = 'Password consigliata ' + user.name + user.surName + user.favColor + Math.floor(Math.random() * 100);