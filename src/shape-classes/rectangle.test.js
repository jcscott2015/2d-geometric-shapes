import { should } from 'chai';
import Rectangle from './rectangle';
should();

describe('Rectangle non-zero test', () => {
  it('should only accept positive, non-zero values', () => {
    (() => {
      new Rectangle({ l: -4, w: 8 }, 2);
    }).should.throw("Property 'l' must be greater than 0.");
  });
});

describe('Rectangle NaN test', () => {
  it('should only accept numerical values', () => {
    (() => {
      new Rectangle({ l: 'foo', w: 8 }, 2);
    }).should.throw("Property 'l' must be a number.");
  });
});

describe('Rectangle tests', () => {
  let rectangle = new Rectangle({ l: 4, w: 8 }, 2);
  let rectangleObj = rectangle.getShape();

  it('should have a "l" of 4 and "w" of 8', () => {
    rectangle.dim.l.should.equal(4);
    rectangle.dim.w.should.equal(8);
  });

  it('should create an object with these properties', () => {
    rectangleObj.type.should.equal('rectangle');
    rectangleObj.l.should.equal(4);
    rectangleObj.w.should.equal(8);
    rectangleObj.area.should.equal(32);
    rectangleObj.perimeter.should.equal(24);
  });

  it('should be resized with multiplier of 2', () => {
    rectangle.resize(2);
    rectangleObj = rectangle.getShape();
    rectangleObj.type.should.equal('rectangle');
    rectangleObj.l.should.equal(8);
    rectangleObj.w.should.equal(16);
    rectangleObj.area.should.equal(128);
    rectangleObj.perimeter.should.equal(48);
  });

  it('should be resized with multiplier of .3', () => {
    rectangle.resize(.3);
    rectangleObj = rectangle.getShape();
    rectangleObj.type.should.equal('rectangle');
    rectangleObj.l.should.equal(2.4);
    rectangleObj.w.should.equal(4.8);
    rectangleObj.area.should.equal(11.52);
    rectangleObj.perimeter.should.equal(14.4);
  });
});
