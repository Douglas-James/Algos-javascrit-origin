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
}

// connection
const waitedgraph = new WeightedGraph()



// add vertex 
waitedgraph.addVertex("A")
waitedgraph.addVertex("B")
waitedgraph.addVertex("C")
waitedgraph.addVertex("D")
waitedgraph.addVertex("E")
waitedgraph.addVertex("F")


// add edge 
waitedgraph.addEdge("A", "B", 11)


// console log
console.log(waitedgraph)
