// fibonacci recursive 
// not dynamic but something to think about.
// (n) 1: 1 +
// (n) 2: 1 +
// (n) 3: 2 +
// (n) 4: 3 +
// (n) 5: 5 +
// (n) 6: 8 +
function fib(n){
  if(n <= 2) return 1;

  if(n >= 45) return "Slow "

  // recursive return
  return fib(n-1) + fib(n-2);
}

// should be greater than 45
console.log(fib(3))

// Memoization storing information
// faster
const Memoization = (n, memo = []) =>{
   if(memo[n] !== undefined) return memo[n];

   if(n <= 2) return 1;

   let res = Memoization(n-1, memo) + Memoization(n-2, memo);
   memo[n] = res;

   // return res
   return res;
}

console.log(Memoization(4))

/* Tabulation: storing the result of a previous
result in a "table"(usual an array)
usually done using iteration
*/

const Tabulation = (n) =>{
  if(n <= 2) return 1;
  let fibnum = [0,1,1];

  for(let i = 3; i <= n; i++){
     fibnum[i] = fibnum[i-1] + fibnum[i-2];
  }

  // return fibnum of the index of n
  return fibnum[n]
}

// console 
console.log(Tabulation(4))