// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSorts(arr){
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      // console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSorts([8,1,2,3,4,5,6,13,7,43]));