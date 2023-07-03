let clientes = [
    {
        nome: 'Rafael',
        idade: 35,
        linguagem:['JS','Python','PHP']
    },
    {
        nome: 'Adriano',
        idade: 26,
        linguagem:['C#','C++','C']
    },
    {
        nome: 'Dayanni',
        idade: 26,
        linguagem:['go','Python','R']
    }
]

let listClient=''

for (const cliente of clientes) {
    let listLinguage =''

    for (const liguage of cliente.linguagem) {
        listLinguage += `<li>${liguage}</li>`        
    }
    listClient += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>liguagens:</b><br>
            <ul>
                ${listLinguage}
            </ul>
        </li>
    `
    
}

document.querySelector('#listaCliente').innerHTML = listClient