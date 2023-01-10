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
