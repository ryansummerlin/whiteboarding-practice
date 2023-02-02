// Write a function powerSequence(base, length) that takes in two numbers, base and length. The function should return
// an array containing a power sequence with the given length. Assume that the length is at least 1.

// The first number of a power sequence begins with base. The second number of the sequence is the product between the
// first number and the base. The third number of the sequence is the product between the second number and the base...


// This strikes me as a tabulation problem - I'm going to try that right off the bat to improve time complexity.

function powerSequence(base, length) {
    let table = [base];
    for (let i = 1; i < length; i++) {
        table.push(base * table[table.length - 1]);
    }

    console.log(table);
    return table;
}

powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3);  // => [ 8, 64, 512 ]
