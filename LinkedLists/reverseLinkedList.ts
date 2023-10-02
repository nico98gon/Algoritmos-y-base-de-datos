// Given the head of a singly linked list, reverse the list, and return the reversed list.


// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:


// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?



// class ListNode {
//     val: number
//     next: ListNode | null

//     constructor(val: number) {
//         this.val = val
//         this.next = null
//     }
// }


function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null
    let current: ListNode | null = head

    while(current) {
        const nextNode = current.next

        current.next = prev
        prev = current
        current = nextNode
    }

    return prev
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

console.log(reverseList(node1))


const example: ListNode = {
    val: 5,
    next: {
        val: 3,
        next: {
            val: 6,
            next: {
                val: 1,
                next: {
                    val: 0,
                    next: {
                        val: 8,
                        next: null
                    }
                }
            }
        }
    }
}

console.log(reverseList(example))