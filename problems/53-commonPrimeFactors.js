// Write a function commonPrimeFactors(num1, num2) that takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers.
// A factor is a number that divides another number without resulting in a remainder.

const { isPrime } = require('./05-isPrime');
const { commonFactors } = require('./52-commonFactors');

const commonPrimeFactors = function(num1, num2) {
    let factors = commonFactors(num1, num2);
    let primeFactors = factors.filter(num => isPrime(num));
    console.log(primeFactors);
    return primeFactors;
}

// I think this is an O(n^2) time complexity function because you end up running the O(n) isPrime function on the factors array of length n.
// However, I dont' think you can do much to improve time complexity outside of pulling in the isPrimeCache from previous examples.

commonPrimeFactors(12, 50);  // => [ 2 ]
commonPrimeFactors(6, 24);  // => [ 2, 3 ]
commonPrimeFactors(11,22);  // => [ 11 ]
commonPrimeFactors(45, 60);  // => [ 3, 5 ]
