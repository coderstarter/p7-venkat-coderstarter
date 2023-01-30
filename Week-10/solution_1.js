/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root==null){
        return 0;
    }
    let left_depth = maxDepth(root.left);
    let right_depth = maxDepth(root.right);
    if(left_depth>right_depth){
        return left_depth + 1;
    }
    return right_depth+1;
};

// time complexity: o(n) where n is the number of nodes
// space complexity: o(1)
