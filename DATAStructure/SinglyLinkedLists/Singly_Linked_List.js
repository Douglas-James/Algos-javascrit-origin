// piece of data - val
// reference to next node - next is equal to nul because we don't know what kind of info or data are they
class Node{
    // This node requires a value
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// This use the Node create a Structure between datas by using instances method
// create a head(null), tail(null),  and length equal to zero 
class SinglyLinkedList{
    // does not need to have value only the head, tail, and the length = 0
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push add value to the first or use tail.next and tail newNode
    push(val){
        // Access the classs Node and adding value of push
        let newNode = new Node(val);
        // if there is no data create the head and the tail else do the tail.next and the tail equl to newNode
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // increament the length 
        this.length++;
        // just return everything
        return this;
    }
    
    // Pop removes a node from the last of the linked list 
    pop(){
        // if there is no head return undefined or null
        if(!this.head) return undefined;

        // let the current equal to the head and newtail equal to current
        let current = this.head;
        let newTail = current;

        // loop through current.next intel you meet the last
        while(current.next){
            // newTail is equal to current head and current equal to the current.next
            newTail = current;
            current = current.next;
        }
        
        // the tail eqaul to the newTail and tail.next equals to null and subtract the length
        this.tail = newTail;
        this.tail.next = null;
        
        // if the length is equall to zero make the head and the taill equal into null
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        // decreament the length by 1
        this.length--;

        // return the current
        return current;
    }

    // Shift instance method should remove the first head
    shift(){
        // if there is no head return undefined or null
        if(!this.head) return undefined;

        // let currentHead equal to this head the first item
        let currentHead = this.head;
        
        // this head equal to currentHead.next
        this.head = currentHead.next;

        
        // if the length is equal to zero tail would be null
        if(this.length === 0){
            this.tail = null;
        }

        // decearment length by 1
        this.length--;
        
        // return the currentHead
        return currentHead;
    }

    // Unshift would add value to first head and move head and the tail
    unshift(val){
        // let newNode add value to the Node
        let newNode = new Node(val);

        // if there is no head let head equal to the newNode and the tail equal to the head else read the comment
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            //  let newNode.next equal to the head
            newNode.next = this.head;
            // the head equal to newNode
            this.head = newNode;
        }

        // increament length by 1
        this.length++;

        // return this or you can say everything of this function this.unshift
        return this;
    }

    // Get would get the value of index you have requested
    get(index){
        // if index is lease then zero or index is equal or greater then the length return undefined or null
        if(index < 0 || index >= this.length) return null;

        // The count start at zero
        let count = 0;

        // let the current equal the head
        let current = this.head;

        // loop while the count is not equal to the index loop
        while(count !== index){

            // current be the current.next
            current = current.next;

            // increament the count by 1
            count++;
        }

        // after that return the current value
        return current;
    }

    // Set use index to update the value
    set(index, val){
        // let foundNode to found the index be using get instance to found the index
        let foundNode = this.get(index);

        // if foundNode update val and return true
        if(foundNode){
            foundNode.val = val;
            return true;
        }

        // if not found return false
        return false;
    }

    // Insert need index and a value to insert the value in that index
    insert(index, val){
        // is Need to return true or false the right way you need to use (!! using boolean ) to return true or false
        // if the index is lease then zero or the greater the length return false
        if(index < 0 || index > this.length) return false;

        // if the index is equal to the length return push instance method
        if(index === this.length) return !!this.push(val);

        // if index is equal to zero return unshift instance method 
        if(index === 0) return !!this.unshift(val);
        
        // let newNode use the class Node
        let newNode = new Node(val);

        // let the prev equal the get instance 
        let prev = this.get(index - 1);

        // let temp equal to prev.next
        let temp = prev.next;

        // prev.next equal to newNode
        prev.next = newNode;

        // newNode.next equal to temp
        newNode.next = temp;

        // increament the length
        this.length++;
        
        // return true 
        return true;
    }

    // Remove use the index to remove the value
    remove(index){
        // if the index is lease then zero or the greater the length return undefined
        if(index < 0 || index >= this.length) return undefined;

        // if index equal to zero return shift instance method
        if(index === 0) return this.shift();

        // if index equal to the last length  return pop instance method
        if(index === this.length - 1) return this.pop();

        // previouseNode equal to get instance method 
        let previousNode = this.get(index - 1);

        // remove equal to previousNode.next
        let removed = previousNode.next;

        // previousNode.next equal to removed.next
        previousNode.next = removed.next;

        // decreament the length by 1
        this.length--;

        // return the removed value
        return removed;
    }

    // Reverse the z - a order to a - z
    reverse(){
        // let the current node equal 
        let node = this.head;

        // head equal to the tail
        this.head = this.tail;

        // tail equal to node
        this.tail = node;

        // let next equal to null
        let next = null;

        // the prev equal to null
        let prev = null;

        // for loop throug the length
        for(let i = 0; i < this.length; i++){
            // next equal to node.next
            next = node.next;

            //node.next equal to prev
            node.next = prev;

            //prev eqaul to node
            prev = node;

            //node equal to next
            node = next;
        }

        // return this
        return this;
    }

    // Display show it like array
    print(){
        // create empty array
        let arr = [];

        // 
        let current = this.head

        // loop through the Node
        while(current){
            // push to the new create array
            arr.push(current.val)
            
            // because of the loop the We need use next to come to a stop
            current = current.next
        }
        return arr;
    }

    // sort
    sort(){
        // create empty array
        let arr = [];

        // current variable us the current value from the head to track the value has it moves
        let current = this.head

        // loop through the Node
        while(current){
            // push to the new create array
            arr.push(current.val)
            
            // because of the loop the We need use next to come to a stop
            current = current.next
        }
        for(let i = arr.length; i > 0; i--){
            for(let j = 0; j < i - 1; j++){
                // console.log(arr, arr[j], arr[j+1]);
                if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                }
            }
    }
    return arr;

    }
}

const list = new SinglyLinkedList()

// push method
list.push(100)
list.push(201)
list.push(250)
list.push(-1)
list.push(350)
list.push(999)

// Pop instances method should remove  999
list.pop()

// Shift instance method should remove the first head 100
list.shift()

// Unshift instance method should add it the first head like 10
list.unshift(10)


// Get instance method should return the value of the index you have placed test 0 should return 10
console.log(list.get(0))

// set instance method should update the value of index 0 value 10 to update into to 11 be using index
list.set(0, 11)

// insert instance method should use index and value to the value moving other value and index
list.insert(0, 22)

// reverse instance method should reverse the oder of z-a to a-z
list.reverse()

// 
console.log(list.sort())

console.log(list.print())






