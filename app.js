const writeAndAppend = require('./server.js');
const validator = require('validator');

writeAndAppend();
console.log(validator.isEmail('sssparihar@gmail.com'));

console.log(process.argv);