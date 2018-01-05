import Shape from './shape.js';

export default class EquilateralTriangle extends Shape {
  /**
   * Constructor
   * dim object should have an 'a' property, for one side.
   * @param {obj} dim
   * @param {int} fixed limit decimal places to this or 2
   */
  constructor(dim, fixed = 2) {
    super();
    super.validateDim(dim);
    this.dim = dim;
    this.fixed = fixed;
    this.eqTriangle = Object.assign({ type: 'equilateral triangle' }, dim);
    this.area();
    this.perimeter();
  }

  /**
   * Returns area of equilateral triangle
   */
  area() {
    const res = (Math.sqrt(3) / 4) * Math.pow(this.dim.a, 2);
    this.eqTriangle['area'] = parseFloat(res.toFixed(this.fixed));
  }

  /**
   * Returns perimeter of equilateral triangle
   */
  perimeter() {
    this.eqTriangle['perimeter'] = parseFloat((3 * this.dim.a).toFixed(this.fixed));
  }

  /**
   * Returns equilateral triangle object.
   */
  getShape() {
    return this.eqTriangle;
  }

  /**
   * Resize equilateral triangle
   * @param {float} m positive multiplier
   */
  resize(m) {
    this.dim = Object.assign({}, super.resize(m, this.dim, this.fixed));
    this.eqTriangle = Object.assign({}, this.eqTriangle, this.dim);
    this.area();
    this.perimeter();
  }
}
