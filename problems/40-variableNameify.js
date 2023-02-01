// Write a function variableNameify(words) that takes in an array of words. The function should
// return a string representing the variable name obtained by combining the words and captitalizing
// them in mixCased style.

function variableNameify(words) {
    let changedWords = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        changedWords += mixedCase(words[i]);
    }

    console.log(changedWords);
    return changedWords;
}

// This helper function should be O(1), regardless of word length you just change the first letter and
// add the first index on.

function mixedCase(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

variableNameify(['is', 'prime']) // => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) // => 'maxValue'
