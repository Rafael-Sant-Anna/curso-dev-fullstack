
let nome =  prompt('Digite seu nome!')
let idade = parseInt(prompt('Digite sua idade'))

let situacaoIdade=''




if (idade >= 18) {
    situacaoIdade = ' maior'
} else {
    situacaoIdade = ' menor'
}

if (nome.toUpperCase() === 'THOMAS ANDERSON') {
    document.writeln(`Olá seu nome é Thomas Anderson, você é do filme Matrix, você é ${situacaoIdade} de idade!`)
    
}else{
    document.writeln(`Olá ${nome}, você é ${situacaoIdade} de idade!`)
}

