const express = require('express'); 
const session = require('express-session');
const bodyParser = require ('body-parser');
const cors = require('cors');
const dal = require('./dal/dal.js'); 
 

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

// configure the session middleware with session configuration


app.use(session({
    secret: 'xYz12321zYx',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:3600000}
}));

let dalObj = new dal();


app.post('/api/users/create', dalObj.createUser);
app.post('/api/users/auth', dalObj.authUser);
app.get('/api/departments', dalObj.getData);
app.post('/api/users/logout', dalObj.logout);

app.listen(6001,()=>{
    console.log('Server Started on port 6001');
});