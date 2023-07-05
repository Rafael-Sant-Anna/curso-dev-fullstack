
function tabuada () {
    let valor = parseInt(prompt('Qual Tabuada você deseja?'))

    for (let index = 0; index <= 10; index++) {        
        document.writeln(`${valor} X ${index} = ${valor * index} <br>`)             
    }
}


tabuada ()