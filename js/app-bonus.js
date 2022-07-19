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

const psw = document.getElementById('my_psw');

try {
    user.name = prompt('Scrivi il tuo nome');
    if (user.name == '') throw "non hai inserito il nome";
    if (user.name == null) throw "hai annullato la procedura.";

    user.surName = prompt('Scrivi il tuo cognome');
    if (user.surName == '') throw "non hai inserito il cognome";
    if (user.surName == null) throw "hai annullato la procedura.";

    user.favColor = prompt('Qual è il tuo colore preferito?');
    if (user.favColor == '') throw "non hai inserito il colore";
    if (user.favColor == null) throw "hai annullato la procedura.";

    psw.innerHTML = 'Password consigliata ' + user.name + user.surName + user.favColor + Math.floor(Math.random() * 100);
}

catch (err) {
    psw.innerHTML = "Non è stato possibile generare una password perché " + err;
}
