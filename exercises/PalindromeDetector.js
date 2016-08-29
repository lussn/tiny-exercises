'use strict'

/*
 Definition: A palindrome is a word, phrase, number, or other sequence of characters
 which reads the same backward or forward. Allowances may be made for adjustments to
 capital letters, punctuation, and word dividers.

 Challenge: Write an algorithm that will outputs a longest palindrome in the given
 string. e.g. give a string "Awesome stats!!!" output will be "stats" as "tat" is a
 shorter palindrome.

 Assumptions: treat string as case insensitive and all characters are treated as important
 */

let _reverse = (word) => {
  return word.split('').reverse().join('')
}

class PalindromeDetector {

  constructor (sentence) {
    this.sentence = sentence
  }

  getLongest () {
    let result = ''
    let sentenceLength = this.sentence.length

    for (let i = 0; i < sentenceLength; i++) {
      for (let j = sentenceLength - 1; j > i; j--) {
        let possibleWord = this.sentence.substring(i, j)
        if (possibleWord === _reverse(possibleWord) && possibleWord.length > result.length) {
          result = possibleWord
        }
      }
    }

    return result
  }
}
module.exports = PalindromeDetector;
