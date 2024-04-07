class PriorityQueue {
    constructor(){
        this.values = [];
    }

    // where to insertn the value
    enqueue(val, priority){

        // We link the Priority Queue to the Node class 
        let newNode = new Node(val, priority);

        // Take the the Node and push to the that the values
        this.values.push(newNode);

        // Run the max binary heap
        this.bubbleUp();
    }

    // A binary heap, parent nodes are always larger than child nodes. 
    bubbleUp(){
         // The last value added
        let idx = this.values.length - 1;

         // the get value of each element
        const element = this.values[idx];


        while(idx > 0){
            // get the parent index
            // Its Parent is at index (n-1)/2 floored
            // also get the value of parent 
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];

            // element priority is equal or greater then the parent priority End the while loop
            if(element.priority >= parent.priority) break;

            // This where parent is getting swapping is update index also the values. 
            // base upon the while loop.
            this.values[parentIdx] = element;
            this.values[idx] = parent;

             // this is main swapping 
            idx = parentIdx;
        }
    }

    // remove instance method.
    dequeue(){

        // let the min be the first value
        const min = this.values[0];

        // end the cut of the first value
        const end = this.values.pop();

        // if the values is less than zero run s
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    // Priority 
    sinkDown(){
        // The parent start poin
        let idx = 0;

        // Get the length of this values length
        const length = this.values.length;

        // Get the first value of values
        const element = this.values[0];

         // while loop run unto swap is null
        while(true){

             // left child and right child index and value and swap value and index
            // The left child started at 2n + 1
            //  The right child started at 2n + 2
            // swap is null that would be used to break the loop
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

             // if length is great the left child index 
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

             // if length is great the right child index
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];

                // The one is hard if statement but if look, but as priority need be done first the value or the number
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }

             // if swap is equal to null stop the while loop.
            if(swap === null) break;

             // swap is happening here
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }

    }

    // display 
    // dispay your values
    display(){
        return this.values;
    }
}

// Node that track the val and priority of values
class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// Class is now connect to ER variable
let ER = new PriorityQueue();

// The numbers tell that the greatest number is not import as the less numbers 
// that need to send to the doctore
ER.enqueue("A deep cut on the arm",5)
ER.enqueue("gunshot on the head", 1)
ER.enqueue("fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",15)
ER.enqueue("Stress",20)



// remove instance method
ER.dequeue()
ER.dequeue()


console.log(ER.display())









