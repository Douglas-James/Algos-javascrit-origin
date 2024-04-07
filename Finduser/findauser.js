const users = (name) =>
{
  let user = ["James", "Haile", "Ryle", 'Douglas']


    if(name === user[user.indexOf(name)]){
      return user[user.indexOf(name)] ;
    }else{
      return "User Not Found"
    }
  
}



console.log(users("Douglas"))