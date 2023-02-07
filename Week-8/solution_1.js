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
function maxDepht() {
    let ans = height(root);
    return ans;
}

function height(root) {
    if (root === null) {
        return 0;
    }
    let left_side = height(root.left);
    let right_side = height(root.right);
    if (left_side > right_side) {
        return left_side + 1;
    }
    else {
        return right_side + 1;
    }
}

insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);
/*
      50
   /     \
  30      70
 /  \    /  \
20   40  60   80 */

inorder(); // as inorder traversal always give sorted data as follows left root right in bst case
console.log('the height of tree is :')
console.log(maxDepht())
