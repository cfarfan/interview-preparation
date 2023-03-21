/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    function getBinary(val) {
        let bits = 0;
        while(val > 0) {
            if (val % 2 !== 0) {
                bits++;
            } 
            val = parseInt(val/2);
        }
        return bits;
    }

    
    return Array.from({ length: n + 1 }, (value, index) => getBinary(index));
};