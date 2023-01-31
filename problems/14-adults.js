// Write a function adults(people) that takes in an array of person objects. The function should return
// an array containing the names of those who have an age of 18 or higher.

function adults(people) {
    let names = [];
    people.forEach(el => {
        if (el.age >= 18) {
            names.push(el.name);
        }
    });

    console.log(names);
    return names;
}

// This should be O(n) time and space complexity. You have to loop through the entire array
// and if the age of the person is over 18 push the name to a new array: the for loop makes it
// O(n). I don't think there's a way to optimize this any further.


const ppl = [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
  ];

adults(ppl); // => [ 'John', 'Jane' ]
