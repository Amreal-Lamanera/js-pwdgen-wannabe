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

const title = document.getElementById('my_psw');

user.name = prompt('Scrivi il tuo nome');
while (user.name == '' || user.name == null) {
    user.name = prompt('Scrivi il tuo nome - non puoi proseguire se non lo fai');
}
console.log(user.name);

user.surName = prompt('Scrivi il tuo cognome');
while (user.surName == '' || user.surName == null) {
    user.surName = prompt('Scrivi il tuo cognome - non puoi proseguire se non lo fai');
}
console.log(user.surName);

user.favColor = prompt('Qual è il tuo colore preferito?');
while (user.favColor == '' || user.favColor == null) {
    user.favColor = prompt('Scrivi qual è il tuo colore preferito - non puoi proseguire se non lo fai');
}
console.log(user.favColor);

title.innerHTML = 'Password consigliata ' + user.name + user.surName + user.favColor + Math.floor(Math.random() * 100);