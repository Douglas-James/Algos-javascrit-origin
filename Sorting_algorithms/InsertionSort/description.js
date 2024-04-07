/**
 * Insertion Sort builds up the sort by graduall 
 * creating a larger left,
 * left half which is always sorted.
 */
/**
 * [5,3,4,1,2] Insertion sort
 * [3,5] compare
 * [3,5,4] compare
 * [3,4,5] swapped
 * [3,4,5,1] compare
 * [1,3,4,5] swapped
 * [1,3,4,5,2] compare
 * [1,2,3,4,5] completed
 */
function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
      // current value of arr if i
      let currentVal = arr[i];
        // Loops backwards 
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // swap
            arr[j+1] = arr[j]
        }
        // inserting current value 
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([5,3,4,1,2]));