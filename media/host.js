const fs = require('fs');
const http = require('https');
http.createServer(function (req,res){
  console.log("Requested url: " + req.url);
  res.writeHead(200, {'Content-Type' : 'text/html'});
  fs.createReadStream('media.html').pipe(res);
}).listen(3000);

console.log("Server running on http://192.168.0.9:3000/");