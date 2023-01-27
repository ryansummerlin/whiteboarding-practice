// Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

// The key to this one is using the string split and array join functions while joining on the hyphen.


function reverseHyphenString(string) {
    strArr = string.split("-");
    strArr.reverse();

    return strArr.join("-");
}

// Time and space complexity should be O(n) for both. Array reverse is O(n) and you need to
// store the string into an array making it O(n) space complexity. I don't think you can optimize any
// further.

console.log(reverseHyphenString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"
