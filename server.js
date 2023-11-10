const fs = require('fs');

const writeAndAppend = function() {
    fs.writeFileSync('notepad.txt', 'My name is Shubham Singh Parihar and I live in Lucknow');
    fs.appendFileSync('notepad.txt', '\nI am 27 years old');
}

module.exports = writeAndAppend;