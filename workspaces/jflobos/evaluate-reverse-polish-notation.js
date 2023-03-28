/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const getOperands = (arr) => {
        const a = arr.pop();
        const b = arr.pop();
        return [b, a];
    }
    const stack = [];
    let left, right;
    tokens.forEach(token => {
        if (token === '+') {
            [left, right] = getOperands(stack);
            stack.push(left+right);
        } else if (token === '-') {
            [left, right] = getOperands(stack);
            stack.push(left - right);
        } else if (token === '*') {
            [left, right] = getOperands(stack);
            stack.push(left * right);
        } else if (token === '/') {
            [left, right] = getOperands(stack);
            const result = left/right < 0 ? Math.ceil(left/right) : Math.floor(left/right);
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    });
    return stack.pop();
};
