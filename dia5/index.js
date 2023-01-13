let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];
let outros = [];

var adiciona = "sim"

while(adiciona.toLowerCase() == "sim") {
    adiciona = prompt('Deseja adicionar uma comida na lista de compras?')
    if (adiciona.toLowerCase() != "sim") {
        break;
    }
    
    comida = prompt('Qual comida você deseja adicionar?')
    
    categoria = prompt('Qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces')

    if (categoria.toLowerCase() == "frutas") {
        frutas.push(comida);
    } else if (categoria.toLowerCase() == "laticínios") {
        laticínios.push(comida);
    } else if (categoria.toLowerCase() == "congelados") {
        congelados.push(comida);
    } else if (categoria.toLowerCase() == "doces") {
        doces.push(comida);
    } else {
        outros.push(comida);
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Congelados: ${congelados}\n  Doces: ${doces}\n  Outros: ${outros}`);