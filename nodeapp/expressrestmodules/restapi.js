import express from 'express'; 
// the body parser for messasge formatter
import bodyParser from 'body-parser';
import cors from 'cors';
import {Products} from './database.js';
import { DAL } from "./dal.js";
const app = express();
// configure the body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configure CORS
// origin, the domain that sends request to RESTb APIs
// methods, the HTTP methods
// allowedHeaders, the HTTP Request Header Keys
app.use(cors({
    origin:"*", // http://www.myserver.com,
    methods:"*",
    allowedHeaders:"*"
}));


let dal = new DAL();




app.get('/api/products',dal.getData);

// search operations based on header parameters
app.get('/api/products/:id', dal.getDataById);

app.post('/api/products',dal.postData);

app.put('/api/products/:id',dal.putData);

app.delete('/api/products/:id',dal.deleteData);
 


app.listen(6001, ()=>{
    console.log('Started on port 6001');
});
