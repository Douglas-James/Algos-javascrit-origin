// getDigit(12345, 0); 5 get the end
// getDigit(12345, 1); 4 get the 10
// getDigit(12345, 2); 3 get the 100
// getDigit(12345, 3); 2 get the 1,000
// getDigit(12345, 4); 1 get the 10,000
// getDigit(12345, 5); 0 get the 100,000
// return the digit in num at give place value
function getDigit(num, i) {
  // 7323/100 equal to 73.23 its floored  73 what is the remainder 73 % 10 it is 3 it would return 3
  // this function tell as how many time we need to put them inside a table.
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
// play with it
console.log(`Get digit inside the this number:${getDigit(7323, 2)}`)

// play with it 
console.log(`Count the digit in one array or the index:${digitCount(1000)}`)

// play with it
console.log(`The most digits inside the  arrays:${mostDigits([23,567,89,12234324,90])}`);










