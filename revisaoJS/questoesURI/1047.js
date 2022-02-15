var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line = lines.shift().split(" ");

let horaInicial = parseInt(line[0]);
let minutoInicial = parseInt(line[1]);

let horaFinal = parseInt(line[2]);
let minutoFinal = parseInt(line[3]);

let totalHoras = horaFinal - horaInicial;
let totalMinutos = minutoFinal - minutoInicial;

if (totalHoras < 0) {
    totalHoras = 24 + (horaFinal - horaInicial);
}

if (totalMinutos < 0) {
    totalMinutos = 60 + (minutoFinal - minutoInicial);
    totalHoras--;
}

if (horaInicial == horaFinal && minutoInicial == minutoFinal){
     console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}else{
     console.log("O JOGO DUROU "+ totalHoras + " HORA(S) E " + totalMinutos + " MINUTO(S)");
}