var TimeMap = function() {
    this.values = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.values.has(key)) {
        this.values.set(key, []);
    }
    this.values.get(key).push({value, timestamp});
    const sortedValues = this.values.get(key);
    this.values.set(key, sortedValues);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.values.has(key)) {
        return "";
    }
    const valueTimelapse = this.values.get(key);
    if (valueTimelapse[0].timestamp > timestamp) {
        return "";
    }
    let left = 0;
    let right = valueTimelapse.length - 1;
    while (left < right) {
        let pivot = right - parseInt((right - left)/2);
        if (valueTimelapse[pivot].timestamp > timestamp) {
            right = pivot - 1;
        } else if (valueTimelapse[pivot].timestamp < timestamp) {
            left = pivot + 1;
        } else {
            return valueTimelapse[pivot].value;
        }
    }
    return valueTimelapse[right].value;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
