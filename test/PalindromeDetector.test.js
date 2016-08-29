'use strict'

let path = require('path')
let PalindromeDetector = require(path.join(__dirname, '../exercises', 'PalindromeDetector'))
let expect = require('chai').expect;

describe('PalindromeDetector', () => {

  describe('getLongest', () => {
    let detector

    it('should get longest palindrome if correct sentence 1', () => {
      detector = new PalindromeDetector('Awesome stats!!!')
      expect(detector.getLongest()).to.equal('stats')
    })

    it('should get longest palindrome if correct sentence 2', () => {
      detector = new PalindromeDetector('Great rotator10 dancing with crazy level')
      expect(detector.getLongest()).to.equal('rotator')
    })

    it('should return empty if empty', () => {
      detector = new PalindromeDetector('')
      expect(detector.getLongest()).to.equal('')
    })
  })
})
