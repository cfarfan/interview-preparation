/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const letters = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!letters.has(s[i])) {
            letters.set(s[i], 0);
        }
        letters.set(s[i], letters.get(s[i]) + 1);
    }
    let hasOddLetter = false;
    let counter = 0;
    [...letters.values()].forEach(val => {
        if (val % 2 === 0) {
            counter += val;
        } else {
            hasOddLetter = true;
            counter += val - 1;
        }
    });
    return hasOddLetter ? counter + 1: counter;
};