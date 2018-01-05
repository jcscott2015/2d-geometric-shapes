/* eslint-disable no-console */
/**
 * Base shape class.
 */
export default class Shape {
  /**
   * Validate that any dimensions are positive numbers.
   */
  validateDim(dim) {
    for (const prop in dim) {
      if (dim.hasOwnProperty(prop)) {
        this.validateValue(dim[prop], prop);
      }
    }
  }

  /**
   * Validate that a value is a positive number.
   * @param {any} v 
   */
  validateValue(v, prop = null) {
    const item = (prop) ? `Property '${prop}'` : `'${v}'`;
    if (v < 0) {
      console.error(`${item} must be greater than 0.`); // eslint-disable-line no-console
      throw `${item} must be greater than 0.`;
    }

    if (isNaN(v)) {
      console.error(`${item} must be a number.`); // eslint-disable-line no-console
      throw `${item} must be a number.`;
    }
  }

  /**
   * Resize shape
   * @param {float} m positive multiplier
   * @param {obj} dim dimensions object
   * @param {int} fixed limit decimal places to this or 2
   */
  resize(m, dim, fixed = 2) {
    this.validateValue(m);
    for (const prop in dim) {
      if (dim.hasOwnProperty(prop)) {
        dim[prop] = parseFloat((m * dim[prop]).toFixed(fixed));
      }
    }
    return dim;
  }
}
