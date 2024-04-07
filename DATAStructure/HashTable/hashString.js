// Here's is hash that works on strings only
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen; // % this in import part of hash table it takes the reminder and diveds with argument.
  }
  return total;
}

function hashweird(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

// hash that work only on strings
console.log(hash("pink", 10)); // 0
console.log(hash("orangered", 10)); // 7
console.log(hash("cyan", 10)); // 3