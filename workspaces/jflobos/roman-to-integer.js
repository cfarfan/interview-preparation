/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // get thousands
    const thousands = new Map([
        ["MMM", 3],
        ["MM", 2],
        ["M", 1],
    ]);

    const hundreds = new Map([
        ["CM", 9],
        ["DCCC", 8],
        ["DCC", 7],
        ["DC", 6],
        ["CD", 4],
        ["D", 5],
        ["CCC", 3],
        ["CC", 2],
        ["C", 1],
    ]);

    const tens = new Map ([
        ["XC", 9],
        ["LXXX", 8],
        ["LXX", 7],
        ["LX", 6],
        ["XL", 4],
        ["L", 5],
        ["XXX", 3],
        ["XX", 2],
        ["X", 1],
    ]);

    const units = new Map([
        ["IX", 9],
        ["VIII", 8],
        ["VII", 7],
        ["VI", 6],
        ["IV", 4],
        ["V", 5],
        ["III", 3],
        ["II", 2],
        ["I", 1],
    ]);
    

    const numbers = [units, tens, hundreds, thousands];
    let integer = 0;
    numbers.forEach((index, i) => {
        const replace = [...index.keys()].find(key => s.includes(key));
        s = s.replace(replace, "");
        if (replace) {
            integer += index.get(replace) * 10**i;
        }
    });
    return parseInt(integer);
};
