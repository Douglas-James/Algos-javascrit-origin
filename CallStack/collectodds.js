// Given array of integers, find the odd number and return them
const collectodds = (arr) =>
{
  // empty array that collect the odd number 
  let results = [];
  
  // a function that help collect the odd number
  function helpers(input)
  {
    // if the length of the input is 0 return it
    if(input.length === 0) return;
    
    // if the input isn't equal to zero push it to the empty array
    if(input[0] % 2 !== 0){
      results.push(input[0])
    }

    helpers(input.slice(1))
  }
  // give the helper a array to run
  helpers(arr)
  return results;
}


let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22]
const x = collectodds(arrays);
console.log(x)
