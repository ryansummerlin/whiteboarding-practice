// Using the isPrime function you made, write a function firstNPrimes(n) that returns an array of the first n prime numbers.

const { isPrime } = require('./05-isPrime');

const firstNPrimes = function(n) {
    let count = 2;
    let primes = [];
    while (primes.length < n) {
        if (isPrimeCache(count)) {
            primes.push(count);
        }
        count++;
    }

    console.log(primes);
    return primes;
}

// time complexity on this is O(n^2) - you have to perform the O(n) isPrime operation n times for O(n^2).
// I think this might be a situation where you can improve performance with caching. I'm going to try it out
// below.

const cache = {};

function isPrimeCache(n) {
    if (cache[n] === undefined) {
        cache[n] = isPrime(n);
    }

    return cache[n];
}

// time complexity on the first run through with the cache is going to be O(n^2) like it was before, but on subsequent
// runs we can cut down the time complexity with the cache function. The isPrime cache should already have stored isPrime on
// all the numbers from previous runs, so instead of an O(n) function, isPrime becomes O(1) for any values calculated prior.
// This cuts down time complexity to O(n) on any subsequent runs with n less than what has been calulated previously. I don't
// think this can be optimized any further.

firstNPrimes(0);  // => []
firstNPrimes(1);  // => [2]
firstNPrimes(4);  // => [2, 3, 5, 7]
