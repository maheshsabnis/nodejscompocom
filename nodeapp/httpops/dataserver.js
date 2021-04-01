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
    console.log(req.headers);

    let authHeader = req.headers.authorization;
    console.log(authHeader);
    // split the authHeader to read UserName and Password and then based on that process the request
    let credentials = authHeader.split(' ')[1];
    console.log(`Credentials ${JSON.stringify(credentials)}`);
    let userName = 'mahesh';
    let password = 'mahesh';
    if(userName === credentials.split(':')[0] && password === credentials.split(':')[1]) {
        if(req.method === "GET" && req.url === '/home') {
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
        } else {
                if(req.method === "GET"){
                    // process the request and generate response
                        // write response header
                        resp.writeHead(200, {'Content-Type': 'application/json'});
                        // write the response 
                        resp.write(JSON.stringify(emps));
                        // end the current response
                        resp.end();
                }
                
             }
        // detect the post operations       
        if(req.method === "POST") {
            let receivedData;    
            // set encoding for received data
            req.setEncoding('utf-8');
            // subscribe to the 'data' event so that data can be
            // read from request
            req.on('data', (data)=>{
                // precess the received data from request stream
                receivedData = data;    
            }).on('end', ()=>{ // pipe the data and end events together so that they will be executed in sequence
                // start using the data
                  // write loginc to pasrse the received form data into JSON and push it in emps
                emps.push(receivedData);
                resp.end(`Hay! I received and processed the data ${JSON.stringify(emps)}`);
            });    
        }   
        
        if(req.method === "PUT") {
            console.log(req.url);
            // read the URL value
            let id = req.url.split('/')[1];
            console.log(`Received id = ${id}`);
    
            let filter = emps.filter((e,i)=>{
                return e.EmpNo === parseInt(id);
            });
            resp.writeHead(200, {'Content-Type': 'application/json'});
            resp.write(JSON.stringify(filter));
            resp.end();
        }
    } else {
        resp.writeHead(401, {'Content-Type': 'text/html'});
        resp.write('UnAuthorized');
        resp.end();
    }

   

});
// start listening
server.listen(6001);
console.log('Server is listening on port 6001');