// The greate value is going to be the root. child, parent, and sibling are get update also
class MaxBinaryHeap {
    constructor(){
        // Here is where the values is stored
        this.values = [];


    // play ground 
    // this.values = [100, 19, 36, 17, 12, 25,
    // 5,  9, 15,  6, 11, 13,
    // 8,  1,  4]
    }

    // insert instance method 
    insert(element){

        // push the element to values array
        this.values.push(element);

        // also do bubbleup 
        this.bubbleUp();
    }

    // A binary heap, parent nodes are always larger than child nodes. 
    bubbleUp(){
        // The last value added
        let idx = this.values.length - 1;
        
        // the get value of each element
        const element = this.values[idx];


        // while the index value is greate loop
        while(idx > 0){

            // get the parent index
            // Its Parent is at index (n-1)/2 floored
            // also get the value of parent 
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];

            // if the element less or equal to the parent break the loop.
            if(element <= parent) break;

            // This where parent is getting swapping is update index also the values. 
            // base upon the while loop.
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // this is main swapping 
            idx = parentIdx;
        }
    }

    // sinkdown instance method also be call
    // Remove instance method
    /*   
    swap the first value property with last one   
    */
    remove(){
      // Firt element the root value
      const max = this.values[0];

      // end bacome the root
      const end = this.values.pop();
      
      // if the values length is greater than 0 run this value and the instance method 
        //  sinkDown 
      if(this.values.length > 0){
        this.values[0] = end;
        this.sinkDown();
      }
      

      return max;

    }

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
                // leftchild is equal the value of leftchildIdx
                leftChild = this.values[leftChildIdx];

                // Here we say if leftchild  is value is greater then the first value
                if(leftChild < element) {
                    // we setting swap value now with leftchilIdx
                    swap = leftChildIdx;
                }
            }

            // if length is great the right child index
            if(rightChildIdx < length){

                // rightchild is equal to the value of rightchildIdx
                rightChild = this.values[rightChildIdx];

                // The one is hard if statement but if look 
                if(
                    (swap === null && rightChild < element) || 
                    (swap !== null && rightChild < leftChild)
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

    // dispay your values
    display(){
        return this.values; 
    }
}

let heap = new MaxBinaryHeap();

// insert instance method
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)


// Value = [100, 19,  36,  17, 12,  25,  5, 9, 15, 6, 11, 13, 8, 1, 4]
// to play ground only
// heap.insert(100);
// heap.insert(19);
// heap.insert(36);
// heap.insert(17);
// heap.insert(12);
// heap.insert(25);
// heap.insert(5);
// heap.insert(9)
// heap.insert(15)
// heap.insert(6)
// heap.insert(11)
// heap.insert(13)
// heap.insert(8)
// heap.insert(1)
// heap.insert(200)


// remove instance method
heap.remove()
heap.remove()
heap.remove()
heap.remove()
heap.remove()
heap.remove()
heap.remove()



// [100, 19,  36,  17, 12,  25,  5, 9, 15, 6, 11, 13, 8, 1, 4]
console.log(heap.display())



