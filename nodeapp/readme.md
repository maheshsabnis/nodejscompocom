# Node.js Application Development

Curently used version is Node.js 15.x.x. This supports ES 6 out of the box

Phase 1

1. Basic Fundamentals
    - Simple Node.js app
        - The JavaScript File with Code

``` javascript
console.log('Hello Word of Node.js');
let names = ["Tejas","Mahesh", "Rameshrao","Ramrao"];

console.log(names);
for(let n of names){
    console.log(`Names =  ${n}`);
}

let res = names.filter((n,i)=>{
    return n.startsWith('R');
});
console.log(`Names starts with 'R' = ${res}`);

console.log(names.sort());

```

- Node.js ES 6 Support

```javascript
class MathClass {
    add(x,y){
        return parseInt(x) + parseInt(y);
    }
    mult(x,y){
        return parseInt(x) * parseInt(y);
    }
}

let obj =  new MathClass();
console.log(`Add = ${obj.add(10,20)}`);
console.log(`Mult = ${obj.mult(10,20)}`);
```

- Running Node.js app
    - node <FILENAME>.js

- To use intellisesnse install the following package
    - npm install --save-dev @types/node

- Node.js Modules
    - The Standard Set of functionalities for developing Server-Side Node.js
    - Standard Modules
        - For HTTP Programming
            - http / http2 / https
                - The Server-Side HTTP Processing
                - HTTP 2 is used to provide the content-Type Communication other than text/json/xml/html
        - FileStream Programming
            - The 'fs' module
                - Read / Write Files        
            - The 'Buffer'
                - Character5 Encoding
                - BLOB FIles
            - The 'Stream'
                - Readable and WritableStream
            - The 'Path'
                - Wrking with File Paths
- Load all modules using following statement
    - require('<MODULE-NAME>')
        - Search Module in Node.js Runtime Libraries
        - If FOund then load it and Cache it
        - If not a Standard module, it will be searched on local path, if found then load it and cache it
        - Oterwise, the Module Not FOund Exception and will crash the app.                           

- Node.js ES 6 Modules
    - import statements for importing
        - import {} from 'MODULE-NAME'
2. Working with Files
    - Fs Module
    - Read/Write Files

``` javascript
// 1. load the module by importing it
 
let fs = require('fs');

// synchronous reading
// pass the file path and the encoding to read the datab from file
// and return it
// if the synchronous operation thows an exception, then catch it
// using try..catch block (Error Handling in Node.js)
try {
    let data1 = fs.readFileSync('./../myfile.txt',{encoding: 'ascii'});
    console.log(data1);
    let data2 = fs.readFileSync('./../myfile1.txt',{encoding: 'ascii'});
    console.log(data2);
} catch(ex) {
 console.log(ex.message);
}

// using Asynchronous Operations

fs.readFile('./../myfile1.txt', {encoding:'ascii'},(error,data)=>{
    if(error) {
        console.log(`Error Occured = ${error.message} and ${error.code}`);
        // execute some fallback logic or intercept
        return;
    }
    console.log(data);
});
```

- Write a file

```javascript
// this is .mjs file
import * as fs from 'fs';
 
fs.writeFileSync('newfile.txt', "This is the file written using fs module");
```

- if using ES 6 Startds for import / export in node.js perform one of the following
    - change the extension of the file as .mjs
    - modify the package.json for following settinhs
        - "type":"module"

``` javascript
// read / write directory

import * as fs from 'fs';

// create directory 
fs.mkdir('mydir', (error)=>{
    if(error) {
        console.log(`failed to create directory ${error.message}`);
    return;
    }

  console.log('Directory is created');
});

// reading all files from the directory
fs.readdir("./mydir", (error,files)=>{
    if(error) {
        console.log(`error in reading directory ${error.message}`);
    return;
    }
    // code to read all files
    console.log(files.length);
    console.log(files[0]);
});


```

- important use of Node.js on Server-Side apps
    - Only for Runtime
        - Provides runtime for Front-End Apps to execute
            - Angular / react / Vue etc.
            - The Runtime uses the Standard Modules to Manage the execution of Apps inside Node.js env.
                - e.g. Host Angular App using Angular CLI and execute it based on request 
    - Provides Server-Side Hosting for Apps
        - Use Node.js Standard Modules to design server-side apps
            - REST APIs
            - Http Server
            - File Server
            - Data Access
            - Socket            

- if ypu want to run the  JavaScript file contineously on server install node monitor. This contains filewatcher that monitors changes in JS file and contineously run it
 - npm install -g nodemon

3. Working with http Module
    - Creating Web Server
        - the 'createServer(HttpRequestListener)' method of Http Module
            - Accept the HttpRequestListener
    - The Request Processing
        - HttpRequestListener
            - Accept Http Request
                - Reads url,method,header,querystring
                - The default is 'get' method to accept get request 
    - Resource Responses using Files
        - Accept Request for Responding 
            - Files
            - Data from Files
    - Read / Write Operations
        - Data posted from http request and process it on client
    - External Node.js  modules based on 'http'
        - http-server
            - provides a HTTP server operations for handling requests for Static Resources   
        - lite-server
            - HTTP Server for static resources
        - ExpressJs        

``` javascript
// simple web server
import * as http from 'http';

const emps =[
    {EmpNo:101, EmpName:"A"},
    {EmpNo:102, EmpName:"B"},
    {EmpNo:103, EmpName:"C"}
];

// create a server
// requestListener: request Object and response object
let server =  http.createServer((req,resp)=>{
    // process the request and generate response
    // write response header
    resp.writeHead(200, {'Content-Type': 'application/json'});
    // write the response 
    resp.write(JSON.stringify(emps));
    // end the current response
    resp.end();
});
// start listening
server.listen(6001);
console.log('Server is listening on port 6001');
```

``` javascript
// simpel file server
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
```

``` javascript
// file server based on routes
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

```
# HTTP Module for Resources, Data operations with POST, GET, PUT and Security

``` javascript
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
```


Phase 2

1. Using Node.js Application Development
    - Using Web Appication Framework with Express
        - REST APIs
        - HTTP Requests
        - Static Resources respond using Express
    - Object Relational Management (ORM)
        - Sequelize
    - Using NoSQL with MongoDB
    - Working With Security
        - User Based Management
        - Token BAsed Authentication
        - Session Based Security
Phase 3
1. Application Deployment
    - Using Docker
    - Node.js Web Apps on Premises and on Cloud


# Hands-on Labs

1. Read all files and its contents from the directory
    - Hint: use 'stat' property of 'fs' to check if the content of the directory is 'file' or 'directory' (use fs.stat() and stat.isFile())
    - if the stat is 'directory' the read all files from this directory and all of its subdirectoris (Immediately Today)
    
    - Copy all files from one directory to other directory (Show me tomorrow)

2. Day 2, Create a Web Srever That will read file based on URL and return the file if found
    - The Web Server must have capability to read from all directories and subdirectories to serach the file
    - When user want read the data using the GET request the web server must open the file that contains the data and should return the data to the client.
    - The User can pass a Serach string in URL to read specific data from the file
    - create an array as follows
        - let users = [{username:'', password:'', rights: ['read', 'write']}];
        - when the user sends the request please check the username , password, if they match then check rights of the user and based on that provide data to user else generate unauthorizr error response  