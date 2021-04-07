const express = require('express');
// loading the mongoose driver
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const cors = require('cors');
 
// since Node.js communcates with MongoDB Asyncronously
// its is recommended to configure the Global Promise Object
// from Node.js Runtime to MongoDB Service using Mongoose Driver
mongoose.Promise = global.Promise;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// define the MongoDB Database Conneciton
// mongodb, the provider of the instance
// <Server-Name>, the default port is 27017, if different port
// configuration then specify the port, it is mandaory in case of 
// Node.js Docker Images with MongoDB image to use port explicitely
// Name of the collection
// mongodb://<SERVER-NAME>:<PORT>/<COLLECTION>
mongoose.connect("mongodb://localhost/VotersDb",{useNewUrlParser:true});

// create a Model Object 
let voterSchema = new mongoose.Schema({
    PersonId: Number, // mongodb data type
    VoterId: String,
    Name: String,
    Age: Number,
    Address: String,
    City: String,
    VotingLocation:String 
 });
// map the schema with the Collection (Note: if the collection  is not present
// then it will be created)
                            //  name for app,  schema, collection in DB       
let voterModel = mongoose.model("Voters", voterSchema, "Voters");
// the mongoose.model() method will map the schema with collection and
// over the mapping its uses methods for CRUD oeprations

app.get('/api/voters',(req,resp)=>{
    // read all documents from the collection
    voterModel.find().exec((error,documents)=>{
        if(error){
            resp.status(500).send({message:'Error Occured', result:error});
            resp.end();
        }
        resp.status(200).send({message:'Success', result:documents});
        resp.end();
    });
});


app.get('/api/voters/:id',(req,resp)=>{
    let id = req.params.id;
    // read all documents from the collection
    voterModel.findOne({_id:id},(error,document)=>{
        if(error){
            resp.status(500).send({message:'Error Occured in Find', result:error});
            resp.end();
        }
        resp.status(200).send({message:'Record Found', result:document});
        resp.end();
    });
});

app.post('/api/voters',(req,resp)=>{
    let voter = req.body;
    voterModel.create(voter,(error,document)=>{
        if(error){
            resp.status(500).send({message:'Error Occured in Create', result:error});
            resp.end();
        }
        resp.status(200).send({message:'Success', result:document});
        resp.end();
    });
});


app.put('/api/voters/:id',(req,resp)=>{
    let voter = req.body;
    voterModel.findOneAndUpdate({_id:req.params.id},voter,null,(error, document,res)=>{
        if(error){
            resp.status(500).send({message:'Error Occured in Update', result:error});
            resp.end();
        }
        resp.status(200).send({message:'Update Success', result:document, status:res});
        resp.end();
    });
});


app.delete('/api/voters/:id',(req,resp)=>{
    
    voterModel.deleteOne({_id:req.params.id},null,(error)=>{
        if(error){
            resp.status(500).send({message:'Error Occured in Delete', result:error});
            resp.end();
        }
        resp.status(200).send({message:'Delete Success'});
        resp.end();
    });
});


app.listen(6001, ()=>{
    console.log('Started on port 6001');
});
