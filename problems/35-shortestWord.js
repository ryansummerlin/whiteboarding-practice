// Write a function shortestWord(sentence) that returns the shortest word of a sentence. You can assume that the words of the sentence all have different lengths.

function shortestWord(sentence) {
    let sentenceArr = sentence.split(' ');
    let shortest = sentenceArr[0];
    sentenceArr.forEach(el => {
        if (el.length < shortest.length) {
            shortest = el;
        }
    });

    console.log(shortest);
    return shortest;
}

// This should have time complexity O(n) because of the for loop. I don't think there's any way to
// optimize this further because you need to check the length of each element to find the one with the
// shortest length.

shortestWord('app academy is cool') // => 'is'
shortestWord('programming bootcamp') // => 'bootcamp'
