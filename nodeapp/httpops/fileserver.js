import * as http from 'http';
import * as fs from 'fs';


const emps =[
    {EmpNo:101, EmpName:"A"},
    {EmpNo:102, EmpName:"B"},
    {EmpNo:103, EmpName:"C"}
];

// create a server
// requestListener: request Object and response object
let server =  http.createServer((req,resp)=>{
    if(req.url === '/home') {
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
    }

    if(req.url === '/about') {
        fs.readFile('./views/about.html', (error,file)=>{
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
    }

    if(req.url === '/data') {
        // process the request and generate response
        // write response header
        resp.writeHead(200, {'Content-Type': 'application/json'});
        // write the response 
        resp.write(JSON.stringify(emps));
        // end the current response
        resp.end();
    }

  
});
// start listening
server.listen(6001);
console.log('Server is listening on port 6001');