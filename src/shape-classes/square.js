import Shape from './shape.js';

export default class Square extends Shape {
  /**
   * Constructor
   * dim object should have an 'a' property, the length of one side.
   */
  constructor(dim) {
    super();
    super.validateDim(dim);
    this.dim = dim;
    this.square = Object.assign({ type: 'square' }, dim);
    this.area();
    this.perimeter();
  }

  /**
   * Sets area of square
   * a = one side
   */
  area() {
    this.square['area'] = Math.pow(this.dim.a, 2);
  }

  /**
   * Sets perimeter of square
   * a = one side
   */
  perimeter() {
    this.square['perimeter'] = 4 * this.dim.a;
  }

  /**
   * Returns square object.
   */
  getShape() {
    return this.square;
  }

  /**
   * Resize square
   * @param {float} m positive multiplier
   */
  resize(m) {
    this.dim = Object.assign({}, super.resize(m, this.dim));
    this.square = Object.assign({}, this.square, this.dim);
    this.area();
    this.perimeter();
  }
}
