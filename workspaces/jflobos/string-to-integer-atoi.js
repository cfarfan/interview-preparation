/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const maxValue = 2**31 - 1;
    const minValue = -1 * (2**31);
    let stringValue = '';
    let digitRegex = /[0-9]/;
    s = s.trim();
    let begin = 0;
    let negative = false;
    if (s[0] === '-') {
        begin++;
        negative = true;
    } else if (s[0] === '+') {
        begin++;
    }
    while (begin < s.length && s[begin].match(digitRegex)) {
        stringValue += s[begin];
        begin++; 
    }
    if (stringValue.length == 0) {
        return 0;
    }
    const value = negative ? -parseInt(stringValue): parseInt(stringValue);
    return Math.min(Math.max(value, minValue), maxValue);
};
