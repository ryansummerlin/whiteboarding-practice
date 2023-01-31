// Write a function arrayDiff(arr1, arr2) that takes in two arrays. The function should
// return a new array, containing the elements of arr1 that are not also in arr2.

// Note: Assume both arrays have unique elements.


function arrayDiff(arr1, arr2) {
    let diff = [];
    arr1.forEach(el => {
        if (!arr2.includes(el)) {
            diff.push(el);
        }
    });

    console.log(diff);
    return diff;
}

// At first glance this seems like it should be O(n) because you only see one for loop but I suspect this actually
// ends up being O(n^2) because array.includes is an O(n) complexity function. With that being said, I don't really see a
// better way to optimize it. I think you still have to search through the entirety of arr2 for each element of arr1.

const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
arrayDiff(array1, array2)  // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']
