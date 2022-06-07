var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    if (req.method === "GET" && req.url=="/") {
        fs.createReadStream("./index.html", "UTF-8").pipe(res);
    } else if (req.url=="/" && req.method === "POST") {
    
        var body = "{";
        req.on("data", function (c) {
            body += c+"}";
            console.log(body);
        });

        req.on("end", function(){
            res.end(body);
        });
    }

}).listen(1286);



