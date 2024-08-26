const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite algo: ', (input) => {
    let result = ConcatStariskInTheWord(input);
    console.log(result);
    rl.close();
});

function ConcatStariskInTheWord(input) {
    let words = input.split(" ");
    let allWords = "";
    for (let i = 0; i < words.length; i++) {
        let totalOfStrings = words[i].length;
        let middleOfWord = words[i].length / 2;
        let parte1 = words[i].substring(0, middleOfWord);
        let parte2 = words[i].substring((totalOfStrings - middleOfWord));
        let result = `**${parte1}**${parte2}`;
        if (i < words.length) { result += ` `; }
        allWords += result;
    }
    return allWords;
}

/*
Quais testes que eu faria?
- Provar que funciona
- Testar para garantir que não da problema
- Espaços
- Limite de Caracteres
- Ignorar palavras com duas letras apenas

Ver os testes nativos do Node;
Rodar todos os testes, com apenas um comando, como o NPM run build da plataforma, mais simples possível.
*/