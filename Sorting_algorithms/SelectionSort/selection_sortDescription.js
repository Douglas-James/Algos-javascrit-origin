/**
 * Similar to bubble sort, but instead of first 
 * placing large values into sorted position, it 
 * places small values into sorted position.
 */
/**
 * Who it check for smallest value it finds
 * [5, 3, 4, 1, 2]
 * [5, 3,4, 1, 2]
 * [5, 3, 4, 1, 2]
 * [5, 3, 4, 1, 2]
 * [5, 3, 4, 1, 2]
 * Here Sample swaping way it works
 * [1, 3, 4, 5, 2]
 * [1, 2, 4, 5, 3]
 * [1, 2, 3, 5, 4]
 * [1, 2, 3, 4, 5]
 */

// Here is Selection Sort 
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++){
    let lowest = i;
    for(let j = i + 1;j < arr.length;j++){
      if(arr[j] < arr[lowest]){
        lowest = j;
      }
    }

    // Codition that check if i not equal to the lowest 
    if(i !== lowest){
      // This one way to use swap with variable temp
      console.log("********************")
      console.log(arr)
      console.log("Swapping to: ")
      let temp = arr[i];
      arr[i] = arr[lowest]
      arr[lowest] = temp
      console.log(arr)
      console.log("********************")
      // Swaping 
      // [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }

  return arr;
}

selectionSort([5, 3, 4, 1, 2]);