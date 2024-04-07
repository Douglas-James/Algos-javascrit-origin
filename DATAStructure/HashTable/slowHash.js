// Non-Example 

const slowHash = (key) => {
  for(let i = 0; i < 100000; i++){
    console.log("Everyday I'm hashing");
  }
  return key[0].charCodeAt(0);
}


function sameHashedValue(key){
  return 0;
}

// slowHash
console.log(slowHash("James"))


// sameHashedValue
console.log(sameHashedValue(20))