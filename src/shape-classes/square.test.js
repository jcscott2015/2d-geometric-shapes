import { should } from 'chai';
import Square from './square';
should();

describe('Square non-zero test', () => {
  it('should only accept positive, non-zero values', () => {
    (() => {
      new Square({ a: -8 }, 2);
    }).should.throw("Property 'a' must be greater than 0.");
  });
});

describe('Square NaN test', () => {
  it('should only accept numerical values', () => {
    (() => {
      new Square({ a: 'foo' }, 2);
    }).should.throw("Property 'a' must be a number.");
  });
});

describe('Square tests', () => {
  let square = new Square({ a: 8 }, 2);
  let squareObj = square.getShape();

  it('should have an "a" of 8', () => {
    square.dim.a.should.equal(8);
  });

  it('should create an object with these properties', () => {
    squareObj.type.should.equal('square');
    squareObj.a.should.equal(8);
    squareObj.area.should.equal(64);
    squareObj.perimeter.should.equal(32);
  });

  it('should be resized with multiplier of 2', () => {
    square.resize(2);
    squareObj = square.getShape();
    squareObj.type.should.equal('square');
    squareObj.a.should.equal(16);
    squareObj.area.should.equal(256);
    squareObj.perimeter.should.equal(64);
  });

  it('should be resized with multiplier of .3', () => {
    square.resize(.3);
    squareObj = square.getShape();
    squareObj.type.should.equal('square');
    squareObj.a.should.equal(4.8);
    squareObj.area.should.equal(23.04);
    squareObj.perimeter.should.equal(19.2);
  });
});
