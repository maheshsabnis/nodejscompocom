const express = require('express'); 
const bodyParser = require ('body-parser');
const cors = require('cors');
const path = require('path');
const  {Sequelize,DataTypes} = require('sequelize');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

 
app.use(cors({
    origin:"*",  
    methods:"*",
    allowedHeaders:"*"
}));

// use the sequelize object to connect to database
// pass the parameters databse metadata e.g. DbName, UserName and Password
// pass the options as database metadata
const sequelize = new Sequelize("Company", "root", "P@ssw0rd_", {
    host: 'localhost', // the name of the server
    dialect: 'mysql', // the database provider
    pool:{
        max:5,
        min:0,
        idle:10000
    },
    define: { // Model mapping policies
        timestamps:false // supress the concurrency for insert update and delete
    }
});
    
async function getEmployees(){
    let result = await sequelize.query('CALL getEmployees("Manager")');
    return result;
}

async function createDepartment(){
    let result = await sequelize.query(
        'CALL sp_createDepartment(11, "IT-ES11", "Pune",1000)');
    return result;
}

createDepartment().then((result)=>{
    console.log(JSON.stringify(result));
}).catch((error)=>{
    console.log('Error Occured');
});

app.get('/api/sps',(req,resp)=>{
    getEmployees().then((result)=>{
        console.log(JSON.stringify(result));
        resp.status(200).send({message:'Data Retrived Sucessfully', data:result});
        resp.end();
    }).then((error)=>{
        console.log('Error Occured');
        resp.status(500).send({message:'Error Occured', data:error});
        resp.end();
    });
});


app.listen(6001, ()=>{
    console.log('Started on port 6001');
});
