/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head;
    var fast = head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return true;
        }
    }
    return false;
};

// full implementation of detecting loop.

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
    reverseLinkedList() {
        var cur = this.head;
        var prev = null;
        var next = null;
        while (cur != null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        this.head = prev;
    }
    creatLoop() {
        this.head.next.next.next.next = this.head;
    }
    detectLoop() {
        var slow = this.head;
        var fast = this.head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) {
                return "Loop is detected"
            }
        }
        console.log('No loop is detected');
    }
}

const list = new SingleLinkedList(5);

list.append(10);
list.append(40);
list.append(20);
list.append(12);
// list.print();
list.printList()
list.creatLoop()
console.log(list.detectLoop())
list.printList()

// time complexity : o(n) as we iterating the linkedlist
// space complexity : o(1)
