// Using Arrow function
const Chars = (Str) =>
{
  // empty object
  let result = {}
  // of is just look improve 
  for(var char of Str){
    // make it to lower case
    char = char.toLowerCase();
    // the check if it latter or number 
    if(/[a-z0-9]/.test(char)){
      if(result[char] >0 ){
        result[char]++;
      }else{
        result[char] = 1;
      }
    }
  }
  // Return the result 
  return result
}

let x = Chars("Hello222z!")
console.log(x)