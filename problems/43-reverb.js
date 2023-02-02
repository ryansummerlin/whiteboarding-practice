// Write a function reverb(word) that takes in a word string and returns the word with all characters after the last vowel repeated.

function reverb(word) {
    const vowels = 'aeiou';
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            console.log(word + word.slice(i));
            return word + word.slice(i);
        }
    }

    console.log(word);
    return word;
}

// This is time complexity O(n) because you have to loop all the way through the word searching for the last vowel. I don't think
// this can be optimized any further.


reverb('running');  // => 'runninging'
reverb('wild');  // => 'wildild'
reverb('debugged');  // => 'debuggeded'
reverb('my');  // => 'my'
