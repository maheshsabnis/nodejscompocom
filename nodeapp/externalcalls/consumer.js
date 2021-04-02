
import { GetData } from "./callexternal.js";

const serverOptions = {
    host: 'apiapptrainingnewapp.azurewebsites.net', // localhost
    path: '/api/Products',
    method: 'GET', // POST // PUT // DELETE
    // port: 9090 // use in case of on primises server calls
};

const dataToPost = {

};

const serverOptionsPost = {
    host: 'apiapptrainingnewapp.azurewebsites.net', // localhost
    path: '/api/Products',
    method: 'POST', // POST // PUT // DELETE
    headers: {
        'Content-Type':'application/json',
        'Content-Length': dataToPost.length
    }
};

GetData(serverOptions).then((response)=>{
    console.log(`Received Response ${response}`);
}).catch((error)=>{
    console.log(`Error Occured ${error}`);
});

// async function ReceiveData(options){
//     let response = await GetData(options);
//     return response;
// }

// async function ReceiveData1(options){
//     let response = await ReceiveData(options);
//     return response;
// }


// console.log(`Received Response = ${ReceiveData1(serverOptions)}`);

