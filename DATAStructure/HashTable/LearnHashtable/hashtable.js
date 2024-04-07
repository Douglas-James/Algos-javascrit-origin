// Class 
class HashTable {
  // the size argument is give to the new array info about size.
  // the size tell the array if tell in argument it going to use defualt mode.
  constructor(size=4){
    // where all the data is stored
    this.keyMap = new Array(size)
  }
 

  // _hash the start code that 
  _hash(key){
    // total 
    // WEIRD_PRIME 
    let total = 0;
    let WEIRD_PRIME = 31;
    
    // for loop that modifies the charCodeAT()
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      //                                    % this a reminder in algebra 
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    // Return the total
    return total;
  }

  // set instance method accepts a key and a value
  // hashes the key
  // stores the key-value pair in the hash table array via separate chaining 
  set(key, value){
    // get the index
    let index = this._hash(key)
   
    //
     if(!this.keyMap[index]){
      // set that index into empty array
      this.keyMap[index] = [];
    }

    // Then push that key, and value into that empty array
    this.keyMap[index].push([key, value]);


  }

  // get instance method accepts a key
  // Hashes the key
  // Retrieves the key-value pair in the hash table
  // if the key isn't found, returns undefined or null.
  get(key){
    // what 
    let index = this._hash(key);
    // if it find that index key
    if(this.keyMap[index]){
      // where loop that sub array
      let i = 0;
      // while loop that enter that sub array
      while(i < this.keyMap[index].length){
         // check if that key that is passed equal that index
         if(this.keyMap[index][i][0] === key){
            // this get the value of that sub array
            return this.keyMap[index][i][1]
         }
        i++;
      }

    }
    // if that key is not found return undefined
    return undefined;
  }


  /* what a keys/ values
                                key
  1. loop through the hash table array and returns an array of the keys in the table
   
                                values
  2.loops through the hash tables array and returns an array of values in the table
  */
  values(){
    // stores all the data
    let data = [];

    // i'm using while loop you can use any loop 
    let i = 0;
    while(i < this.keyMap.length){
      // check if there anything inside values and keys
      if(this.keyMap[i]){
        // inside for loop 
        for(let j = 0; j < this.keyMap[i].length;j++){
          // here it check if the values already inside included if does it removes it 
          if(!data.includes(this.keyMap[i][j][1])){
            // here we are push the value that why see [1]
            data.push(this.keyMap[i][j][1])
          }
        }
      }
      i++;
    }

    return data;
  }

  keys(){
    // stores all the data
    let data = [];

    // i'm using while loop you can use any loop 
    let i = 0;
    while(i < this.keyMap.length){
      // check if there anything inside values and keys
      if(this.keyMap[i]){
        // inside for loop 
        for(let j = 0; j < this.keyMap[i].length;j++){
          // here it check if the keys already inside included if does it removes only return the first one
          if(!data.includes(this.keyMap[i][j][0])){
            // here we are push the value that why see [0]
            data.push(this.keyMap[i][j][0])
          }
        }
      }
      i++;
    }

    return data;
  }
}

const ht = new HashTable();


// Test for set instance method

// test values
ht.set("values", "#TEST")
ht.set("yellow","#FFFF000")
ht.set("love", '#PIZZZA')
ht.set("salmon", "#FA8072")

// Test keys and values should be removed 
ht.set('keys','#TEST')

// Test keys the keys should be removed
ht.set('keys','#VALUES')



// get instance method
// console.log(ht.get('testone'))


// values instance method
console.log(ht.values());

// keys instance method
console.log(ht.keys())