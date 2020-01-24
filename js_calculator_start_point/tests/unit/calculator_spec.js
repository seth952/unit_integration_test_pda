var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it can add 2 numbers', function(){
    calculator.previousTotal = "1"
    calculator.add("4")
    assert.equal(5.0, calculator.runningTotal)
  })

  it('it can subtract 2 numbers', function(){
    calculator.previousTotal = "7"
    calculator.subtract("4")
    assert.equal(3.0, calculator.runningTotal)
  })
  it('it can multiply 2 numbers', function(){
    calculator.previousTotal = "3"
    calculator.multiply("5")
    assert.equal(15.0, calculator.runningTotal)
  })
  it('it can divide 2 numbers', function(){
    calculator.previousTotal = "21"
    calculator.divide("7")
    assert.equal(3.0, calculator.runningTotal)
  })
  it('concatenate multiple number button clicks', function(){
  calculator.numberClick("8");
  calculator.numberClick("4");
  calculator.numberClick("3");
  assert.equal("843", calculator.runningTotal)
  })

  it('chain multiple operations together', function(){
  calculator.numberClick("8");
  calculator.operatorClick("+");
  calculator.numberClick("3");
  calculator.operatorClick("-");
  calculator.numberClick("1");
  calculator.operatorClick("=");
  assert.equal("10", calculator.runningTotal)
  })

  it('clear the running total without affecting the calculation', function(){
  calculator.numberClick("5");
  calculator.operatorClick("+");
  calculator.numberClick("3");
  calculator.clearClick();
  assert.equal("0", calculator.runningTotal)

  })

});




// - `calculator.clearClick()` - clear the running total without affecting the calculation
