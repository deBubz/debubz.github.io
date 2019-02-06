var http = require("http");

//function abstraction
http.createServer(function( rq, rsp){
    rsp.writeHead(200, {"ContentType" : "text/plain"});
    rsp.write("<h1>HelloThar</h1>");
    rsp.end();
}).listen(8888); //localhost:8888
