import express from 'express'; 
// the body parser for messasge formatter
import bodyParser from 'body-parser';
import {Products} from './database.js';
import cors from 'cors';
const app = express();
// configure the body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.get('/api/products',(req,resp)=>{
    resp.status(200).send({data:Products});
});

// search operations based on header parameters
app.get('/api/products/:id',(req,resp)=>{
    // read the request parameter from the URL
    let id = req.params.id;
    if(parseInt(id) === 0) {
        resp.status(400).send(`Header parameter cannot be 0`);
    }

    // search data
    let result = Products.filter((p,idx)=>{
        return p.ProductId === parseInt(id);
    });
    if(result.length === 0){
        resp.status(404).send(`Product Record based on ProductId ${id} is not found`);
    }
    resp.status(200).send({data:result});
});

app.post('/api/products',(req,resp)=>{
    // parse the body and read the data from the body
    let prd = req.body;
    // write the validation Logic if required
    Products.push(prd);
    resp.status(200).send({data:Products});
});




app.listen(6001, ()=>{
    console.log('Started on port 6001');
});
