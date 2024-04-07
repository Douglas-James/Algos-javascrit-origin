//
const chars = (Str) =>{
  // empty object
  let result = {}
  // loop through the str
  for(let chars of Str){
    chars = chars.toLowerCase();
    if(chartCode(chars)){
      result[chars] = ++result[chars] || 1;
    }
  }
  // return the result
  return result
}

// chart code function that check if it alphabetic
const chartCode = (char) =>{
  let code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) && 
      !(code > 64 && code < 91) &&
      !(code > 94 && code < 123)){
        return false;
      }
  return true
}

// test if function chart code works
// let c = chartCode("A");
// console.log(c)


// test main
const string = chars("Hello2233!")
console.log(string)