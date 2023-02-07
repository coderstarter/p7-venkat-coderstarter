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
    printInLevelOrder(root);
}

function printInLevelOrder(root) {
    let q = [];
    q.push(root);
    while (q.length !== 0) {
        let tempNode = q.shift();
        console.log(tempNode.data);
        if (tempNode.left !== null) {
            q.push(tempNode.left);
        }
        if (tempNode.right !== null) {
            q.push(tempNode.right);
        }
    }

}

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
levelOrder()

// time comp: o(n) as iteratively iterating the tree n is number of nodes
// space comp: o(n) for storing each level nodes.
