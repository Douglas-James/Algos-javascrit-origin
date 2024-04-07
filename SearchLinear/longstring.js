const findlongest = (longer, shorter) =>
{
  // count 
  let count = 0;

  for(let i = 0; i < longer.length;i++){
      for(let j = 0; j < shorter.length;j++){
          
          // if the characters don't match break
          if(shorter[j] !== longer[i+j]) break;
          
          // if the inner loop match increment the count of match
          if(j === shorter.length - 1) count++;
      }
    }

    // return the count.
    return count;
}

console.log(findlongest("James", "James kkk"))