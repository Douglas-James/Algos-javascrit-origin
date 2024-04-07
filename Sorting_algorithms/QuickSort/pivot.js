// First Version
function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // we start the pivot point most the time at the start is equal to zero
  var pivot = arr[start];
  // increamenting start
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    // pivot is greater then the value of the index increament start and swap the index 
    if(pivot > arr[i]){
      // Increamenting pivot point
      swapIdx++;
      // tracking the pivot and swapping them every time the pivot point is lease 
      swap(arr,swapIdx,i);
    }
  }
  
  // swap array and the start and the index
  swap(arr,start,swapIdx);

  // return the index pivot point 
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  /// swaping function that run everytime is ging called
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      // Increament pivot index
      swapIdx++;
      // swaping array with index value and i
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);

  // return the pivot point 
  return swapIdx;
}

console.log(pivot([4,8,2,1,5,7,6,3]))


