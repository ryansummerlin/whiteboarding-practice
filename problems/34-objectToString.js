// Write a function objectToString(count) that takes in a char count object and returns a string representing the counts of each character.

const objectToStringOld = function(count) {
    let str = '';
    let keys = Object.keys(count);
    keys.forEach(el => {
        for (let i = 0; i < count[el]; i++) {
            str += el;
        }
    });

    console.log(str);
    return str;
}

// As it stands, this function has time complexity O(n^2). You're going to have to loop through all
// the keys in the count object so it's not going to get any better than O(n) but if you were to optimize
// this you'd have to improve the inner loop to O(1).

// After doing a bit of exploring, I think the best way to tackle this is with the string.repeat function.
// If the string.repeat function is O(1), then the time complexity gets cut down to O(n). If not, I still think
// it's going to look cleaner. I'm going to try it out below.

const objectToString = function(count) {
    let str = '';
    let keys = Object.keys(count);
    keys.forEach(el => {
        str += el.repeat(count[el]);
    });

    console.log(str);
    return str;
}


// I think this looks cleaner and if the string.repeat function is actually O(1), then the time complexity gets cut down
// to O(n). I don't think I can optmize any further.



objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'
