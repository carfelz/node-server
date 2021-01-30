let http = require('http');
const ip = '127.0.0.1';
const port = 3000;

http.createServer((req, res)=>{
    console.log('request', req.url);
    console.log('response', res);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello world');
}).listen(port, ip, () =>{
    console.log(`Server runing at http://${ip}:${port}`);
});
