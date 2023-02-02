// Write a function evenSumArray(array) that takes in an array of numbers and returns a new array where
// each num is replaced with the sum of all even numbers less than or equal to that num.

const evenSumArray = function(array) {
    console.log(array.map(num => evenSum(num)));
    return array.map(num => evenSum(num));
}

const evenSum = function(num) {
    let sum = 0;
    for (let i = 2; i <= num; i += 2) {
        sum += i;
    }

    return sum;
}

evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]
