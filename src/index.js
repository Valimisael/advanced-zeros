module.exports = function getZerosCount(number, base) {
  var baseNumber = base,
    arrayOfPrimeFactors = [];
  
  for (var i = 2; i <= baseNumber; i++) {
    while (baseNumber % i == 0) {
      arrayOfPrimeFactors.push(i);
      baseNumber /= i;
    }
  }
  
  var largestPrimeFactor = Math.max(...arrayOfPrimeFactors),
		zeroCount = 0,
		remainder = number;
      
  while (remainder>largestPrimeFactor) {
    zeroCount += Math.floor(remainder/largestPrimeFactor);
    remainder = Math.floor(remainder/largestPrimeFactor); 
  }
  
  return zeroCount;
}