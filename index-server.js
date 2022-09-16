/** path modules */
const path = require('path');
// // base file name
// console.log('base file name: ', path.basename(__filename));
// // directory name
// console.log('directory name: ', path.dirname(__dirname));
// console.log('path directory name: ', path.dirname(__filename));
// // file extension
// console.log('file extension: ', path.extname(__filename));
// // create path object
// console.log('create path object: ', path.parse(__filename));
// // concatenate path
// console.log('concatenate path: ', path.join(__dirname, 'test', 'hello.html'));

/** file system modules */

const fs = require('fs');
const name = 'new';
// create a file
fs.mkdir(path.join(__dirname, `/${name}`), {}, (err) => {
    if (err) throw err;
    console.log('folder created ...');
});
// create and write to a file
fs.writeFile(
    // path.join(__dirname, `/${name}`, `hello.txt`), 'Hello World!', (err) => {
        path.join(__dirname, `/${name}`, `hello.txt`), 
        'Hello World!', 
        (err) => {
            if (err) throw err;
            console.log('file created and written ...');
    }
);
// append to file
fs.appendFile(
    path.join(__dirname, `/${name}`, 'hello.txt'),
    'I love Node.js',
    (err) => {
        if (err) throw err;
        console.log('file written ...');
    }
);
// read file
fs.readFile(path.join(__dirname, `/${name}`, 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('file data: ', data);
});
// rename a file
fs.rename(
    path.join(__dirname, `/${name}`, 'hello.txt'),
    path.join(__dirname, `/${name}`, 'hello-renamed.txt'),
    (err) => {
        if (err) throw err;
        console.log('file renamed ...');
    }
)
