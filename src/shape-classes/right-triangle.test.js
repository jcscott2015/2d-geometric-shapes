import { should } from 'chai';
import RightTriangle from './right-triangle';
should();

describe('RightTriangle non-zero test', () => {
  it('should only accept positive, non-zero values', () => {
    (() => {
      new RightTriangle({ a: -8, b: 16 }, 2);
    }).should.throw("Property 'a' must be greater than 0.");
  });
});

describe('RightTriangle NaN test', () => {
  it('should only accept numerical values', () => {
    (() => {
      new RightTriangle({ a: 'foo', b: 16 }, 2);
    }).should.throw("Property 'a' must be a number.");
  });
});

describe('RightTriangle tests', () => {
  let rTriangle = new RightTriangle({ a: 8, b: 16 }, 2);
  let rTriangleObj = rTriangle.getShape();

  it('should have an "a" of 8 and a "b" of 16', () => {
    rTriangle.dim.a.should.equal(8);
    rTriangle.dim.b.should.equal(16);
  });

  it('should create an object with these properties', () => {
    rTriangleObj.type.should.equal('right triangle');
    rTriangleObj.a.should.equal(8);
    rTriangleObj.b.should.equal(16);
    rTriangleObj.area.should.equal(64);
    rTriangleObj.perimeter.should.equal(41.89);
  });

  it('should be resized with multiplier of 2', () => {
    rTriangle.resize(2);
    rTriangleObj = rTriangle.getShape();
    rTriangleObj.type.should.equal('right triangle');
    rTriangleObj.a.should.equal(16);
    rTriangleObj.b.should.equal(32);
    rTriangleObj.area.should.equal(256);
    rTriangleObj.perimeter.should.equal(83.78);
  });

  it('should be resized with multiplier of .3', () => {
    rTriangle.resize(.3);
    rTriangleObj = rTriangle.getShape();
    rTriangleObj.type.should.equal('right triangle');
    rTriangleObj.a.should.equal(4.8);
    rTriangleObj.b.should.equal(9.6);
    rTriangleObj.area.should.equal(23.04);
    rTriangleObj.perimeter.should.equal(25.13);
  });
});
