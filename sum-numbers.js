//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

const num = Number(prompt("Enter a number"));
let result = 0;
for(let i=1;i<=num;i++){
  result+=i;
}
alert(result);
