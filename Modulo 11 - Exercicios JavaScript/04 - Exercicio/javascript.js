


function funcao() {
    let nome =  prompt('Digite seu nome!')
    let idade = parseInt(prompt('Digite sua idade'))
    let situacaoIdade='' 
    let mensagem =''  

    if ((nome ==='') || (idade = '')) {

        alert('Campo nome ou idade vazio favor preencher')
        
    } else {
        if (idade >= 18) {
            situacaoIdade = ' maior'
        } else {
            situacaoIdade = ' menor'
        }
    
    
        if ( nome.toUpperCase() === 'THOMAS ANDERSON') {
             mensagem = `<h1> Olá ${nome}, você é ${situacaoIdade} de idade!</h1> <br>
                <h2>Você é personagem do filme The Matrix</h2>
             `
             document.querySelector('#title').innerHTML = mensagem
                    
        }else{
             mensagem = `<h1> Olá ${nome}, você é ${situacaoIdade} de idade!</h1>`
            document.querySelector('#title').innerHTML = mensagem
        }
        
    }

    
}

