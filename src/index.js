import './css/index.css';
import './less/index.less';
import ES6 from './js/es6.js';

const es6 = new ES6();
console.log(process.env.NODE_ENV);
es6.log('webpack config demo')