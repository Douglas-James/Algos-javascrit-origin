/**
 * Finds the first pair of elements in the array that sum to zero.
 *
 * @param {array} arr - the input array
 * @return {array} an array containing the pair of elements that sum to zero
 */
function sumZero(arr){
    for(let i of arr){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
    console.log(arr)
}


const x = sumZero([1, 2, -1, -2, -3, 3, 4, 5])

console.log(x)


// dictionary
const sum = (arr) => {
    let dict = {};
    for(let i of arr){
        if(dict[i]){
            return [dict[i], i];
        }
        dict[-i] = i;
    }
}

console.log(sum([1, 2, -1, -2, -3, 3, 4, 5]))