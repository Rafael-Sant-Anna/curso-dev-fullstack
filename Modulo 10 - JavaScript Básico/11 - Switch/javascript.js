let diaDaSemana = new Date().getDay();

let nomeDoDia = '';

switch (diaDaSemana) {
    case 0:
        nomeDoDia = 'Domingo'
        break;
    case 1:
        nomeDoDia = 'Segunda'
        break;
    case 2:
        nomeDoDia = 'Terça'
        break;

    case 3:
        nomeDoDia = 'Quarta'
        break;
    case 4:
        nomeDoDia = 'Quinta'
        break;
    case 5:
        nomeDoDia = 'Sexta'
        break;
    case 6:
        nomeDoDia = 'Sabado'
        break;

    default:
        break;
}

document.writeln(`Hoje é: ${nomeDoDia}`);