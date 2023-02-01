// Write a function greatestCommonFactor(num1, num2) that returns the largest number that is divides both num1 and num2.

// I'm assuming, based on the examples that the smaller number is listed first, and the larger number listed after. If that
// was not the case, I'd add a quick if statement to set my initial factor to the smaller number.

function greatestCommonFactor(num1, num2) {
    let factor = num1;
    while (num1 >= 1) {
        if (num1 % factor === 0 && num2 % factor === 0) {
            console.log(factor);
            return factor;
        }
        factor--;
    }
}

// This one is time complexity O(n) because of the while loop. You have to cycle from the smaller
// number down to 1 in the worst case scenario, so I don't think you can really optimize this any further.

greatestCommonFactor(15, 25) // => 5
greatestCommonFactor(16, 24) // => 8
greatestCommonFactor(7, 11) // => 1
