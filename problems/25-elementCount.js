// Write a function elementCount(array) that returns a object. Each key corresponds to an element in the
// array and the value corresponds to how many times that element appears in the array.

function elementCount(array) {
    let count = {};
    array.forEach(el => {
        if (count[el] === undefined) {
            count[el] = 1;
        } else {
            count[el]++;
        }
    });

    console.log(count);
    return count;
}




elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
