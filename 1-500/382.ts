class Solution {
    head: ListNode | null;

    constructor(head: ListNode | null) {
        this.head = head;
    }

    getRandom(): number {
        let curr = this.head;
        let scope = 1;
        let result = 0;
        
        while (curr) {
            if (Math.random() < 1 / scope) {
                result = curr.val
            }
            
            scope += 1;
            curr = curr.next;
        }
        return result
    }
}
