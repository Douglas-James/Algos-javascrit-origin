const { start } = require("prompt");
class Graph{
    // A constructer
    constructor(){
        this.adjacencyList = {};
    }

    // adding a vertex
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // addEdge instance method
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // removeEdge instance method
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    // Remove a vertex instance method
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    // recursive depth first
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const data = this.adjacencyList;

        (function dfs(vertex){
            if(!data[start]) return null
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            data[vertex]?.forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }

    // depthfirstIterative
    depthFirstIterative(start){
        const stack = [start]
        const result = []
        const visted = {}
        visted[start] = true
        let currentstart
        let data = this.adjacencyList;


        while(stack.length){
            currentstart = stack.pop();
            result.push(currentstart)
            
            if(!data[currentstart]) return []


            data[currentstart]?.forEach(neigbor =>{
                if(!visted[neigbor]){
                    visted[neigbor] = true;
                    stack.push(neigbor);
                }
            })
        }
      return result
    }

    // breadthFirst
    breadthFirst(start){
        // queue result visted data variable created
        const queue = [start];
        const result = [];
        const visited = {};
        const data = this.adjacencyList;
        let currentVertex;
        // here tell visited that true that value has been true
        visited[start] = true;

        while(queue.length){
            // shift is method removes the first element from an array and returns that removed element.
            currentVertex = queue.shift();
            // here push current value into result
            result.push(currentVertex);
            // here check if that data that passed is inside the data
            if(!data[currentVertex]) return [];
            
          
            data[currentVertex]?.forEach(neighbor => {
                // here pushing data into queue  if visted is false 
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

    // add more instance method 
  }

// connecting that graph to g variable
const g = new Graph()

// here is play ground

// adding vetex 
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


// adding a Edge
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

// recurive depth first 
console.log(g.depthFirstRecursive("A"))

// depthFirstIterative 
console.log(g.depthFirstIterative("B"))

// Remove a Edge
// g.removeEdge("A", "B")



// Remove a vertex 
// g.removeVertex("A")

// breathfirst
console.log(g.breadthFirst("K"))


// seeing display console 
// console.log(g)


