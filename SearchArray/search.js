const search = (arr, num) =>{
    for(let i = 0; i < arr.length;i++){
      if(num == arr[i]){
        return i
      }
    }
    return - 1
}



let arrs = [1, 2, 3, 4, 5]
const x = search(arrs, 3)
console.log(x)