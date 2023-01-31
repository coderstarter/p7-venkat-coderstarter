/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head==null){
        return null;
    }
    let len =1;
    var lastnode = head;
    while(lastnode.next!=null){
        lastnode = lastnode.next;
        len++;
    }
    lastnode.next = head;
    let newindex = len-k % len;
    for(let i=0;i<newindex;i++){
        lastnode = lastnode.next;
    }
    head = lastnode.next;
    lastnode.next = null;
    return head;
};

// submission link : https://leetcode.com/problems/rotate-list/submissions/880141085/

// full implementation 
class Node {
    constructor(ele, next) {
        this.ele = ele;
        this.next = (next === undefined ? null : next);
    }
}

class SingleLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.size = 1;
    }
    append(ele) {
        const newNode = new Node(ele);
        var current;
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.size++;
    }
    print() {
        let cur = this.head;
        while (cur != null) {
            console.log(cur.ele + " ");
            cur = cur.next;
        }
    }
    printList() {
        let array = ['head'];
        let cur = this.head;
        while (cur != null) {
            array.push(cur.ele);
            cur = cur.next;
        }
        array.push('null');
        console.log(array.join("->"))
    }
    rotateListByKthTimesRightSide(k) {
        if (this.head == null) {
            return null;
        }
        let len = 1;
        var lastNode = this.head;
        while (lastNode.next != null) {
            lastNode = lastNode.next;
            len++;
        }
        lastNode.next = this.head;
        let newIndex = len - k % len;
        for (let i = 0; i < newIndex; i++) {
            lastNode = lastNode.next;
        }
        this.head = lastNode.next;
        lastNode.next = null;
    }
}

const list = new SingleLinkedList(5);

list.append(10);
list.append(40);
list.append(20);
list.append(12);
// list.print();
list.printList()
list.rotateListByKthTimesRightSide(3);
list.printList()

// time complexity : o(n) as we iterating the linkedlist
// space complexity : o(1)
