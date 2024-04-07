function linearSearch(arr, num){

  for(let i of arr){

    if(num === arr[i]){
      return i;
    }
  }

  return - 1
}

// function linearSearch(arr, num){

//   for(let i = 0; i < arr.length;i++){


//     if(arr[i] === num){
//       return i;
//     }
//   }
//   return - 1;
// }

console.log(linearSearch([1, 2, 3, 4, 5, 10], 10))