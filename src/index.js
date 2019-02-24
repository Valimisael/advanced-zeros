module.exports = function getZerosCount(number, base) {
  var baseSystemsQuantity = 256,
    arrayOfPrimeNumbers = [];

  nextPrime:
  for (var i = 2; i <= baseSystemsQuantity; i++) {
    for (var j = 2; j < Math.sqrt(i); j++) {
      if (i % j == 0) continue nextPrime;
    }
    arrayOfPrimeNumbers.push(i);
  }

  var baseNumber = base,
    arrayOfDegrees = [],
    largestPrimeFactor = 0;
    
  for (var i=0; i < arrayOfPrimeNumbers[arrayOfPrimeNumbers.length-1]; i++) {    
    arrayOfDegrees[i] = 0;
  }  
  
  for (var i = 0; i <= baseNumber; i++) {
    while (baseNumber % arrayOfPrimeNumbers[i] == 0) {
      arrayOfDegrees[arrayOfPrimeNumbers[i]] += 1;
      largestPrimeFactor = arrayOfPrimeNumbers[i];
      baseNumber /= arrayOfPrimeNumbers[i];
    }
  }
  
  var zeroCount = 0,
		remainder = number;
      
  while (remainder>largestPrimeFactor) {
    if (remainder % largestPrimeFactor == 0) {
      zeroCount += remainder/largestPrimeFactor;
      remainder = remainder/largestPrimeFactor; 
    }
    zeroCount += Math.floor(remainder/largestPrimeFactor);
    remainder = Math.floor(remainder/largestPrimeFactor); 
  }
  
  return Math.floor(zeroCount/arrayOfDegrees[largestPrimeFactor]);
}