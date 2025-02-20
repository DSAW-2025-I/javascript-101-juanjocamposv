// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== 'number' || typeof b !== 'number'){
    return "Los datos de entrada no son adecuados"
  }
  return a+b;
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    return "Los datos de entrada no son adecuados";
  }
  if(n==0 || n==1){
    return 1;
  }
  let result=1;
  for (let i=1; i<=n;i++ ){
    result= i*result;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
    return "Los datos de entrada no son adecuados";
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (typeof str !== 'string') {
    return "Los datos de entrada no son adecuados"; 
  }
  const vowels = ['a', 'e', 'i', 'o', 'u']; 
  let co = 0; 
  for (let char of str.toLowerCase()) {  
    if (vowels.includes(char)) {  
      co++; 
    }
  }
  return co;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if(typeof n !=='number'|| !Number.isInteger(n) || n < 2){
    return "Los datos de entrada no son los adecuados";
  }
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
