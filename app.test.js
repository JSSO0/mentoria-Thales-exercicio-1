const assert = require('assert');
const ConcatStariskInTheWord = require('./app.js');
class ConcatStariskInTheWordTests {

    static runAllTests() {
        console.log("Running all tests...");
        try {
            this.testBasicFunctionality();
            this.testEmptyOrNullInput();
            this.testExtraSpaces();
            this.testLongWord();
            this.testIgnoreShortWords();
            console.log("All tests completed successfully.");
            process.exit(0);
        } catch (error) {
            console.error("Tests failed with error: ", error);
            process.exit(1);
        }
    }

    static testBasicFunctionality() {
        const input = "hello world";
        const expectedOutput = "**he**llo **wo**rld";
        const result = ConcatStariskInTheWord(input);
        console.assert(result === expectedOutput, `Basic functionality test failed. Expected "${expectedOutput}", but got "${result}"`);
    }

    static testEmptyOrNullInput() {
        let input = "";
        let expectedOutput = "";
        let result = ConcatStariskInTheWord(input);
        console.assert(result === expectedOutput, `Empty input test failed. Expected "${expectedOutput}", but got "${result}"`);

        input = null;
        result = ConcatStariskInTheWord(input || "");
        console.assert(result === "", `Null input test failed. Expected empty string, but got "${result}"`);
    }

    static testExtraSpaces() {
        const input = "hello   world";
        const expectedOutput = "**he**llo   **wo**rld";
        const result = ConcatStariskInTheWord(input);
        console.assert(result === expectedOutput, `Extra spaces test failed. Expected "${expectedOutput}", but got "${result}"`);
    }
    
    static testLongWord() {
        const input = "supercalifragilisticexpialidocious";
        const middle = Math.floor(input.length / 2);
        const expectedOutput = `**${input.slice(0, middle)}**${input.slice(middle)}`;
        const result = ConcatStariskInTheWord(input);
        console.assert(result === expectedOutput, `Long word test failed. Expected "${expectedOutput}", but got "${result}"`);
    }
    
    static testIgnoreShortWords() {
        const input = "a an is go";
        const expectedOutput = "a **a**n **i**s **g**o";
        const result = ConcatStariskInTheWord(input);
        console.assert(result === expectedOutput, `Short words test failed. Expected "${expectedOutput}", but got "${result}"`);
    }
    
}


ConcatStariskInTheWordTests.runAllTests();
/*
Assertion failed: Empty input test failed. Expected "", but got "**** "
Assertion failed: Null input test failed. Expected empty string, but got "**** "
Assertion failed: Extra spaces test failed. Expected "**he**llo    **wo**rld ", but got "**he**llo **** **** **wo**rld "
Assertion failed: Short words test failed. Expected "a an **i**s **g**o ", but got "****a **a**n **i**s **g**o "
*/