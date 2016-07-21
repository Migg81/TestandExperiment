var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
console.log("Received Request: " + request.url);
    if(request.url.indexOf('.html') != -1) {
        fs.readFile( request.url, function (error, data) {
            if (error) {
                response.writeHead(404, {"COntent-type":"text/plain"});
                response.end("No Html Page Found.");
            } else{
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end(); 
            }

        });
    }
    else if(request.url.indexOf('.js') != -1) {
        fs.readFile("game" + request.url, function (error, data) {
            if (error) {
                response.writeHead(404, {"COntent-type":"text/plain"});
                response.end("No Javascript Page Found.");
            } else{
                response.writeHead(200, {'Content-Type': 'text/javascript'});
                response.write(data);
                response.end(); 
            }

        });
    }
    else if(request.url.indexOf('.css') != -1) {
        fs.readFile("game" + request.url, function (error, data) {
            if (error) {
                response.writeHead(404, {"COntent-type":"text/plain"});
                response.end("No Css Page Found.");
            } else{
                response.writeHead(200, {'Content-Type': 'text/css'});
                response.write(data);
                response.end(); 
            }

        });
    }
    else {
        console.log("Inside the inside else statement");
        response.writeHead(404, {"COntent-type":"text/plain"});
        response.end("No Page Found");
    }
}).listen(5858); 