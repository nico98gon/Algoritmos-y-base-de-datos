// type ListNode = {
//     val: number;
//     next: ListNode | null;
// };

// function createNode(val: number): ListNode {
//     return { val, next: null };
// }

// type LinkedList = {
//     head: ListNode | null;
// };

// function createLinkedList(): LinkedList {
//     return { head: null };
// }

// function get(linkedList: LinkedList, index: number): number {
//     if (index < 0 || linkedList.head === null) {
//         return -1; // Índice inválido o lista vacía
//     }

//     let currentNode: ListNode | null = linkedList.head;
//     let currentIndex: number = 0;

//     while (currentNode !== null && currentIndex < index) {
//         currentNode = currentNode.next;
//         currentIndex++;
//     }

//     if (currentNode === null) {
//         return -1; // Índice fuera de rango
//     }

//     return currentNode.val;
// }

// function addAtHead(linkedList: LinkedList, val: number): void {
//     const newNode: ListNode = createNode(val);
//     newNode.next = linkedList.head;
//     linkedList.head = newNode;
// }

// function addAtTail(linkedList: LinkedList, val: number): void {
//     const newNode: ListNode = createNode(val);

//     if (linkedList.head === null) {
//         linkedList.head = newNode;
//         return;
//     }

//     let currentNode: ListNode = linkedList.head;

//     while (currentNode.next !== null) {
//         currentNode = currentNode.next;
//     }

//     currentNode.next = newNode;
// }

// function addAtIndex(linkedList: LinkedList, index: number, val: number): void {
//     if (index < 0) {
//         addAtHead(linkedList, val);
//         return;
//     }

//     const newNode: ListNode = createNode(val);

//     if (index === 0) {
//         newNode.next = linkedList.head;
//         linkedList.head = newNode;
//         return;
//     }

//     let currentNode: ListNode | null = linkedList.head;
//     let prevNode: ListNode | null = null;
//     let currentIndex: number = 0;

//     while (currentNode !== null && currentIndex < index) {
//         prevNode = currentNode;
//         currentNode = currentNode.next;
//         currentIndex++;
//     }

//     if (currentIndex === index) {
//         newNode.next = currentNode;
//         if (prevNode !== null) {
//             prevNode.next = newNode;
//         }
//     }
// }

// function deleteAtIndex(linkedList: LinkedList, index: number): void {
//     if (index < 0 || linkedList.head === null) {
//         return; // Índice inválido o lista vacía
//     }

//     if (index === 0) {
//         linkedList.head = linkedList.head.next;
//         return;
//     }

//     let currentNode: ListNode | null = linkedList.head;
//     let prevNode: ListNode | null = null;
//     let currentIndex: number = 0;

//     while (currentNode !== null && currentIndex < index) {
//         prevNode = currentNode;
//         currentNode = currentNode.next;
//         currentIndex++;
//     }

//     if (currentNode !== null) {
//         prevNode!.next = currentNode.next;
//     }
// }

// // Example of use
// const myLinkedList: LinkedList = createLinkedList();
// addAtHead(myLinkedList, 1);
// addAtTail(myLinkedList, 3);
// addAtIndex(myLinkedList, 1, 2); // linked list becomes 1->2->3
// console.log(get(myLinkedList, 1)); // Return 2
// deleteAtIndex(myLinkedList, 1); // now the linked list is 1->3
// console.log(get(myLinkedList, 1)); // Return 3


// Now the same code, but using classes

class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    get(index: number): number {
        if (index < 0 || this.head === null) {
            return -1; // Índice inválido o lista vacía
        }

        let currentNode: ListNode | null = this.head;
        let currentIndex: number = 0;

        while (currentNode !== null && currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        if (currentNode === null) {
            return -1; // Índice fuera de rango
        }

        return currentNode.val;
    }

    addAtHead(val: number): void {
        const newNode: ListNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    addAtTail(val: number): void {
        const newNode: ListNode = new ListNode(val);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let currentNode: ListNode = this.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0) {
            this.addAtHead(val);
            return;
        }

        const newNode: ListNode = new ListNode(val);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let currentNode: ListNode | null = this.head;
        let prevNode: ListNode | null = null;
        let currentIndex: number = 0;

        while (currentNode !== null && currentIndex < index) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }

        if (currentIndex === index) {
            newNode.next = currentNode;
            if (prevNode !== null) {
                prevNode.next = newNode;
            }
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || this.head === null) {
            return; // Índice inválido o lista vacía
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let currentNode: ListNode | null = this.head;
        let prevNode: ListNode | null = null;
        let currentIndex: number = 0;

        while (currentNode !== null && currentIndex < index) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }

        if (currentNode !== null) {
            prevNode!.next = currentNode.next;
        }
    }
}

// Ejemplo de uso
const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
console.log(myLinkedList.get(1)); // Devuelve 2
myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
console.log(myLinkedList.get(1)); // Devuelve 3

