var Trie = function() {
    this.values = new Map();
    this.word = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (!this.values.has(word[0])) {
        this.values.set(word[0], new Trie());
    }
    const finalWord = word.slice(1);
    if (finalWord.length > 0) {
        this.values.get(word[0]).insert(finalWord);
    } else {
        this.values.get(word[0]).word = true;
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const begin = word[0];
    const next = word.slice(1);
    if (!this.values.has(begin)) {
        return false;
    }
    return next.length > 0 ? this.values.get(begin).search(next): this.values.get(begin).word;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const begin = prefix[0];
    const next = prefix.slice(1);
    if (!this.values.has(begin)) {
        return false;
    }
    return next.length === 0 ? this.values.has(begin) : this.values.get(begin).startsWith(next);
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
