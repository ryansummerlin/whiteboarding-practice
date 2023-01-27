// Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

function factorArray(array, number) {
    let factors = [];

    array.forEach(el => {
        if (number % el === 0) {
            factors.push(el);
        }
    });

    return factors;
}

// this should be both time and space complexity O(n). I can try to refactor the function to
// modify the array in place but I don't think that reduces time complexity? It seems like O(2n)
// which would simplify down to O(n) but I'll go ahead and try it anyways

function factorArray2(array, number) {
    let i = 0;

    while (i < array.length) {
        if (number % array[i] !== 0) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
    return array;
}

// I personally think the first solution looks a little more elegant but the second function modifies the array
// in place so you don't have to use more memory to create a new array of factors.

console.log(factorArray2([2,3,4,5,6],20)); // => [2,4,5]
console.log(factorArray2([2,3,4,5,6],35)); // => [5]
console.log(factorArray2([10,15,20,25],5)); // => []
