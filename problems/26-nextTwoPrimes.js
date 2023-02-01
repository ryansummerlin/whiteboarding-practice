// Write a function nextTwoPrimes(num) that takes in a number num and returns the next two prime numbers greater than num.

const { isPrimeCache } = require('./16-firstNPrimes');

function nextTwoPrimes(num) {
    let primes = [];

    while(primes.length < 2) {
        num++;
        if (isPrimeCache(num)) {
            primes.push(num);
        }
    }

    console.log(primes);
    return primes;
}

// Time complexity for this problem is O(n^2). You have to keep trying numbers above n until
// you find the first two prime numbers (time complexity O(n)) and for each iteration of the while
// loop you have to run an isPrime O(n) time complexity operation. Similar to the firstNPrimes function,
// I used the isPrimeCache function instead of isPrime which should improve time complexity by not repeating
// the isPrime calculation for numbers which have already been deemed prime (or not prime).


nextTwoPrimes(2);  // => [ 3, 5 ]
nextTwoPrimes(3);  // => [ 5, 7 ]
nextTwoPrimes(7);  // => [ 11, 13 ]
nextTwoPrimes(8);  // => [ 11, 13 ]
nextTwoPrimes(20);  // => [ 23, 29 ]
nextTwoPrimes(97);  // => [ 101, 103 ]
