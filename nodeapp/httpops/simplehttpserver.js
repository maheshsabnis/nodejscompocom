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