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
    if(files.length >0) {
        // iterate
        files.forEach((file,index)=>{
            // please read files and skip subfolders / subdirectories
            fs.stat(`./mydir/${file}`, (err,stat)=>{
                if(err) {
                    console.log(`File Stat error ${err.message}`);
                    return;
                }
                if(stat.isFile()){
                    // logic for reading file
                    console.log(file);
                }
            });
        });
    }


    console.log(files.length);
    console.log(files[0]);
});