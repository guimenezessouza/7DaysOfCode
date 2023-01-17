function soma (valor1, valor2) {
    return valor1 + valor2;
}

function subtracao (valor1, valor2) {
    return valor1 - valor2;
}

function multiplicacao (valor1, valor2) {
    return valor1 * valor2;
}

function divisao (valor1, valor2) {
    return valor1 / valor2;
}


var operacao = "soma"

while (operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão") {
    
    var operacao = prompt("Qual operação deseja fazer?\n(Operações disponíveis: soma, subtração, multiplicação, divisão, e sair)");

    switch (operacao) {
        case "soma":
            var valor1 = +prompt("Digite o primeiro valor:");
            var valor2 = +prompt("Digite o segundo valor:");
            alert(+soma(valor1, valor2).toFixed(2));
            break;
        case "subtração":
            var valor1 = +prompt("Digite o primeiro valor:");
            var valor2 = +prompt("Digite o segundo valor:");
            alert(+subtracao(valor1, valor2).toFixed(2));
            break;
        case "multiplicação":
            var valor1 = +prompt("Digite o primeiro valor:");
            var valor2 = +prompt("Digite o segundo valor:");
            alert(+multiplicacao(valor1, valor2).toFixed(2));
            break;
        case "divisão":
            var valor1 = +prompt("Digite o primeiro valor:");
            var valor2 = +prompt("Digite o segundo valor:");
            alert(+divisao(valor1, valor2).toFixed(2));
            break;
        case "sair":
            alert("Até a proxima!");
            break;
        default: 
            alert("Operação não encontrada, tente novamente.");
            break;
    }
}
