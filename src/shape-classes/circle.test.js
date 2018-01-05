import { should } from 'chai';
import Circle from './circle';
should();

describe('Circle non-zero test', () => {
  it('should only accept positive, non-zero values', () => {
    (() => {
      new Circle({ r: -8 }, 2);
    }).should.throw("Property 'r' must be greater than 0.");
  });
});

describe('Circle NaN test', () => {
  it('should only accept numerical values', () => {
    (() => {
      new Circle({ r: 'foo' }, 2);
    }).should.throw("Property 'r' must be a number.");
  });
});

describe('Circle tests', () => {
  let circle = new Circle({ r: 8 }, 2);
  let circleObj = circle.getShape();

  it('should have a "r" of 8', () => {
    circle.dim.r.should.equal(8);
  });

  it('should create an object with these properties', () => {
    circleObj.type.should.equal('circle');
    circleObj.r.should.equal(8);
    circleObj.area.should.equal(201.06);
    circleObj.circumference.should.equal(50.27);
  });

  it('should be resized with multiplier of 2', () => {
    circle.resize(2);
    circleObj = circle.getShape();
    circleObj.type.should.equal('circle');
    circleObj.r.should.equal(16);
    circleObj.area.should.equal(804.25);
    circleObj.circumference.should.equal(100.53);
  });

  it('should be resized with multiplier of .3', () => {
    circle.resize(.3);
    circleObj = circle.getShape();
    circleObj.type.should.equal('circle');
    circleObj.r.should.equal(4.8);
    circleObj.area.should.equal(72.38);
    circleObj.circumference.should.equal(30.16);
  });
});
