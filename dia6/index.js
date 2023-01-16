let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];

var adicionaOuRemove = "adicionar";

while(adicionaOuRemove.toLowerCase() == "adicionar" || adicionaOuRemove.toLowerCase() == "remover") {
    adicionaOuRemove = prompt('Deseja adicionar ou remover uma comida na lista de compras? (Não digite para encerrar)')
    
    if (adicionaOuRemove.toLowerCase() == "adicionar") {
        
        comida = prompt('Qual comida você deseja adicionar?');
    
        categoria = prompt('Qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces');
    
        if (categoria.toLowerCase() == "frutas") {
            frutas.push(comida);
        } else if (categoria.toLowerCase() == "laticínios") {
            laticínios.push(comida);
        } else if (categoria.toLowerCase() == "congelados") {
            congelados.push(comida);
        } else if (categoria.toLowerCase() == "doces") {
            doces.push(comida);
        } else {
            alert('Categoria não definida.');
        }
    }

    if (adicionaOuRemove.toLowerCase() == "remover") {
        if (frutas.length === 0 && laticínios.length === 0 && congelados.length === 0 && doces.length === 0) {
            alert('Não existe elementos em nenhuma lista.');
            break;
        }
        var escolhaLista = prompt('De qual lista deseja remover um item?');
        if (escolhaLista == "frutas") {
            var escolha = prompt(`Qual elemento quer remover: ${frutas}`);
            if (!frutas.includes(escolha)) {
                alert('Não foi possível encontrar o item dentro da lista!');
                continue;
            }
            var indexItem = frutas.indexOf(escolha);
            var remocao = frutas.splice(indexItem, 1);
        } else if (escolhaLista == "laticínios") {
            var escolha = prompt(`Qual elemento quer remover: ${laticínios}`);
            if (!laticínios.includes(escolha)) {
                alert('Não foi possível encontrar o item dentro da lista!');
                continue;
            }
            var indexItem = laticínios.indexOf(escolha);
            var remocao = laticínios.splice(indexItem, 1);
        } else if (escolhaLista == "congelados") {
            var escolha = prompt(`Qual elemento quer remover: ${congelados}`);
            if (!congelados.includes(escolha)) {
                alert('Não foi possível encontrar o item dentro da lista!');
                continue;
            }
            var indexItem = congelados.indexOf(escolha);
            var remocao = congelados.splice(indexItem, 1);
        } else if (escolhaLista == "doces") {
            var escolha = prompt(`Qual elemento quer remover: ${doces}`);
            if (!doces.includes(escolha)) {
                alert('Não foi possível encontrar o item dentro da lista!');
                continue;
            }
            var indexItem = doces.indexOf(escolha);
            var remocao = doces.splice(indexItem, 1);
        }

        else {
            alert('Lista não encontrada.');
            break;
        }
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Congelados: ${congelados}\n  Doces: ${doces}`);