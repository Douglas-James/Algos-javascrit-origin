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
        let current = this.root;
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

    // Display learning
    BFS(){
        let node = this.root;
        // data is the empty arr that would get the values from tree.
        let   data = [];

        // quneues
        let  queue = [];
        queue.push(node);
       
      
        while(queue.length){
           node = queue.shift();

           // if time it runs node need the value that only thing we care about
           // that get push into the data
           data.push(node.value);

           // moving the node right and left  is pushed to the quenue
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }

        // when everything is completed then that data is return
        return data;
    }
}


//      10
//   5     13
// 2  7  11  16

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)



console.log(tree.BFS())
