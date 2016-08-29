'use strict'

let path = require('path')
let MissingNumberDetector = require(path.join(__dirname, '../exercises', 'MissingNumberDetector'))
let expect = require('chai').expect;

describe('MissingNumberDetector', () => {

  describe('missingNumber', () => {
    let detector

    beforeEach(() => {
      detector = new MissingNumberDetector()
    })

    it('should get missing number when array [0, 2, 1, 5, 3]', () => {
      expect(detector.missingNumber([0, 2, 1, 5, 3])).to.equal(4)
    })

    it('should get missing number when array [0, 4, 2, 1, 5, 3, 8, 9, 6]', () => {
      expect(detector.missingNumber([0, 4, 2, 1, 5, 3, 8, 9, 6])).to.equal(7)
    })

    it('should throw an error if invalid array', () => {
      expect(detector.missingNumber([])).to.equal(null)
    })
  })
})

