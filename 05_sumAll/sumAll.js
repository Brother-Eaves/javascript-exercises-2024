const sumAll = function(num1, num2) {
   let total = 0

   if (num1 % 1 !== 0 || num2 % 1 !== 0) {
    return 'ERROR'
   } else if (isNaN(num1) || isNaN(num2)) {
    return 'ERROR'
   } else if (typeof num1 === 'string' || typeof num2 === 'string') {
    return 'ERROR'
   } else if (num1 < 0 || num2 <0) {
    return 'ERROR'
   } else if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      total += i
    }
    return total
   } else {
    for (let i = num1; i <= num2; i++) {
      total += i
     }
    return total
   }
 
   
};

// Do not edit below this line
module.exports = sumAll;
