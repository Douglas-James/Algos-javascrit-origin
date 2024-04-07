function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
const x = areThereDuplicates("1", "1")
console.log(x)