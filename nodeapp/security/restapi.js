const express = require('express'); 
const bodyParser = require ('body-parser');
const cors = require('cors');
const dal = require('./dal/dal.js'); 
 

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

let dalObj = new dal();


app.post('/api/users/create', dalObj.createUser);
app.post('/api/users/auth', dalObj.authUser);
app.get('/api/departments', dalObj.getData);

app.listen(6001,()=>{
    console.log('Server Started on port 6001');
});