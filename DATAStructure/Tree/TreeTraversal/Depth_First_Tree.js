class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

     // Inserting work like push but make the value are like tree not weird organizeing the values
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    // This wound find would return the node value you found
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    // This would find the value and return true if not found it would return false just return boolean.
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    // Display would return the Node as a arrs it real isn't but we are using as a display
    // start Root and left child and right child, then left childs and right, and the right child left and right.
    // Basicly every time it runs it use insert instance to push value first --> last value in array.
    BFS(){

        // we create a node that has the every in the root data to collect the values
        // and queue that is the one that has stored  the root
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        // we need the length to loop using the queue
        while(queue.length){
            // everytime it pop of first node of queue
           node = queue.shift();
           // while that is running everthing that is getting pop is stored here
           data.push(node.value);

           // every time that is running the moves around the tree 
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }

        // after everything is finished it would return data.value in a arrays
        return data;
    }
   
   // Would start at the root --> left, left and right. at that right child right. 
   // the Root [10] --> child [6] --> left [3]  --> right [8] then it move to right child [15] --> becuase it only has one child [20]
    DFSPreOrder(){
        // empty arr
        var data = [];
        // A function that would be use as a Recursion method to do the heavy lifting
        function traverse(node){
            // every time it runs the value is pushed to the data
            data.push(node.value);

            // the first  left if loop runs 
            if(node.left) traverse(node.left);

            // after the left has finished then it moves to the right.
            if(node.right) traverse(node.right);
        }

        // every time the value root is passed for 
        traverse(this.root);
        return data;
    }
    

    // Start at the bottom left, right parent --> bottom child root bottom left, right and parent etc.
    DFSPostOrder(){
        var data = [];
        // if you have problem understand the function traverse 
        // let current = this.root
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        // traverse(current)
        traverse(this.root);
        return data;
    }

    // This would start at left child end of that left --> root --> [15] so on.
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// Pre Order read the comments to understand, how the instance method works.
console.log("Pre Order:",tree.DFSPreOrder())

// In Order read the comments to understand, how the instance method works.
console.log("IN Order:",tree.DFSInOrder())

// Post Order read the comments to understand, how the instance method works.
console.log("PostOrder:",tree.DFSPostOrder())

// Breath first search read the comments to understand, how the instance method works.
console.log("Binary like:",tree.BFS())



