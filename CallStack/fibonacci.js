const fibonacci = (num) =>
{
  // if the num equal or greater then two return 1
  if(num <= 2) return 1;

  // return
  return fibonacci(num-1) + fibonacci(num-2)
}

console.log(fibonacci(10))