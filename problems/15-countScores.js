// Write a function countScores(people) that takes in an array of score objects, people, as its input.
// A score object, people, has two key-value pairs: a name (string) and a score (number). countScores(people)
// should return an object that has key-value pairs where each name is a key and the value is their total score.


const countScores = function(people) {
    let scores = {};

    people.forEach(person => {
        if (scores[person.name]) {
            scores[person.name] += person.score;
        } else {
            scores[person.name] = person.score;
        }
    });

    console.log(scores);
    return scores;
}

// This should be time complexity O(n). You have to loop through the entire array of
// scores and on each iteration perform an operation according to whether or not they
// already exist in scores. I don't think this can be optimized any further


// Example 1:
const ppl = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score : 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
  ];
  countScores(ppl); // => { Anthony: 2, Fred: 10, Winnie: 12 }

  // Example 2
  const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
  ];

  countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 }
