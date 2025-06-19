// Question: factorial
// Description: factorial funtion to get factorial of number
// Created on: 19/06/2025, 16:06:02

// Write your solution here
function solution() {
    // Your code here
}

// Test your solution
console.log(solution());

================================================================================
// NEW SOLUTION APPROACH - Added on: 19/06/2025, 16:57:37
const factorialOfNumber=(n)=>{
  let res = 1;
  for(let i=1;i<=n;i++){
    res *= i;
  }
  return res;
}

console.log(factorialOfNumber(5))