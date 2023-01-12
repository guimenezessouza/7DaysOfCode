function pegaNumero() {
    return Math.floor(Math.random() * 11);
}

const numeroCerto = pegaNumero();
console.log(numeroCerto);

for (let i = 0; i < 3; i++) {
    var chute = prompt(`Qual valor eu pensei? Caso erre, terá mais ${2 - i} tentativa(s)`);
    if (chute == numeroCerto) {
        alert('Parabéns!');
        break;
    }
    else {
        alert('Número errado! Tente novamente, se puder.');
    }
}

alert(`O número certo era ${numeroCerto}.`);
