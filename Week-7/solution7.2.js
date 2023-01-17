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

submission link : https://leetcode.com/problems/rotate-list/submissions/880141085/
