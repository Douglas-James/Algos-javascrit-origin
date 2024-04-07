// this is a ES6 for function 
const recursiveArray = (start, end) => {
  // if the start is less then end stop loop else continue the loop
  if(end < start){
    return []
  }else{
    let nums = recursiveArray(start, end-1)
    nums.push(end)
    return nums
  }

}


/* Should return array that is [1, 2, 3, 4, 5]
*/

console.log(recursiveArray(1, 5))