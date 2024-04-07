class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // All the instance method are going to be placed here 
  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this
  }
  // Place you'r code here
}

// This a bad practice 
// let first = new Node("Single");
// first.next = new Node("Link");
// first.next.next = new Node("Said");
// first.next.next.next = new Node("Hi");
// first.next.next.next.next = new Node("There");


// console.log(first)

// Good practice would be using the class SinglyLinkedList and create instance method to update you'r values
let singleLink = new SinglyLinkedList()

singleLink.push(10)
singleLink.push(20)

console.log(singleLink)