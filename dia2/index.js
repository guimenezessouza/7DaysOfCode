const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const ling = prompt('Qual linguagem de programação você está estudando?');
const msg1 = `Óla ${nome}, você tem ${idade} anos e já está aprendendo ${ling}!`;

alert(msg1);

const prg = `Você gosta de estudar ${ling}? Responda com o número 1 para SIM ou 2 para NÃO.`;
const pergunta = prompt(prg);

if (pergunta == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
}
if (pergunta == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
}
