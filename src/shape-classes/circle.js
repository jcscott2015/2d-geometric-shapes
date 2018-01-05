import Shape from './shape.js';

export default class Circle extends Shape {
  /**
   * Constructor
   * dim object should have an 'r' property, for radius.
   * @param {obj} dim
   * @param {int} fixed limit decimal places to this or 2
   */
  constructor(dim, fixed = 2) {
    super();
    super.validateDim(dim);
    this.dim = dim;
    this.fixed = fixed;
    this.circle = Object.assign({ type: 'circle' }, dim);
    this.area();
    this.circumference();
  }

  /**
   * Sets area of circle
   * r = radius
   */
  area() {
    this.circle['area'] = parseFloat((Math.PI * Math.pow(this.dim.r, 2)).toFixed(this.fixed));
  }

  /**
   * Sets perimeter of circle
   * r = radius
   */
  circumference() {
    this.circle['circumference'] = parseFloat((2 * Math.PI * this.dim.r).toFixed(this.fixed));
  }

  /**
   * Returns circle object.
   */
  getShape() {
    return this.circle;
  }

  /**
   * Resize circle
   * @param {float} m positive multiplier
   */
  resize(m) {
    this.dim = Object.assign({}, super.resize(m, this.dim, this.fixed));
    this.circle = Object.assign({}, this.circle, this.dim);
    this.area();
    this.circumference();
  }
}
