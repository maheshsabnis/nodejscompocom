import express from 'express'; 
// the body parser for messasge formatter
import bodyParser from 'body-parser';
import {Categories} from './database.js';
import cors from 'cors';
const app = express();
// configure the body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.get('/api/categories',(req,resp)=>{
    resp.status(200).send({data:Categories});
});

 

app.post('/api/categories',(req,resp)=>{
    // parse the body and read the data from the body
    let prd = req.body;
    // write the validation Logic if required
    Categories.push(prd);
    resp.status(200).send({data:Categories});
});




app.listen(6002, ()=>{
    console.log('Started on port 6002');
});
