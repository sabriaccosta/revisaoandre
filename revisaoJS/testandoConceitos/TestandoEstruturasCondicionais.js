/*if simples

if (<condição>) {
	<bloco>
}</bloco>


let media = 80;

if (media>= 70) {
	console.log("Aluno aprovado!");
}*/

let entrada = require('fs').readFileSync('./revisãoJS/testandoConceitos/entrada', 'utf8');
let linhas = entrada.split('\n');

let media = parseInt(linhas.shift());

if (media>= 70) {
	console.log("Aluno aprovado!");
}