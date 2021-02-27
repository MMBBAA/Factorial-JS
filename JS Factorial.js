function FirstFactorial(num) { 

  // code goes here  
  var rdo=1;

  for(i=1;i<=num;i++){
    rdo=rdo*i;
  }
  
  return rdo; 



}
   

console.log(FirstFactorial(readline()));