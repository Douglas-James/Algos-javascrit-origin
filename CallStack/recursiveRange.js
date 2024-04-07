const range = (num) =>
{
  // if num equal zero return zero
  if(num === 0) return 0;

  // return num use recursion to subtract one
  return num + range(num-1);
}

const x = range(3);
console.log(x)