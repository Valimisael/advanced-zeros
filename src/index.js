module.exports = function getZerosCount(number, base) {
  var baseSystemsQuantity = 256,
    arrayOfPrimeNumbers = [];

  nextPrime:
  for (var i = 2; i <= baseSystemsQuantity; i++) {
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) continue nextPrime;
    }
    arrayOfPrimeNumbers.push(i);
  }

  var arrayOfDegrees = [],
      arrayOfPrimeFactors = [];
    
  for (var i=0; i < arrayOfPrimeNumbers[arrayOfPrimeNumbers.length-1]; i++) {    
    arrayOfDegrees[i] = 0;
  }  

  var baseNumber = base;
  
  for (var i = 0; i < baseNumber; i++) {
    while (baseNumber % arrayOfPrimeNumbers[i] == 0) {
      if (arrayOfPrimeFactors.indexOf(arrayOfPrimeNumbers[i]) == -1) {
        arrayOfPrimeFactors.push(arrayOfPrimeNumbers[i]);  
      }    
      arrayOfDegrees[arrayOfPrimeNumbers[i]] += 1;
      baseNumber = Math.floor(baseNumber/arrayOfPrimeNumbers[i]);
    }
  }
  
  var arrayOfZerosCount = [];

  for (var i = 0; i < arrayOfPrimeFactors.length; i++) {
    var zerosCount = 0,
        remainder = number;
    while(remainder >= arrayOfPrimeFactors[i]) {
      if (remainder % arrayOfPrimeFactors[i] != 0) {
        remainder = Math.floor(remainder/arrayOfPrimeFactors[i]);
        zerosCount += remainder;
      } else {
        remainder = remainder/arrayOfPrimeFactors[i];
        zerosCount += remainder;
      }
    }
    if (arrayOfDegrees[arrayOfPrimeFactors[i]] != 0) {
      arrayOfZerosCount.push(Math.floor(zerosCount/arrayOfDegrees[arrayOfPrimeFactors[i]]));
    } else {
      arrayOfZerosCount.push(zerosCount);
    } 
  }

  return Math.min(...arrayOfZerosCount);
}
