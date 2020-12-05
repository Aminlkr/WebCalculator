var http = require('http');
var fs= require('fs');

var requestHandler = function(req,res){
    var extension = req.url.split('.')[1];
    res.writeHead(200,{
        "Content-Type": "text/" + extension
    });
    console.log("sending",req.url);
    fs.readFile('./static'+req.url,(error, data)=>{
        if(error) res.end();
        else res.end(data);
    })
}

var server = http.createServer(requestHandler);
var host = '192.168.43.123';
var port = 3000;

server.listen(port,host,(error)=>{
    if (error) {
        return console.log('Error occured : ', error );
    }
    console.log('server is listening on ' + host + ':'+ port);
});