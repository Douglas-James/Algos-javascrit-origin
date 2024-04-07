// If you don't understand this please look the file radix_helpers with the play console get you brain working.

// getDigit(12345, 0); 5 get the end
// getDigit(12345, 1); 4 get the 10
// getDigit(12345, 2); 3 get the 100
// getDigit(12345, 3); 2 get the 1,000
// getDigit(12345, 4); 1 get the 10,000
// getDigit(12345, 5); 0 get the 100,000
// return the digit in num at give place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// digitCount(21388) // log10 4.330etc and it floored 4 and add 1 the would return how many the count of the digit
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// mostDigits([1234, 56, 7]) // 4 
// mostDigits([1, 1, 11111, 1]) // 5
// mostDigits([12, 34, 56, 78]) // 2
// use the digitCount
// Given an arrays of numbers, returns the number of digits in the largest numbers in the list use the digitCount
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// The function use all the function we writen to sort them the right table and return them once it has do that it sort them into one array
function radixSort(nums){
   // using mostDigits to find the longest integer inside of that array
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        // This create 10 array that is empty
        let digitBuckets = Array.from({length: 10}, () => []);
        // console.log(digitBuckets)
        for(let i = 0; i < nums.length; i++){
            // using getDigit and give the loop
            let digit = getDigit(nums[i],k);
            // push it the 10 arrays with value digit getDigit
            digitBuckets[digit].push(nums[i]);
        }
        // makes a copy  ditibuckets
        nums = [].concat(...digitBuckets);
    }
    // return nums or the arrays sorted
    return nums;
}
console.log(radixSort([23,345,5467,12,2345,9852]))








