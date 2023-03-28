/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let aDigit = 0;
    let bDigit = 0;
    let reserve = 0;
    while (a.length > 0 || b.length > 0) {
        aDigit = (a.length > 0 && a.charAt(a.length - 1) === "1") ? 1: 0;
        bDigit = (b.length > 0 && b.charAt(b.length - 1) === "1") ? 1: 0;
        reserve = aDigit + bDigit + reserve;
        a =  a.substring(0, a.length-1);
        b =  b.substring(0, b.length-1);
        
        switch (reserve) {
            case 0:
                result = "0" + result;
                reserve = 0;
                break;
            case 1:
                result = "1" + result;
                reserve = 0;
                break;
            case 2:
                result = "0" + result;
                reserve = 1;
                break;
            case 3:
                result = "1" + result;
                reserve = 1;
                break;
            
        }
    }
    return reserve === 1 ? "1" + result: result;
};
