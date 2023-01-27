// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

// First thoughts are how to define prime number. It can't be divisible by anything but itself and 1. Seems like a good candidate
// for the modulo % operator.

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// This should be O(n) time complexity and O(1) space complexity. I think you could try trade some space
// complexity for time complexity to create a cache outside of the function to store previously computed keys
// but I'm not sure that's necessary given a O(n) time complexity.

console.log(isPrime(2)); // true
console.log(isPrime(10)); // false
console.log(isPrime(11));// true
console.log(isPrime(9)); // false;
console.log(isPrime(2017)); // true
