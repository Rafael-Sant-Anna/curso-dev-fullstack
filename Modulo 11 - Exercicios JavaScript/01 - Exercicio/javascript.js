
let nome = prompt('Digite seu nome!')
let idade = parseInt(prompt('Digite sua idade'))

let situacaoIdade=''

if (idade >= 18) {
    situacaoIdade = ' maior'
} else {
    situacaoIdade = ' menor'
}

document.writeln(`Olá ${nome}, você é ${situacaoIdade} de idade!`)