# Single Linked List
file description.js
```
That contains a head, tail, and length property. A Node has values and pointers to another node or null.    Length = 4 head [4] →next [6] →next [8] →next[2] Tail
→null . 

We Track the Head not the Tail
```

# Create class Node
```
constructor need value as agrument, inside that this.val = value, and this this.next = null;

```

# Create Class SingleLinkedList 
```
Inside of the constructor it doesn't take arguments, show look like something
constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}
This where instance method are used to automatical placing value to the head, and the tail
```

# Use The playground.js
```
You can use this as learning play ground.
```
# Here Instance method need to be created
push(value) - Need a argument this same way that push method in javaScript
<br>
pop() - Need no argument this 