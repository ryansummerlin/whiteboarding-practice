// Write a function moreDotLessDash(str) that takes in a string and returns the true if the string contains more dots ('.') than dashes ('-'), false otherwise.

const moreDotLessDash = function(string) {
    let dot = 0;
    let dash = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '.') {
            dot++;
        } else if (string[i] === '-') {
            dash++;
        }
    }

    console.log(dot > dash);
    return dot > dash;
}

// This is time complexity O(n) as you loop through each character in the string. I don't think there's a way to optimize this
// any further.


moreDotLessDash('2-D arrays are fun. I think.');  // => true
moreDotLessDash('.-.-.');  // => true
moreDotLessDash('.-');  // => false
moreDotLessDash('..--');  // => false
