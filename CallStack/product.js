const productofarray = (arr) =>
{
  if(arr.length === 0) return 1;

  return arr[0] * productofarray(arr.slice(1));
}

const x = productofarray([1, 2, 3, 4, 5, 6])
console.log(x)