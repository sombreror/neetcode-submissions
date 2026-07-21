/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */

    //val => is the value stored inside a node (node1, node2 ecc...).
    //next => where the node point to (like node1 --> node2 --> node3 --> null);
    //null because it doesn't point to any node anymore (more likely the linked list has terminated).

    // prev => stores the previous node (initially null because the first node will become the last node)
    // current => stores the node currently being processed
    // next => temporarily stores the next node to avoid losing the rest of the linked list
    reverseList(head) {
        let prev = null;
        let current = head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}
