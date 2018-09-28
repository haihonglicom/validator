const {checker, validator} = require('.')

describe('validator', () => {
  it('should return function with message', () => {
    function f1() {}

    const v = validator('test message', f1)

    expect(v.message).toBe('test message')
  })
})
