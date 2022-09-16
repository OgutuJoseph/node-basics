const dotenv = require('dotenv');
dotenv.config();

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
// // create a file
// fs.mkdir(path.join(__dirname, `/${name}`), {}, (err) => {
//     if (err) throw err;
//     console.log('folder created ...');
// });
// // create and write to a file
// fs.writeFile(
//     // path.join(__dirname, `/${name}`, `hello.txt`), 'Hello World!', (err) => {
//         path.join(__dirname, `/${name}`, `hello.txt`), 
//         'Hello World!', 
//         (err) => {
//             if (err) throw err;
//             console.log('file created and written ...');
//     }
// );
// // append to file
// fs.appendFile(
//     path.join(__dirname, `/${name}`, 'hello.txt'),
//     'I love Node.js',
//     (err) => {
//         if (err) throw err;
//         console.log('file written ...');
//     }
// );
// // read file
// fs.readFile(path.join(__dirname, `/${name}`, 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('file data: ', data);
// });
// // rename a file
// fs.rename(
//     path.join(__dirname, `/${name}`, 'hello.txt'),
//     path.join(__dirname, `/${name}`, 'hello-renamed.txt'),
//     (err) => {
//         if (err) throw err;
//         console.log('file renamed ...');
//     }
// );

/** operating system modules */
const os = require('os');
// platform
// console.log('OS platform: ', os.platform());
// // cpu architecture
// console.log('OS architecture: ', os.arch());
// // cpu core info
// console.log('CPU core info: ', os.cpus());
// // free memory
// console.log('Free memory: ', os.freemem());
// // total memory
// console.log('Total memory: ', os.totalmem());
// // home directory
// console.log('Home directory: ', os.homedir());
// // uptime
// console.log('OS uptime: ', os.uptime());

/** URL modules */
const url = require('url');
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');
// // serialized URL
// console.log('serialized url: ', myUrl.href);
// console.log('serialized url tostring: ', myUrl.toString());
// // host (root domain)
// console.log('host: ', myUrl.host);
// // hostname (does not get port)
// console.log('hostname: ', myUrl.hostname);
// // pathname
// console.log('pathname: ', myUrl.pathname);
// // serialized query
// console.log('search query: ', myUrl.search);
// // params object
// console.log('search query params: ', myUrl.searchParams);
// // add param
// myUrl.searchParams.append('abc', '123');
// console.log('search params with appends: ', myUrl.searchParams);
// // loop through params
// myUrl.searchParams.forEach((value, name) => { console.log(`${name} : ${value}`) });

/** events modules */
const EventEmitter = require('events');
const port = process.env.PORT;
// // create class
// class MyEmitter extends EventEmitter {};
// // init object
// const myEmitter = new MyEmitter();
// // event listener
// myEmitter.on('event', () => console.log('Event fired ...'));
// // init event
// myEmitter.emit('event');

/** http modules */
const http = require('http');
// create server object
http
    .createServer((req, res) => {
        // write response
        res.write('Hi there!');
        res.end();
    })
    .listen(`${port}`, () => console.log(`Server running on ${port}`))