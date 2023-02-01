// Write a function hipsterfyWord(word) that takes takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.


function hipsterfyWord(word) {
    const vowels = 'aeiouAEOIU';
    let wordArr = word.split('');
    for (let i = wordArr.length - 1; i >= 0; i--) {
        if (vowels.includes(wordArr[i])) {
            wordArr.splice(i, 1);
            // console.log(wordArr.join(''));
            return wordArr.join('');
        }
    }

    // console.log(wordArr.join(''));
    return wordArr.join('');
}


// Time complexity on this should be O(n). I don't think it can be improved much because
// you're going to have to cycle backwards through the word until you find a vowel to remove.


// hipsterfyWord('proper') // => 'propr'
// hipsterfyWord('tonic') // => 'tonc'
// hipsterfyWord('PANTHER') // => 'PANTHR'
// hipsterfyWord('BACKWARDS') // => 'BACKWRDS'


module.exports = { hipsterfyWord };
