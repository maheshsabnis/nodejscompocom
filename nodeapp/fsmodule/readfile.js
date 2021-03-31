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