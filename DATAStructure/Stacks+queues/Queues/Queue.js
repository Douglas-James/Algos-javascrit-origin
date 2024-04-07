class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
   
    // push
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
   
    // shift
    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

     // display 
    display(){
        let arr = []
        let current = this.first
        
        while(current){
           arr.push(current.value)
            
           current = current.next

        }

       
        return arr;
    }
}


const queues = new Queue();

// push
queues.enqueue("First")
queues.enqueue("Second")
queues.enqueue("Third")
queues.enqueue("Thee")


// shift
queues.dequeue()


// display
console.log(queues.display())