/* eslint-disable no-console */
import './favicons/favicons';
import './css/reboot.css';
import './css/index.css';
import Circle from './shape-classes/circle';
import Rectangle from './shape-classes/rectangle';
import EquilateralTriangle from './shape-classes/equilateral-triangle';
import RightTriangle from './shape-classes/right-triangle';
import Square from './shape-classes/square';
import Parallelogram from './shape-classes/parallelogram';

let cir = new Circle({ r: 8 });
let rec = new Rectangle({ l: 4, w: 8 });
let eqt = new EquilateralTriangle({ a: 8 });
let rtr = new RightTriangle({ a: 8, b: 16 });
let sqr = new Square({ a: 8 });
let par = new Parallelogram({ a: 6, b: 8, h: 4 });

const body = document.getElementsByTagName('body')[0];

let h1 = document.createElement('h1');
let h1t = document.createTextNode('2-Dimensional Shapes Test');
h1.appendChild(h1t);

let h2a = document.createElement('h2');
let h2at = document.createTextNode('Original Shapes');
h2a.appendChild(h2at);

let shapes1 = document.createElement('div');
displayShape(cir.getShape(), shapes1);
displayShape(rec.getShape(), shapes1);
displayShape(eqt.getShape(), shapes1);
displayShape(rtr.getShape(), shapes1);
displayShape(sqr.getShape(), shapes1);
displayShape(par.getShape(), shapes1);

let h2b = document.createElement('h2');
let h2bt = document.createTextNode('Shapes Rezized by 200%');
h2b.appendChild(h2bt);

let shapes2 = document.createElement('div');
cir.resize(2);
rec.resize(2);
eqt.resize(2);
rtr.resize(2);
sqr.resize(2);
par.resize(2);
displayShape(cir.getShape(), shapes2);
displayShape(rec.getShape(), shapes2);
displayShape(eqt.getShape(), shapes2);
displayShape(rtr.getShape(), shapes2);
displayShape(sqr.getShape(), shapes2);
displayShape(par.getShape(), shapes2);

let h2c = document.createElement('h2');
let h2ct = document.createTextNode('Shapes Rezized by 30%');
h2c.appendChild(h2ct);

let shapes3 = document.createElement('div');
cir.resize(.3);
rec.resize(.3);
eqt.resize(.3);
rtr.resize(.3);
sqr.resize(.3);
par.resize(.3);
displayShape(cir.getShape(), shapes3);
displayShape(rec.getShape(), shapes3);
displayShape(eqt.getShape(), shapes3);
displayShape(rtr.getShape(), shapes3);
displayShape(sqr.getShape(), shapes3);
displayShape(par.getShape(), shapes3);

body.append(h1, h2a, shapes1, h2b, shapes2, h2c, shapes3);

/**
 * Insert DOM elements for each shape.
 * @param {obj} shape 
 * @param {obj} el DOM element to append
 */
function displayShape(shape, el) {
  let h3 = document.createElement('h3');
  let h3t = document.createTextNode(`${shape.type}`);
  h3.appendChild(h3t);

  let list = document.createElement('ul');
  for (let key of Object.keys(shape)) {
    let item = document.createElement('li');
    let itemContent = document.createTextNode(`${key}: ${shape[key]}`);
    item.appendChild(itemContent);
    list.appendChild(item);
  }

  el.append(h3, list);
}
