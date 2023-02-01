// Write a function hipsterfy(sentence) that takes takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

const { hipsterfyWord } = require('./32-hipsterfyWord');

function hipsterfy(sentence) {
    let sentenceArr = sentence.split(' ');
    let hipsterfied = sentenceArr.map(el => hipsterfyWord(el));

    console.log(hipsterfied.join(' '));
    return hipsterfied.join(' ');
}




hipsterfy("proper");  // => "propr"
hipsterfy("proper tonic panther");  // => "propr tonc panthr"
hipsterfy("towel flicker banana");  // => "towl flickr banan"
hipsterfy("runner anaconda");  // => "runnr anacond"
hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"
