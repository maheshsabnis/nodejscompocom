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



3. Working with http Module
    - Creating Web Server
    - The Request Processing
    - Resource Responses using Files
    - Read / Write Operations

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