/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const results = [];
    const set = new Set();
    for (let i = 0; i < target + 1; i++) {
        results.push([]);
    }
    for(let i = 0; i < candidates.length; i++) {
        if (candidates[i] <= target) {
            results[candidates[i]].push([candidates[i]]);
        }
    }
    for(let i = 1; i < target + 1; i++) {
        if (results[i].length > 0) {
            let validCandidates = candidates.filter(candidate => candidate + i <= target);
            validCandidates.forEach(valid => {
                results[i].forEach(arr => {
                    const value = [...arr, valid].sort((a,b)=> a-b);
                    const key = value.join(',');
                    if (!set.has(key)) {
                        set.add(key);
                        results[i+valid].push([...arr, valid]);
                    }
                });
            });
        }
    }
    return results[target];
};
