const { ThreeDRotationOutlined } = require("@material-ui/icons");

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Push instances method add into a Node
    push(val){
        // where we are going to push val into
        let newNode = new Node(val);

        // if the length equal zero the value  is placed in the head and the tail
        // else tail.next = newNode and the newNode.prev is equal to the tail and the tail is equal to newNode
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        // increament the length 
        this.length++;

        // return this
        return this;
    } 

    // pop instance method removes the last value
    pop(){
        // if the isn't any value inside the node return undefined or null: you can use
        if(!this.head) return undefined;

        // let the pop node equal the tail
        let poppedNode = this.tail;

        // if the length equal one make the head and the taill null
        // else make the tail equal pop node previous the tail.next is equl null
        // and pop node previous is equal to null;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        // decrement the length
        this.length--;

        // return the pop node
        return poppedNode;
    }

    // Shift instances method should remove the first value in the Node
    shift(){
        // if the length equal zero return undefiend or null.
        if(this.length === 0) return undefined;

        // the old head is equal to the head
        let oldHead = this.head;

        // if the length is equal to one make the head and the tail null
        // else make the head equal the old head next and the head.prev is equal null
        // the old head next is eqaul to null
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        // decrement the length 
        this.length--;

        // return the old head
        return oldHead;
    }

    // unshift instance method should add the value to first inside the array
    unshift(val){
        // where the new node is eqaul to Node class and the val is pass as a agrument
        let newNode = new Node(val);

        // if the length equal zero make the head and the tail equal to new node
        // else make the head.prev equal new node, and new node next  equal to the head
        // the head eqaul new node
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        // increment
        this.length++;

        // return this
        return this;
    }

    // Get instance method should get the value base upon the index
    get(index){
        // if the index is less then zero or index value eqaul or greater then the length return null
        if(index < 0 || index >= this.length) return null;

        // count and current is created but not definend
        let count, current;

        // if the index is lease or equal to the length is dived into two
        // else does the opposent 
        if(index <= this.length/2){
            // using the count and current as holder for while loop and the head
            count = 0;
            current = this.head;

            // while the count isn't in index go to the next and loop 
            while(count !== index){
                // make sure that loop is working
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        // return current
        return current;
    }

    // Set instances method update value of the index 
    set(index, val){

        // here we using prebuild get instance to get the index 
        let foundNode = this.get(index);

        // if found is not or equal null get the vale and return tree
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }

        // just return false if not found
        return false;
    }

    // insert would place the index and the value and moves the prev and next
    insert(index, val){
        // if the index is less then zero or the index is greater then the length which is this.length return false
        if(index < 0 || index > this.length) return false;

        // if the index equal zero turn the unshift instance into boolean fuction return with false or true
        if(index === 0) return !!this.unshift(val);

        // if the index is equal into the this.length return the instance of push by using the boolean true or false
        if(index === this.length) return !!this.push(val);

        // let the new node equal to the Node class 
        // let the beforeNode eqaul to the instance get by index - 1
        // let the afterNode equal into the beforenode.next 
        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        //  use the beforenode.next and newNode to swap beforeNode and newNode.prev
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        // increament the length 
        this.length++;

        // find the index to insert the value into the index 
        return true;
    }

    // sort by using prev and next
    // preSort(){
    //     // empy aray
    //     let arr = []




    //     let count = 0;
    
    //     let head = this.head
    //     let nexthead = head.next

    //     while(count <= this.length){
         
           
    //         console.log(`Head: ${head.val}, nexthead: ${nexthead.val}`)
    //         if(head){
    //             if(head){
    //                 arr.push(head.val)
    //                  nexthead = nexthead.next
    //             }
    //             if(nexthead){
    //                 arr.push(nexthead.val)
    //                 head = head.next
    //             }
                
    //         }
          
           
    //         // while loop breaks
    //         this.length--;
    //         count++;
    //     }
        

    //     return arr;
    // }


    // Print instances would give array of you values
    print(){
        // empty array
        let arr = []
      
        let  thehead = this.head;
        while(thehead){
            // the push all the items value into arr 
            arr.push(thehead.val)

            // this act like a break
            thehead = thehead.next;
        }

        // this returns the array
        return arr;
    }

    // the sort instance method allow 
    sort(){
        // create empty array
        let arr = [];

        // the current use the head to find the current value 
        let current = this.head

        // loop through the Node
        while(current){
            // push to the new create array
            arr.push(current.val)
            
            // because of the loop the We need use next to come to a stop
            current = current.next
        }
        // This sorting method is using bubble sorting method not real good sort but this would be fine for it.
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

let list = new DoublyLinkedList()
list.push(10)
list.push(20)
list.push(21)
list.push(1)

// pop instance method you shouldn't see one inside the array
list.pop()

// shift instance method you shouldn't see Harry inside the array
list.shift()

// unshift instance method 
list.unshift(20)

// get instance would see harry 
console.log(list.get(0))

// set instances would update harry into 10
list.set(0, 10)

// insert instances would push value to the index 2 value 11
list.insert(2, 11)

// preSort
// console.log(`PreSort ${list.preSort()}`);
// console.log(list.print())

// the older of the array should be sorted
// console.log(`The sort instances method ${list.sort()}`)

// print display
console.log("Display: ",list.print())

// sort method
console.log("Sort: ",list.sort())


