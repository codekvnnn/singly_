// Singly Linked Lists

class Node {
    // every class needs a contructor
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SLL {
    constructor(head = null){
        this.head = head
    }

    addToFront(val){
        // create a new Node using the val that is passed in
        let newNode = new Node(val) 
        // set the new Node's next value equal to the head of the list
        newNode.next = this.head
        // set the head to the newly added node
        this.head = newNode
        // returning this allows us to chain methods
        return this 
    }

    addToTail(val){
        let newNode = new Node(val)
        // create a new pointer/runner so that we can loop
        // through the list without losing the head pointer
        let current = this.head
        while(current.next !== null){
            // keep moving the pointer forward
            current = current.next
        }
        // set the last node in the list's next pointer 
        // to the new Node
        current.next = newNode
        return this
    }

    printList(){
        // check that our list has a head
        if(this.head == null){
            console.log("List is empty")
        }

        let current = this.head

        while(current !== null){
            console.log(current.val)
            current = current.next
        }
        
        return this
    }


}

let S1 = new SLL(new Node(8))
S1.addToFront(10).addToFront(33).addToFront(7).addToTail(10).addToTail(32)

S1.printList()
