// Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence where words longer
// than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. Feel free to use the
// array below in your solution:
// const vowels = ['a', 'e', 'i', 'o', 'u'];

const abbreviate = function(sentence) {
    let strArr = sentence.split(' ');
    let abbreviated = [];

    strArr.forEach(el => {
        if (el.length > 4) {
            abbreviated.push(removeVowels(el));
        } else {
            abbreviated.push(el);
        }
    });

    console.log(abbreviated.join(' '));
    return abbreviated.join(' ');
}


const removeVowels = function(word) {
    let removed = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
            removed.push(word[i]);
        }
    }

    return removed.join('');
}

// This is going to be O(n^2) time complexity. The remove vowels function is O(n) and you have to run it on
// every word in the sentence in the worst case scenario for O(n^2). Space complexity is also probably O(n^2)
// for the same reasons (creating an array of n length n times). I don't think this can be optimized further.


abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
