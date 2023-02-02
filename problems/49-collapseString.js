// Write a function collapseString(str) that takes in a string as an argument. The function should
// return the string where 'streaks' of consecutive characters are collapsed to a single character.

// Hint: use the keyword continue

function collapseString(str) {
    let collapsed = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            continue;
        }
        collapsed += str[i];
    }

    console.log(collapsed);
    return collapsed;
}

collapseString('apple'); // => 'aple'
collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
collapseString('hello   app academy'); // => 'helo ap academy'
