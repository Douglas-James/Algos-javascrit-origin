// every number after the first two is the sum of the two preceding ones
function sum(){
     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
     let sum = []

    for(let i = 0; i < arr.length - 1; i++){
      let start = arr[i]
      let next = arr[i + 1]
      sum.push(start + next)
      

     }

     return sum;
}


// 
console.log(sum())