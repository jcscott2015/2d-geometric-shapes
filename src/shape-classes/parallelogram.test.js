import { should } from 'chai';
import Parallelogram from './parallelogram';
should();

describe('Parallelogram non-zero test', () => {
  it('should only accept positive, non-zero values', () => {
    (() => {
      new Parallelogram({ a: -6, b: 8, h: 4 }, 2);
    }).should.throw("Property 'a' must be greater than 0.");
  });
});

describe('Parallelogram NaN test', () => {
  it('should only accept numerical values', () => {
    (() => {
      new Parallelogram({ a: 'foo', b: 8, h: 4 }, 2);
    }).should.throw("Property 'a' must be a number.");
  });
});

describe('Parallelogram tests', () => {
  let par = new Parallelogram({ a: 6, b: 8, h: 4 }, 2);
  let parObj = par.getShape();

  it('should have an "a" of 6, a "b" of 8, and an "h" of 4', () => {
    par.dim.a.should.equal(6);
    par.dim.b.should.equal(8);
    par.dim.h.should.equal(4);
  });

  it('should create an object with these properties', () => {
    parObj.type.should.equal('parallelogram');
    parObj.a.should.equal(6);
    parObj.b.should.equal(8);
    parObj.h.should.equal(4);
    parObj.area.should.equal(32);
    parObj.perimeter.should.equal(28);
  });

  it('should be resized with multiplier of 2', () => {
    par.resize(2);
    parObj = par.getShape();
    parObj.type.should.equal('parallelogram');
    parObj.a.should.equal(12);
    parObj.b.should.equal(16);
    parObj.h.should.equal(8);
    parObj.area.should.equal(128);
    parObj.perimeter.should.equal(56);
  });

  it('should be resized with multiplier of .3', () => {
    par.resize(.3);
    parObj = par.getShape();
    parObj.type.should.equal('parallelogram');
    parObj.a.should.equal(3.6);
    parObj.b.should.equal(4.8);
    parObj.h.should.equal(2.4);
    parObj.area.should.equal(11.52);
    parObj.perimeter.should.equal(16.8);
  });
});
