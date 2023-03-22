/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let base = x;
    let reverse = 0;
    while (base !== 0) {
        reverse = reverse * 10 + base % 10;
        base = parseInt(base / 10);
    }
    return reverse === x;
};
