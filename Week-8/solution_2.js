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
function checkForBST() {
    let ans = check(root, Number.MIN_VALUE, Number.MAX_VALUE);
    return ans;
}

function check(root, min, max) {
    if (root === null) {
        return true;
    }
    else if (min < root.data && root.data < max) {
        return check(root.left, min, root.data) && check(root.right, root.data, max);
    }
    return false;
}

insert(500);
insert(30);
insert(20);
insert(100);
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
console.log(checkForBST())

// time comp: o(n) as number of node
// space comp: o(1) there is no auxiliary data structure used to store the data
