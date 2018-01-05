import { should } from 'chai';
import EquilateralTriangle from './equilateral-triangle';
should();

describe('EquilateralTriangle non-zero test', () => {
  it('should only accept positive, non-zero values', () => {
    (() => {
      new EquilateralTriangle({ a: -8 }, 2);
    }).should.throw("Property 'a' must be greater than 0.");
  });
});

describe('EquilateralTriangle NaN test', () => {
  it('should only accept numerical values', () => {
    (() => {
      new EquilateralTriangle({ a: 'foo' }, 2);
    }).should.throw("Property 'a' must be a number.");
  });
});

describe('EquilateralTriangle tests', () => {
  let eqTriangle = new EquilateralTriangle({ a: 8 }, 2);
  let eqTriangleObj = eqTriangle.getShape();

  it('should have an "a" of 8', () => {
    eqTriangle.dim.a.should.equal(8);
  });

  it('should create an object with these properties', () => {
    eqTriangleObj.type.should.equal('equilateral triangle');
    eqTriangleObj.a.should.equal(8);
    eqTriangleObj.area.should.equal(27.71);
    eqTriangleObj.perimeter.should.equal(24);
  });

  it('should be resized with multiplier of 2', () => {
    eqTriangle.resize(2);
    eqTriangleObj = eqTriangle.getShape();
    eqTriangleObj.type.should.equal('equilateral triangle');
    eqTriangleObj.a.should.equal(16);
    eqTriangleObj.area.should.equal(110.85);
    eqTriangleObj.perimeter.should.equal(48);
  });

  it('should be resized with multiplier of .3', () => {
    eqTriangle.resize(.3);
    eqTriangleObj = eqTriangle.getShape();
    eqTriangleObj.type.should.equal('equilateral triangle');
    eqTriangleObj.a.should.equal(4.8);
    eqTriangleObj.area.should.equal(9.98);
    eqTriangleObj.perimeter.should.equal(14.4);
  });
});
