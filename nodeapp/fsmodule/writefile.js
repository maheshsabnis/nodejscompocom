import * as fs from 'fs';
 
// synchronous
fs.writeFileSync('newfile.txt', "This is the file written using fs module");

// asynchronous
fs.writeFile('myfile.txt', "The data is written Asynchronously", (error)=>{
    if(error){
        console.log(`Failed to write ${error.message}`);
        return;
    }
});


