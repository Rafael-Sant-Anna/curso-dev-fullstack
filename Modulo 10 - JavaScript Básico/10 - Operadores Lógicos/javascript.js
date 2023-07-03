/*
    Operadores Lógicos

*/

let inputPrimeiraNota = prompt('Digite sua Primeira Nota');
let inputSegundaNota = prompt('Digite sua Segunda Nota');

let primeiraNota = parseInt(inputPrimeiraNota);
let segundaNota = parseInt(inputSegundaNota);

let somaDasNotas = primeiraNota + segundaNota  ;
let mediaDasNotas = somaDasNotas/2;
let mediaMinima = 7;

document.writeln(`A soma das notas é ${somaDasNotas}`);
document.writeln(`A média das notas é ${mediaDasNotas}`);

if (mediaDasNotas >= mediaMinima) {
    document.writeln('Ok, passou de ano');
}else if (mediaDasNotas < mediaMinima) {

}

if (mediaDasNotas >= mediaMinima && mediaDasNotas === 10) {
    document.writeln('Você foi muito bem, continue assim!');
}else if(mediaDasNotas >= mediaMinima && mediaDasNotas === 9) {
    document.writeln('Você madou bem!');
}
