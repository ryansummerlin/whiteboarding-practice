// Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

const oddWordsOut = function(sentence) {
    let oddsOut = sentence.split(' ').filter(word => word.length % 2 === 0);
    console.log(oddsOut.join(' '));
    return oddsOut.join(' ');
}

// The filter function makes this time complexity O(n). I don't think this can be optimized any further. I tried to cut down on space complexity by
// eliminating a sentenceArr variable and dot chaining the split function in line with the filter.


oddWordsOut('go to the store and buy milk');  // => 'go to milk'
oddWordsOut('what is the answer');  // => 'what is answer'
