import * as http from 'http';
import * as fs from 'fs';
// create a server
// requestListener: request Object and response object
let server =  http.createServer((req,resp)=>{
    fs.readFile('./views/home.html', (error,file)=>{
        if(error) {
            // respond file noty found
            resp.writeHead(404, {'Content-Type': 'text/html'});
            resp.write(error.message);
            resp.end();
        }
        resp.writeHead(200, {'Content-Type': 'text/html'});
        resp.write(file);
        resp.end();
    });
});
// start listening
server.listen(6001);
console.log('Server is listening on port 6001');