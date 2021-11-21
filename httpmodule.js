const { Socket } = require('dgram');
const http =require('http');

const server= http.createServer((req,res)=>{

    if(req.url === '/'){
        res.write("hello world");
        res.end();
    }

    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5,6,7]));
        res.end();
    }
});
var port= 3000;
server.on('connection',(socket)=>{
    console.log("new Connection")
})
server.listen(port);
console.log('listerner on port 3000')
