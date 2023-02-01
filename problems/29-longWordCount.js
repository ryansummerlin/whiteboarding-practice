// Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.

const longWordCount = function(string) {
    let strArr = string.split(' ');
    let longWords = 0;

    strArr.forEach(el => {
        if (el.length > 7) {
            longWords++;
        }
    });

    console.log(longWords);
    return longWords;
}

// This should be time complexity O(n). You have to loop through all the words in the string
// and check each one for being longer than 7 characters. I don't think this can be optmized any further.


longWordCount("");  // => 0
longWordCount("short words only");  // => 0
longWordCount("one reallylong word");  // => 1
longWordCount("two reallylong words inthisstring");  // => 2
longWordCount("allwordword longwordword wordswordword");  // => 3
longWordCount("seventy schfifty five");  // => 1
