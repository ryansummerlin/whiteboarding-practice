// Write a function valueCounter(obj, val) that takes in an object and a value, the function
// should return the number of times val repeats as a value in obj.


const valueCounterOld = function(obj, val) {
    let vals = Object.values(obj);
    let count = 0;

    vals.forEach(el => {
        if (el === val) {
            count++;
        }
    });

    console.log(count);
    return count;
}

// This should be time complexity O(n). Printing the vals variable is an O(n) task and then looping
// through the entire array is another O(n) task. I don't think I can optimize time complexity any further
// but I can probably improve the space complexity from O(n) to O(1) by getting rid of the vals variable. I
// will go ahead and refactor the function below

const valueCounter = function(obj, val) {
    let count = 0;

    Object.values(obj).forEach(el => {
        if (el === val) {
            count++;
        }
    });

    console.log(count);
    return count;
}

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
valueCounter(obj1, 'Anne')  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
valueCounter(obj2, 88)  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
valueCounter(pairs, 'Roman')  // => 2
