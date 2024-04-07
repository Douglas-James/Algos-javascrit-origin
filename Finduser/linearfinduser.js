function user(name)
{
  let user = ["James", "Douglas"];
  for(let i = 0; i < user.length;i++){
    if(name === user[i]){
      return user[i]
    }
  }
  return "User Not Found"
}

console.log(user("Bobs"))