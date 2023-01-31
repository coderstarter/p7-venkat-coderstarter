/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Leetcode based solution
var reverseList = function(head) {
    var cur = head;
    var prev = null;
    var next = null;
    while(cur!=null){
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur =next;
    }
    head=prev;
    return head;
};

// Manually implemented function
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
}

const list = new SingleLinkedList(5);

list.append(10);
list.append(40);
list.append(20);
list.append(12);
// list.print();
list.printList()
list.reverseLinkedList()
list.printList()

// time complexity : o(n) as we iterating the linkedlist
// space complexity : o(1)
