function binarySearch(arr, num){
  // the pointers
  let left = 0;
  let right = arr.length - 1;
  
  while(left < right){
    
    if(num === arr[left] ){
      return left;
    }

    if(num < arr[left]){
      left--;
    }else{
      left++;
    }

    if(num > arr[right]){
      right--;
    }else{
      right++;
    }
    
    if(left > right) break;
  }
  return - 1;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6], 10))