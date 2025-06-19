// Question: even numbers
// Description: find the even numbers in the array
// Created on: 18/06/2025, 08:29:58

// Write your solution here
function solution() {
    // Your code here
}

// Test your solution
console.log(solution());

================================================================================
// NEW SOLUTION APPROACH - Added on: 19/06/2025, 15:16:37
const evenNumbers = (number) => {
  if (number % 2 === 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
};

console.log(evenNumbers(4)); // 4 is even
console.log(evenNumbers(5)); // 5 is odd
