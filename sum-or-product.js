// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n

const num = Number(prompt("Please enter a number"));
const choice= Number(prompt("Press 1 for sum or Press 2 for multiplication"));
let sum = 0;
let mul = 1;
for(let i=1;i<=num;i++){
  if(choice===1){
    sum+=i;
  }
  else{
    mul*=i;
  }
}
if(choice===1){
  alert("The sum is " + sum);
}
else{
  alert("The multiplication is " + mul);
}
