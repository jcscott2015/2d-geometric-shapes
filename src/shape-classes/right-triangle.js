import Shape from './shape.js';

export default class RightTriangle extends Shape {
  /**
   * Constructor
   * dim object should have these properties: 
   * 'a' side adjacent to angle B and opposed to (or opposite) angle A
   * 'b' side adjacent to angle A and opposed to angle B
   * @param {obj} dim
   * @param {int} fixed limit decimal places to this or 2
   */
  constructor(dim, fixed = 2) {
    super();
    super.validateDim(dim);
    this.dim = dim;
    this.fixed = fixed;
    this.rTriangle = Object.assign({ type: 'right triangle' }, dim);
    this.area();
    this.perimeter();
  }

  /**
   * Returns area of a right triangle.
   */
  area() {
    const a = this.dim.a;
    const b = this.dim.b;
    this.rTriangle['area'] = parseFloat(((a * b) / 2).toFixed(this.fixed));
  }

  /**
   * Returns perimeter of a right triangle.
   */
  perimeter() {
    const a = this.dim.a;
    const b = this.dim.b;
    const res = a + b + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    this.rTriangle['perimeter'] = parseFloat(res.toFixed(this.fixed));
  }

  /**
   * Returns right triangle object.
   */
  getShape() {
    return this.rTriangle;
  }

  /**
   * Resize right triangle
   * @param {float} m positive multiplier
   */
  resize(m) {
    this.dim = Object.assign({}, super.resize(m, this.dim, this.fixed));
    this.rTriangle = Object.assign({}, this.rTriangle, this.dim);
    this.area();
    this.perimeter();
  }
}
