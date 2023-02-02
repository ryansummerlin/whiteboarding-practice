// Write a function numsToWords(numString) that takes in a string representing a number. The function should
// return a new string where each digit character is replaced with it's "word" representation. Assume the input
// string only contains numeric characters.

const numberWords = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine'};

function numsToWords(numString) {
    let word = '';
    for (let i = 0; i < numString.length; i++) {
        word += numberWords[numString[i]];
    }

    console.log(word);
    return word;
}


numsToWords('42') // => 'FourTwo'
numsToWords('123') // => 'OneTwoThree'
numsToWords('159598') // => 'OneFiveNineFiveNineEight'
