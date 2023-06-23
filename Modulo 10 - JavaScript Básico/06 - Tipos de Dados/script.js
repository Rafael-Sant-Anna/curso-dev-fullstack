/* 
    Tipos de Dados
    - string
    - number
    - boolean
    - array
    - object
    - undefined
    - null
*/

// String
let nome = 'Rafael';
console.log(nome);

let sobreNome = 'Sant Anna';
console.log( nome +' '+ sobreNome); //Concatenar nome e sobreNome
console.log(`${nome} ${sobreNome}`); // Concatenar de outra forma

//number
let idade = 36;
console.log(idade);
console.log(idade + 10); //Somando Numeros

//number float
let porcentagem = 10.2;
console.log(porcentagem + '%');

//boolean
let maiorDeIdade = true;
console.log(maiorDeIdade);

let menorDeIdade = false;
console.log(menorDeIdade);

//array
let habilidades = ['HTML', 'CSS', 'JavaScript'];
console.log(habilidades); // Pegando todos os itens
console.log(habilidades.length);// Quantos itens tem dentro do array

// Pegando somente uma opção do array
console.log(habilidades[0]);
console.log(habilidades[1]);
console.log(habilidades[2]);