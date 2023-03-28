/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let last = n;
        let first = 1;
        let pivot = last;
        let bad = last;
        while (first <= last) {
            pivot = first + parseInt((last - first) / 2);
            if (isBadVersion(pivot)) {
                bad = pivot;
                last = pivot - 1;
            } else {
                first = pivot + 1;
            }
        }
        return bad;
    };
};
