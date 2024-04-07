/**
 * Quick Sort
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
 * Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
 * 
 * Pivot helper 
 * In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
 * Given an array, this helper function should designate an element as the pivot
 * It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
 * The order of elements on either side of the pivot doesn't matter!
 * The helper should do this in place, that is, it should not create a new array
 * When complete, the helper should return the index of the pivot
 * 
 * 
*/

// [5, 2, 1, 8, 4, 7, 6, 3]
/** Pivot Point
 * start is pivot where to start 
 * Look at the 5 where does it needs  be moved to is 4
 * what is the index of 4 funny its four not the number but the index so 5 need to move to 4 index
 * know we keep track of 5 need to move to index of 4
 * Also we need track number that greater then 5
 * if 5 find number that are greater 
 * [5, 2, 1, 8, 4, 7, 6, 3] found 8, 7, 6 that great then 5
 *  [8,7,6,3] pivot point is 8
 * [3,7,6,8] 8 get sort by 3
 * [5,2,1,4,3,7,6,8] know let move 5 to the index
 * [3,2,1,4,5,7,6,8] 
 * [3,2,1,4] 3 is provit point right side
 * [1,2,3,4] right side is sorted
 * [1,2,3,4,5] are sorted
 * [7,6,8] 7 is provit point left side
 * [1,2,3,4,5,6,7,8] know you can say that you know about Pivot Point
 * if need more info about visuals 
 * Here a Link that has helpt 
 * https://visualgo.net/en/sorting?slide=3
 * quick sort need pivot point for it to sort the arrays faster
*/

// Pivot Helper
// Pivot accepts three arguments: array, start, and index 
// Read the top Pivot Point 
 const pivot = (arr, start = 0, end=arr.length+1) =>{
  // The simple swap function that swaps the values
  const swap = (arrs, index1, index2) =>{
     [arrs[index1], arrs[index2]] = [arrs[index2], arrs[index1]]
   }

   // pivot start point
  let pivot = arr[start];
  let swapIndex = start; /** where swap begins */

  
  // For loop if you feel like that it easy
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      // Increament pivot index
      swapIndex++;
      // swaping array with index value and i
      swap(arr, swapIndex, i);
    }
  }

  // while loop if you want to use
  // let i = start + 1;
  // while(i <= end){
  //    if (pivot > arr[i]) {
  //     // Increament pivot index
  //     swapIndex++;
  //     // swaping array with index value and i
  //     swap(arr, swapIndex, i);
  //   }
  //   i++
  // }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIndex);

  // return the pivot point 
  return swapIndex;
 }

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
      // give the function the arr and starting point and ending point.
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right waits for the left
        quickSort(arr,pivotIndex+1,right);
      }
    // return the array.
    return arr;
}    
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]))