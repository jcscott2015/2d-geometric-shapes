import Shape from './shape.js';

export default class Parallelogram extends Shape {
  /**
   * Constructor
   * dim object should have these properties: 
   * 'a' for side
   * 'b' for base
   * 'h' for height
   * @param {obj} dim
   * @param {int} fixed limit decimal places to this or 2
   */
  constructor(dim, fixed = 2) {
    super();
    super.validateDim(dim);
    this.dim = dim;
    this.fixed = fixed;
    this.parallelogram = Object.assign({ type: 'parallelogram' }, dim);
    this.area();
    this.perimeter();
    this.base();
    this.height();
  }

  /**
   * Returns height of parallelogram
   */
  height() {
    this.parallelogram['h'] = parseFloat((this.parallelogram.area / this.dim.b).toFixed(this.fixed));
  }

  /**
   * Returns base of parallelogram
   */
  base() {
    this.parallelogram['b'] = parseFloat((this.parallelogram.area / this.dim.h).toFixed(this.fixed));
  }

  /**
   * Returns area of parallelogram
   */
  area() {
    const b = this.dim.b;
    const h = this.dim.h;
    this.parallelogram['area'] = b * h;
  }

  /**
   * Returns perimeter of parallelogram
   */
  perimeter() {
    const a = this.dim.a;
    const b = this.dim.b;
    this.parallelogram['perimeter'] = parseFloat((2 * (a + b)).toFixed(this.fixed));
  }

  /**
   * Returns parallelogram object.
   */
  getShape() {
    return this.parallelogram;
  }

  /**
   * Resize parallelogram
   * @param {float} m positive multiplier
   */
  resize(m) {
    this.dim = Object.assign({}, super.resize(m, this.dim, this.fixed));
    this.parallelogram = Object.assign({}, this.parallelogram, this.dim);
    this.area();
    this.perimeter();
    this.base();
    this.height();
  }
}
