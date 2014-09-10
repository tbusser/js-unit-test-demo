define(['Example'], function(Example) {
  'use strict';

  var example;
  beforeEach(function() {
    example = new Example();
  });

  describe('Example', function() {
    it('should have a method named "add"', function() {
      expect(example.add).to.be.a('function');
    });

    describe('.add()', function() {
      it('should return the sum of two numbers', function() {
        expect(example.add(1,1)).to.be(2);
      });
    });
  });
});
