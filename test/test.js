var chai = require('chai'),
   should = chai.should(),
   expect = chai.expect();

var things = require('../challenge_1.js');
  
describe("Sum of operators without remainders", function() {
  it('should add numbers', function() {
    things.sumOfAMultiple(10).should.equal(23);

  });

});


