import Shape from './shape.js';

export default class Rectangle extends Shape {
  /**
   * Constructor
   * dim object should have these properties: 
   * 'l' length
   * 'w' width
   * @param {obj} dim
   * @param {int} fixed limit decimal places to this or 2
   */
  constructor(dim, fixed = 2) {
    super();
    super.validateDim(dim);
    this.dim = dim;
    this.fixed = fixed;
    this.rectangle = Object.assign({ type: 'rectangle' }, dim);
    this.area();
    this.perimeter();
  }

  /**
   * Returns area of rectangle
   */
  area() {
    const l = this.dim.l;
    const w = this.dim.w;
    this.rectangle['area'] = l * w;
  }

  /**
   * Returns perimeter of rectangle
   */
  perimeter() {
    const l = this.dim.l;
    const w = this.dim.w;
    this.rectangle['perimeter'] = parseFloat((2 * (l + w)).toFixed(this.fixed));
  }

  /**
   * Returns rectangle object.
   */
  getShape() {
    return this.rectangle;
  }

  /**
   * Resize rectangle
   * @param {float} m positive multiplier
   */
  resize(m) {
    this.dim = Object.assign({}, super.resize(m, this.dim, this.fixed));
    this.rectangle = Object.assign({}, this.rectangle, this.dim);
    this.area();
    this.perimeter();
  }
}
