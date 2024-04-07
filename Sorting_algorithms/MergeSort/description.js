/**
 * https://cs.slides.com/colt_steele/intermediate-sorting-algorithms#/5/0/0
 * Merge Sort
 * It's a combination of two two things -merging and sorting 
 * Expoits the fact that a array of 0 or 1 elemenets are always worted
 * works by decomposing an array into smaller arrays of 0 or 1 elements then
 * building up a newly sorted array
 */

// Merges two already sorted arrays
function merge(arr1, arr2){
    // sort array arranged 
    let results = [];

    // pointers
    let i = 0;
    let j = 0;
    // Here simply pushing values to empty array
    while(i < arr1.length && j < arr2.length){
        // if arr2 is index great then arr1 index push to result and increament i++ else do the other one.
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    
   //  arr 1
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    // arr 2
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
  // here simply return arrays that was sorted
  return results;
}
// console.log(merges([100,200], [1,2,3,5,6]))



// Recrusive Merge Sort
function mergeSort(arr){
  // if arr length equal 1 or lease return the arr
  if(arr.length <= 1) return arr;
    
  // this divind the array into halves
  let mid = Math.floor(arr.length/2);
  // let arrs = [1, 2, 3, 4, 5, 6]
  // console.log(arrs.slice(0, mid))
  // console.log(arrs.slice(mid))

  // Here we create two peices by using slice
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));

  // Here we give left, and right to get sorted.
  return merge(left, right);
}


console.log(mergeSort([10,24,76,73]))