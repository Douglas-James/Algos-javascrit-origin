// this using divide and conquer
function search(arr, num){
  let min = 0;
  let max = arr.length -1;

  // While loop is need because we are using divide conquer for the search algos.
  while(min <= max){
    // The array need be divide in half to find the middle value
    let middle = Math.floor((min + max) / 2);
    let currentIdx = arr[middle];

    // if the num is greater then middle value make min equal to middle plus one do if else statement for max but have it middle - 1
    if(arr[middle] < num){
      min = middle + 1;
    }else if(arr[middle] > num){
      max = middle - 1;
    }else{
      return middle
    }
  }
  // return if the value of num doesn't in the array return - 1;
  return - 1;
}

// The arrays create to test if the algo works
let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


// running the function
const run = search(arrays, 10)
console.log(run)