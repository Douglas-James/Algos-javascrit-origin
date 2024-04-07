// Weighted graph 
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    // add vertex
    addVertex(vertex){
        // { A: [], B: [], C: [], D: [], E: [], F: [] }
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    
    // add Edge need two vertex and a number
    addEdge(vertex1,vertex2, weight){
        // this just little different then graph { A: [ [Object] ], B: [ [Object] ] }
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    // Dijkstra instance method
    Dijikra(start, end){
      // Entring class 
       const node = new PriorityQueue()
       const distance = {};
       const previous = {};
       let path = [] //to return at end
       let smallest;

       // build up initial state
       for(let vertex in this.adjacencyList){
          if(vertex === start){
            distance[vertex] = 0;
            node.enqueue(vertex, 0);
          }else{
             distance[vertex] = Infinity;
             node.enqueue(vertex, Infinity);
          }
          // when it start difault null
          previous[vertex] = null;
       }
       // as long as there is something to vist
       while(node.values.length){
          // should give the smallest value priority
           smallest = node.dequeue().val;

           if(smallest === end){
            // we are done
            // console.log(distance)
            // build up path to return at end
           while(previous[smallest]){
               path.push(smallest)
               smallest = previous[smallest]
           }
           break;
            // console.log(previous)
           }

           if(smallest || distance[smallest] !== Infinity){

              for(let neighbor in this.adjacencyList[smallest]){
                 // find neignboring node
                 let nextNode = this.adjacencyList[smallest][neighbor];
                 
                 // calculate new distance to neighboring node
                let calculate = distance[smallest] + nextNode.weight;

                // next neighbor node variable 
                let nextneighbor = nextNode.node;


                if(calculate < distance[nextneighbor]){
                      // updating new snallest distance
                      distance[nextneighbor] = calculate;
                       
                      // updating previous how we got to neighbor
                      previous[nextneighbor] = smallest;

                      // endqueue in priority queue with new priority
                      node.enqueue(nextneighbor, calculate)
                }

              }
           }
       }
     return path.concat(smallest).reverse()
    }
}

// class for Priority Queue
class PriorityQueue {
  constructor(){
    this.values = [];
  }

  // endueue collects the info about value "A", 12--> priority
  enqueue(val, priority) {
    // connect to Node class
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();

    // older version
    // this.values.push({val, priority});
    // we are call up the sort for priority based upon the priority to sort it
    // this.sort();
  };

  // sorting 
  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];

      // if element priority greater or equal to parent priorty break the loop
      if(element.priority >= parent.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }

  }

  // dequeue give the lowest priority first
  dequeue(){
     const min = this.values[0];
     const end = this.values.pop();

     // if the this values length is greater then zero 
     if(this.values.length > 0){
        // let the pop value equal to this.values[0]
        this.values[0] = end;

        // run this instance method
        this.sinkDown()
     }

     // after that return the lowest of min
     return min;
  };

  // sinkDown instance method
  sinkDown(){
         // let idx equal to zero 
         // let the length equal to the this.values.length
         // let the element equal to first this.value[0]
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        // loop that running on boolean 
        while(true){
             // leftchildIdx
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            
            let swap = null;

            //
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                //
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            //
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];

                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            
            // if swap is equal to null stop the while loop
            if(swap === null) break;

            // beginning the swap
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

  // This automatic sort the priority 0 because it getting called up by this.sort()
  // older version not fastest 
  // sort() {
  //   this.values.sort((a, b) => a.priority - b.priority);
  // };
}

// Class Node
class Node{
  // Constructor that get value and priority
  constructor(val, priority){
    this.val = val;
    this.priority = priority
  }
}

// connection 
const graph = new WeightedGraph()


// add vertex
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

// dequeue instance method


// add Edge 
graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

// dikstra 
console.log(graph.Dijikra("A", "B"))
console.log(graph.Dijikra("C", "F"))
console.log(graph.Dijikra("F", "E"))

// console
console.log(graph)