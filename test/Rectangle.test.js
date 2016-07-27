'use strict'
let chai = require('chai')
let path = require('path')

chai.should()
let Rectangle = require(path.join(__dirname, '../exercises', 'Rectangle'))

describe('Rectangle', () => {
  describe('#height',() => {
    let rectangle
    beforeEach(() => {
      rectangle = new Rectangle()
    })

    it('returns the height', () => {
      rectangle.height.should.equal(5)
    })
  })
})
