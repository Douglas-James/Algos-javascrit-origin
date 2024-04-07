// Radix sort is not comparing number 
/**
 * Radix sort is a special sorting algorithm that works on lists of numbers
It exploits the fact that information about the size of a number is encoded in the number of digits.  
More digits means a bigger number!
It never makes comparisons between elements!

Here is the one place are positioned
___ ___  ___ ___ ___ ___ ___ ___ ___ ___
|720  21  222 233  424 575 296 27  8 39|
___ ___  ___ ___ ___ ___ ___ ___ ___ ___
| 0   1    2   3   4 | 5   6   7   8  9|
|         27        |                  |
|         424       |                  |
|         222       |                  |
| 8       21  39    |                  |
| 1       720 233   |         575   296|
___ ___  ___ ___ ___ ___ ___ ___ ___ ___
| Here is the tent place are positioned | 
|___ ___  ___ ___ ___ ___ ___ ___ ___ __|
| 0   1    2   3   4   5   6   7   8  9 |
| Here is   hundred are position        | 
| use the blow example sort to sort it  | 
|___ ___  ___ ___ ___ ___ ___ ___ ___ __|
| [1,8,720,21,222,424,27,233,39,574,296]|
Here a link that would complate this example
https://visualgo.net/en/sorting?slide=4
// Radix sort doesn't take negative numbers
 */

//  return the digit in num at give place value
const getDigit = (num, i) =>{
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// console.log(getDigit(100, 1))

// Here just is a digit Count 0 = 1 and 9 = 1 but 1000 = 4 and so on.
const digitCount =(num)=>{
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(1000))

// Given an arrays of numbers, returns the number of digits in the largest numbers in the list use the digitCount
const mostDigits = (nums) =>{
  let maxDigits = 0;
  // u can use while loop if you find that best
  // let i = 0;
  // while(i < nums.length){
  //   maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  //   i++;
  // }

  // i'm personal for this going to use for loop
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// console.log(mostDigits([10, 200, 3323, 2399, 1829]))

function radixSort(nums){
   // using mostDigits to find the longest integer inside of that array
    let maxDigitCount = mostDigits(nums);
    for(let j = 0; j < maxDigitCount; j++){
        // This create 10 array that is empty
        let digitBuckets = Array.from({length: 10}, () => []);
        // console.log(digitBuckets)
        for(let i = 0; i < nums.length; i++){
            // using getDigit 
            let digit = getDigit(nums[i],j);
            // push it to digitBockets arrays with value digit getDigit
            digitBuckets[digit].push(nums[i]);
        }
        // makes a copy digitBockets
        nums = [].concat(...digitBuckets);
    }
    // return nums or the arrays sorted
    return nums;
}

console.log(radixSort([720,21, 222, 233 ,424,575,296,27,8 ,39]))