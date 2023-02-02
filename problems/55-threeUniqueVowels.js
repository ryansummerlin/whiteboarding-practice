// Write a function threeUniqueVowels(string) that takes in a string and returns true if the string contains at least three different vowels.

function threeUniqueVowels(string) {
    let vowels = 'aeiou';
    let usedVowels = '';
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i]) && !usedVowels.includes(string[i])) {
            usedVowels += string[i];
        }
    }

    console.log(usedVowels.length >= 3);
    return usedVowels.length >= 3;
}

threeUniqueVowels('delicious');  // => true
threeUniqueVowels('the bootcamp');  // => true
threeUniqueVowels('bootcamp');  // => false
threeUniqueVowels('dog');  // => false
threeUniqueVowels('go home');  // => false
