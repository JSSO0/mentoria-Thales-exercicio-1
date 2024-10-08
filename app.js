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
    
    let words = input.split(/(\s+)/);
    let allWords = "";

    for (let i = 0; i < words.length; i++) {
        const trimmedWord = words[i].trim();
        
        if (/\s+/.test(words[i])) {
            allWords += words[i];
            continue;
        }

        if (trimmedWord.length <= 1) {
            allWords += trimmedWord;
        } else {
            let middleOfWord = Math.floor(trimmedWord.length / 2);
            let parte1 = trimmedWord.substring(0, middleOfWord);
            let parte2 = trimmedWord.substring(middleOfWord);
            let result = `**${parte1}**${parte2}`;
            allWords += result;
        }
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