// Write a function factorial(n), that returns the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.


function factorial(n) {
    let total = 1;
    for (let i = n; i > 0; i--) {
        total *= i;
    }

    console.log(total);
    return total;
}


// This ends up being time complexity O(n) where you loop through all the numbers between 1 and n and
// keep a running total of the factorial. I don't think you can do much here to improve time complexity.
// You could maybe keep a cached factorial method similar to the isPrime function and I thought about using
// tabulation but you're not recalculating factorial values at every step of the function like you would be doing
// with fibonacci sequence. I'm going to leave it as is for now.



factorial(1);  // => 1
factorial(4);  // => 24
factorial(5);  // => 120
factorial(10);  // => 3628800
