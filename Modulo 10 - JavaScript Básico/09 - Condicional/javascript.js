/*
    Condicional     
*/

let idade = 14

if(idade >=18){
    document.write('Ok, você é maior de idade');
} else if (idade === 15){
    document.write('Você tem 15 anos');
}
else {
    document.write('você não pode acessar!');
}

let nome = prompt('Digite seu nome');
if (nome === 'Rafael'|| nome ==='rafael') {
    document.write(`Olá ${nome} você é o administrador`);
} else {
    document.write(`Olá ${nome} você Não é o administrador`);
}