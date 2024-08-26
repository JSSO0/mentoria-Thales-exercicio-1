const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite algo: ', (resposta) => {
    let Word = resposta.split(" ");
    let AllWords = "";

    for (let i = 0; i < Word.length; i++) {
        TotalOfStrings = Word[i].length;
        MiddleOfWord = Word[i].length / 2;
        let parte1 = Word[i].substring(0, MiddleOfWord);
        let parte2 = Word[i].substring((TotalOfStrings - MiddleOfWord));
        let result = `**${parte1}**${parte2} `;
        AllWords += result;
    }
    console.log(AllWords);
    rl.close();
});
