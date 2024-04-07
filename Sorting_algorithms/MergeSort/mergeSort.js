// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
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

// Recrusive Merge Sort
function mergeSort(arr){
    // if arr length equal 1 or lease return the arr
    if(arr.length <= 1) return arr;
    
    // this divind the array
    let mid = Math.floor(arr.length/2);

    // left side and right side are using slice and mid point left side getting do first.
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    // return this and give it merge to have sorted. 
    return merge(left, right);
}

console.log(mergeSort([10,24,76,73]))
