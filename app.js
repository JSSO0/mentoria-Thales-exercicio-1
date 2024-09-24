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

    if (input.length === 0) {
        return "";
    }
    let words = input.split(" ");
    let allWords = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i] === '') {
            allWords += ' ';
            continue;
        }
        let middleOfWord = words[i].length / 2;
        let parte1 = words[i].substring(0, middleOfWord);
        let parte2 = words[i].substring((words[i].length - middleOfWord));
        let result = `**${parte1}**${parte2}`;
        if (i != (words.length - 1)) {
            result += ` `;
        }
        allWords += result;
    }
    return allWords;
}
module.exports = ConcatStariskInTheWord;
/*

1 - Se não é vazia - ok
2 - ignorar palavras pequenas
Quais testes que eu faria?
- Provar que funciona
- Testar para garantir que não da problema
- Espaços
- Limite de Caracteres
- Ignorar palavras com duas letras apenas

Ver os testes nativos do Node;
Rodar todos os testes, com apenas um comando, como o NPM run build da plataforma, mais simples possível.
*/