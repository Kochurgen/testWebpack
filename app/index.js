require ('./style.styl');
import Point from './signal.js';
var body = document.querySelector('body');
body.textContent = 'Good point: ' + new Point(1, 23);