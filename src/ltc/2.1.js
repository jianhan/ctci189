class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode;
    }

    getFirst() {
        return this.head;
    }

    append(node) {
        if (this.head) {
            this.getLast().next = node
        } else {
            this.head = node
        }
    }

    dedupe() {
        const arr = {}
        let current = this.head;
        // TIP: create a temp variable to hole prev node, so that it can delete the current one by previous.next = current.next.
        let previous = null;
        while (current) {

            if (current.data in arr) {
                previous.next = current.next
            } else {
                arr[current.data] = true;
                previous = current;
            }

            current = current.next
        }
    }
}

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const ll = new LinkedList()

ll.append(new LinkedListNode(3))
ll.append(new LinkedListNode(2))
ll.append(new LinkedListNode(1))
ll.append(new LinkedListNode(1))
ll.append(new LinkedListNode(2))
ll.append(new LinkedListNode(3))
console.log(ll.size())
ll.dedupe();
console.log(ll.size())
