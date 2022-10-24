// PRIMA PARTE
var dataAttuale = new Date();
const mesi = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];

document.getElementById('titolo').innerHTML += `${dataAttuale.getDate()}/${mesi[dataAttuale.getMonth()]}/${dataAttuale.getFullYear()}`;
document.getElementById('oraLegale').innerHTML = dataAttuale;
document.getElementById('giorno').innerHTML += dataAttuale.getDate();
document.getElementById('mese').innerHTML += mesi[dataAttuale.getMonth()];
document.getElementById('oggi').innerHTML += dataAttuale.toLocaleDateString('it-IT');

// SECONDA PARTE
var btn = document.getElementById('saluta');
var ora = Number(dataAttuale.getHours());
var orario = `${dataAttuale.getHours()}:${dataAttuale.getMinutes()}`;
btn.addEventListener('click', function(){
    if (ora < 14) {
        document.getElementById('saluto').innerHTML = `😴 Buongiorno sono le ${orario}`;
    } else if (ora < 18) {
        document.getElementById('saluto').innerHTML = `😊 Buon Pomerigio sono le ${orario}`;
    } else {
        document.getElementById('saluto').innerHTML = `😄 Buona Sera sono le ${orario}`;
    }
})