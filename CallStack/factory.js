// take a integer and multiple it by for loop it return total value

const factorial = (num)=>
{
  let total = 1;

  // for loop that mulitple is it by itself
  for( let i = num; i > 1; i--)
  {
    // mulituple its total with loop i 
    total *= i;
  }

  // return the total value
  return total
}

// recursio version
const factorial1 = (num) =>
{
  if(num === 0) return 1;
  return num * factorial1(num-1);
}

// facotial
const x = factorial(4)
console.log(x)

// recursion
const r = factorial1(4)
console.log(r)