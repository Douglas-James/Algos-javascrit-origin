// Doubly link list Node 
// -val, -next, -prev
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Doubly linked main class 
// -head, -tail, and -length

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

    // Push instances method add value to the Node class
    push(val){
      const newNode = new Node(val)

      // if there no node add value and make next = null, also prev = null
      // else make the tail.next equal newNode and newNode.prev equal to the tail tail equal to newNode
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
      console.log(newNode.prev)
      this.length++;
      return this;
    }

  // Pop instance Method would remove the last value
  Pop(){
    
    this.length--;
    return this;
  }
    
}

// create the node 
const Doubly = new DoublyLinkedList()

Doubly.push(10)
Doubly.push(20)



console.log(Doubly)