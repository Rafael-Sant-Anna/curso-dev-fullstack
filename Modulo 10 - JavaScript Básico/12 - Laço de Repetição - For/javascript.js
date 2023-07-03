let opcoes

for (let ano = 2023; ano >= 1900; ano--) {
    opcoes += `<option>${ano}</option>`
    
}

document.querySelector('#ano').innerHTML = opcoes;




let lista =''
let clientes = ['Rafael', 'Dayanni', 'Adriano', 'Breno', 'Thiago']

for (let index = 0; index < clientes.length; index++) {
    lista += `<li>${clientes[index]}</li>`
    
}

document.querySelector('#lista').innerHTML = lista;


