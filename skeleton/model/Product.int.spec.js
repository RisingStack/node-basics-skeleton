'use strict'
const expect = require('chai').expect
const User = require('./User')

describe('Models/Users', function () {
  describe('getByUsername', function () {
    const testUser = {
      username: 'TestJohnDoe'//,
      // cart: [
      //   {
      //     productName: 'test product',
      //     count: 11
      //   }
      // ]
    }
    const testDocument = new User(testUser)

    before(async function () {
      await testDocument.save()
    })

    after(async function () {
      await User.find({ username: testUser.username }).remove()
    })

    it('should return one user', async function () {
      try{
        const user = await User.getByUsername({ username: testUser.username })
      } catch (err) {
        console.error(err)
      }
      expect(user.toObject()).to.be.deep.equal(testUser)
    })
  })
})
