class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

    // display 
    display(){
        // empty array
        let arr = [];

        let current = this.first;
        while(current){
            arr.push(current.value)

            current = current.next
        }
        return arr;
    }
}


// create the object 
const stack = new Stack();



// push 
stack.push("First")
stack.push("Second")
stack.push("Third")




// pop
stack.pop()



// display
console.log(stack.display())