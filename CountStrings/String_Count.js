//use arrow function

const chars = (str) =>{
  // empty object
  let result = {}
  // loop through the str
  for(var i = 0; i < str.length;i++){
    // char equal to str[i]
    let char = str[i]
    // if result is greater then 0
    if(result[char] > 0){
      result[char]++;
    }else{
      result[char] = 1;
    }
  }
  // return the result
  return result
}


let x = chars("Hello")
console.log(x)