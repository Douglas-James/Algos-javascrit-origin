const power = (base, exponent) =>
{
  // if exponent length run to equal to 0 return 1
  if(exponent === 0) return 1;

  // return base use recursion to subtract - 1
  return base * power(base, exponent -1);
}


const x = power(10, 2);
console.log(x)