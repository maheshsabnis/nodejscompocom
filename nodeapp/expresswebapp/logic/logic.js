// es6 imports
import express from 'express';

import * as path from 'path';


// define an instance of the express

const app = express();


// create a static file middleware for express

app.use(
    express.static("./../../node_modules/jquery/dist")
);

app.use(
    express.static("./../../node_modules/bootstrap/dist/css")
);
// static miiddleware for anguar build
app.use(
    express.static("./../my-ng-app")
);
// create a route object
const router = express.Router();
// add a route as a middleware in the express instance
app.use(router);

// create a get request with root path
router.get("/",(req,resp)=>{
    // when the request is received the Router Middleware will match the URI and
    // accordingly execute or process the request
    // __ditname, is the Node.js global varibaler that represents
    // the execution root of the current application
    // path.join(), will join the pages folder with is relative path
    // with the root path of the applciation
    // sendFile() method will perform File IO to read the file and respond it
    // resp.sendFile("index.html",{
    //     root: path.join(__dirname, './../pages')
    // });

    resp.sendFile("index.html",{
        root:"./../pages"
    });
});

router.get("/home",(req,resp)=>{
      
    resp.sendFile("home.html",{
        root:"./../pages"
    });
});

router.get("/about",(req,resp)=>{
      
    resp.sendFile("about.html",{
        root:"./../pages"
    });
});

// rendering angular
router.get("/angular",(req,resp)=>{
      
    resp.sendFile("index.html",{
        root:"./../my-ng-app"
    });
});


// start listening on the port 
app.listen(6001, ()=>{
    console.log('Express App is woking from 6001 port');
});