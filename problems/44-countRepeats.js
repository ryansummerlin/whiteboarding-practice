// Write a function countRepeats(string) that takes in a string and returns the number of letters that appear more than
// once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat,
// not the number of times they repeat in the string.


const countRepeats = function(string) {
    let letters = '';
    let repeats = '';

    for (let i = 0; i < string.length; i++) {
        if (letters.includes(string[i]) && !repeats.includes(string[i])) {
            repeats += string[i];
        } else {
            letters += string[i];
        }
    }

    console.log(repeats.length);
    return repeats.length;
}

// This should be O(n) time complexity. You have to loop through the entire string in order to count the repeats so I don't think
// I can optimize time complexity any further. I chose to use strings instead of arrays for the letters and repeats variable. In theory
// I think that should end up saving some memory and improving space complexity but it looks sort of clunky and might be easier to read
// as arrays.


countRepeats('calvin'); // => 0
countRepeats('caaaalvin'); // => 1
countRepeats('pops'); // => 1
countRepeats('mississippi'); // => 3
countRepeats('hellobootcampprep'); // => 4
