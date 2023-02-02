// Write a function vowelShift(sentence) that takes in a sentence string. The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'a'];

// Based on the examples I'm assuming that all of the strings are going to be lowercase



function vowelShift(sentence) {
    let shifted = sentence.split('').map(char => {
        let index = VOWELS.indexOf(char);
        if (index > -1) {
            return VOWELS[index + 1];
        } else {
            return char;
        }
    });

    console.log(shifted.join(''))
    return shifted.join('');
}


vowelShift('bootcamp');  // => 'buutcemp'
vowelShift('hello world');  // => 'hillu wurld'
vowelShift('on the hunt');  // => 'un thi hant'
