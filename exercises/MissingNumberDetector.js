'use strict'

/*
 An array n - 1 unique numbers in the range from 0 to n - 1.
 There is exactly one number in the range from 0 to n - 1 missing.

 Please write a function to find the missing number.

 Test case:
 [JavaScript] missingNumber([0, 2, 1, 5, 3]) // returns 4
 */

class MissingNumberDetector {

  missingNumber (numberList) {
    let result = null
    numberList.sort().forEach((key, number) => {
      if (numberList[key] + 1 === number + 1) {
        result = number + 1
      }
    })
    return result
  }
}
module.exports = MissingNumberDetector;
