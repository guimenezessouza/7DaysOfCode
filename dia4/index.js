function pegaNumero() {
    return Math.floor(Math.random() * 11);
}

const numeroCerto = pegaNumero();
var acertou = false;

for (let i = 0; i < 3; i++) {
    var chute = prompt(`Qual valor eu pensei? Caso erre, terá mais ${2 - i} tentativa(s)`);
    if (chute == numeroCerto) {
        alert(`Parabéns! O número certo era ${numeroCerto}.`);
        acertou = true;
        break;
    }
    else {
        alert('Número errado! Tente novamente, se puder.');
    }
}

if (!acertou) {
    alert(`Infelizmente você não acertou. O número certo era ${numeroCerto}.`);
}

