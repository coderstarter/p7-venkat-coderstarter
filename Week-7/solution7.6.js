
var MyQueue = function() {
    this.stack = [];
    this.reversed = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.reversed.length){
        while(this.stack.length){
            this.reversed.push(this.stack.pop());
        }
    }
    return this.reversed.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.reversed[this.reversed.length-1] ?? this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack.length && !this.reversed.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


https://leetcode.com/problems/implement-queue-using-stacks/submissions/880138256/
submission link
