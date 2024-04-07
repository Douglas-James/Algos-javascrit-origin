class PriorityQueue {
  constructor(){
    this.values = [];
  }

  // endueue collects the info about value "A", 12--> priority
  enqueue(val, priority) {
    this.values.push({val, priority});
    // we are call up the sort for priority based upon the priority to sort it
    this.sort();
  };

  // dequeue give the lowest priority first
  dequeue() {
    return this.values.shift();
  };

  // This automatic sort the priority 0 because it getting called up by this.sort()
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

// connection
const priority = new PriorityQueue()


// endqueue value and priority has argument
priority.enqueue("A", 40)
priority.enqueue("B", 50)
priority.enqueue("C", 30)
priority.enqueue("E", 20)
priority.enqueue("D", 0)
priority.enqueue("F", 10)

// dequeue
console.log(`The Lowest priority ${priority.dequeue().priority}`)


console.log(priority)