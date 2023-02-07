class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

var root = null;

function insert(data) {
    root = insertRec(root, data);
}

function insertRec(root, data) {
    if (root == null) {
        root = new Node(data);
        return root;
    }
    if (data < root.data) {
        root.left = insertRec(root.left, data);
    }
    else if (data > root.data) {
        root.right = insertRec(root.right, data);
    }
    return root;
}

function inorder() {
    inorderRec(root);
}

function inorderRec(root) {
    if (root != null) {
        inorderRec(root.left);
        console.log(root.data + " ");
        inorderRec(root.right);
    }

}
function levelOrder() {
    let ans = levelO(root);
    return ans;
}

var levelO = function (root) {
    if (root == null) return [];
    let queue = [], values = [];
    queue.push(root);
    while (queue.length > 0) {
        let len = queue.length, level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        values.push(level);
    }
    return values;
    // Time Complexity: O(n)
};
insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);

/*
      50
   /     \
  30      70
 /  \    /  \
20   40  60   80 */

inorder(); // as inorder traversal always give sorted data as follows left root right in bst case
console.log('the level traveral of tree is :')
console.log(levelOrder())
