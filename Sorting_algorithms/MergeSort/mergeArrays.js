// Merges two already sorted arrays
function merge(arr1, arr2){
    // sort array arranged 
    let results = [];

    // pointers
    let i = 0;
    let j = 0;
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
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
console.log(merge([100,200], [1,2,3,5,6]))

