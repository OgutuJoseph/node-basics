/** path modules */
const path = require('path');
// base file name
console.log('base file name: ', path.basename(__filename));
// directory name
console.log('directory name: ', path.dirname(__dirname));
console.log('path directory name: ', path.dirname(__filename));
// file extension
console.log('file extension: ', path.extname(__filename));
// create path object
console.log('create path object: ', path.parse(__filename));
// concatenate path
console.log('concatenate path: ', path.join(__dirname, 'test', 'hello.html'));