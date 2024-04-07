/**
 * Bubble sort is one of the common used sorting 
 * it sort by [5, 3], [4,5], [5,1],  [5,2]
 * [3,4,1,2,5] largest value has been placed at the position
 * [3,4], [1,4], [4,2]
 * [3,1,2,4,5] one of the largest value has been position
 * [3,1], [3,2] 
 * [1,3,2,4,5] one of the largest value has been position
 * [3, 2], [1,2]
 * [1,2,3,4,5] Final sorted array
 */

// This one fix the problem by not comparing the undefined
const bubbleSort = (arr) =>{
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i - 1;j++){
      console.log(arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr;
}

let arrs = [5,3,4,1,2]
console.log(bubbleSort(arrs))

// There bug because it comparing undefined with a integer
// const bubbleSortBug = (arr) =>{
//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length;j++){
//       console.log(arr, arr[j], arr[j+1])
//       if(arr[j] > arr[j+1]){
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr;
// }


// console.log(bubbleSortBug(arrs))