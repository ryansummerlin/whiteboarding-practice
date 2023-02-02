// Write a function commonFactors(num1, num2) that returns an array that contains the common factors between both numbers. A factor is a number that divides another number with no remainder.

// I'm going to assume based on the examples that num1 is smaller than num2. If this wasn't the case, I'd create an if statement and a smallestNum variable at the
// beginning to grab the lower of the two numbers.

function commonFactors(num1, num2) {
    let factors = [];
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            factors.push(i);
        }
    }

    // console.log(factors);
    return factors;
}

// This is time complexity O(n) as you have to loop through all possible numbers less than or equal to the smaller number to find common factors.
// I don't think there's any way to optimize this further.

// commonFactors(12, 50);  // => [ 1, 2 ]
// commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
// commonFactors(11, 22);  // => [ 1, 11 ]
// commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]

module.exports = { commonFactors };
