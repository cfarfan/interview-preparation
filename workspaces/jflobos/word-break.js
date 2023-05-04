/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    function searchByOffset() {
        let longest = Number.NEGATIVE_INFINITY;
        for (word of wordDict) {
            longest = Math.max(word.length, longest);
        }
        const wordSet = new Set(wordDict);
        const visitedWords = new Set();
        // Exploring by offset:
        const canBuild = (t) => {
            if (visitedWords.has(t)) {
                return false;
            }
            visitedWords.add(t);
            for (let offset = Math.min(longest, t.length); offset > 0; offset--) {
                const test = t.substring(0, offset);
                if (wordSet.has(test)) {
                    a = t.replace(test, '');
                    if (a.length === 0) {
                        return true;
                    } else if (canBuild(a)) {
                        return true;
                    }
                }
            }
            return false;
        }
        return canBuild(s);
    }    
    function dp() {
        const dp = new Array(s.length+1).fill(false);
        dp[0] = true;
        for (let i = 1; i <= s.length; i++) {
            for (let j = 0; j < i; j++) {
                const word = s.substring(j, i);
                if (dp[j] && wordDict.includes(word)) {
                    dp[i] = true;
                }
            }
        }
        console.log(dp)
        return dp[s.length];
    }
    
    return dp();
};
