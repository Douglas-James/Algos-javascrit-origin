const factorial = (num) =>
{
  // if zero greatern then nu return 0;
  if(num < 0) return 0;

  // if 1 equal to or greater then num return 1
  if(1 >= num) return 1;

  return num * factorial(num-1)
}


console.log(factorial(10))