const area = prompt('Quer seguir para a área de front-end ou back-end?');

if (area.toLowerCase() == "front-end" || area.toLowerCase() == "front end") {
    var aprender = prompt('Quer aprender React ou aprender Vue?');
}
else if (area.toLowerCase() == "back-end" || area.toLowerCase() == "back end") {
    var aprender = prompt('Quer aprender C# ou aprender Java?');
}
else {
    alert('Resposta não foi front end ou back end, recomece.');
}

const seguir = prompt(`Prefere seguir se especializando em ${area}, ${aprender} ou seguir se desenvolvendo para se tornar Fullstack?`);

var pergunta = "ok";
var lista = [];

while (pergunta.toLowerCase() === "ok") {
    var resposta = prompt('Qual outra tecnologia você gostaria de se especializar ou conhecer?');
    lista.push(resposta);
    var pergunta = prompt('Tem mais alguma tecnologia que você gostaria de aprender? (responda com ok se sim)');
    alert(`A linguagem ${resposta} é bem interessante!`)
}

alert(lista);