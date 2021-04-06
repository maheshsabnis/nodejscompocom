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
    

 
// map the departments object with sequelize object ansd its datatypes
const deptModel = require(path.join(__dirname,'./models/Department'))(sequelize, Sequelize.DataTypes);

app.get('/api/departments',(req,resp)=>{
    // subscribe to the sequelize instance
    // sequelize.sync: connect to database based on its metadata and do not create
    // table (or overwrite it)
    // sync() returns Promise<any>, tagt why the 'then()' method
    // can be used to use the mapped model (deptModel) to query using Sequelize
    // the '.then()' returns Promise<any> which is the records read from table
    // that must be subscribe by '.then()' again to read the data. THis '.then()'
    // retuens Promise<void> which can be directly used to extract data from 
    // promise object 
    sequelize.sync({
        force:false // please do not overwrite tables
    }).then(()=>
        deptModel.findAll()  // select all records from the Departments table
    )
    .then((data)=>{
        resp.status(200).send({
            rowCount:data.length,
            rows:data
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});

app.get('/api/departments/:id',(req,resp)=>{
    let id =  req.params.id;
    sequelize.sync({
        force:false  
    }).then(()=>
        deptModel.findOne({
            where: {DeptNo:id}  // the where condition
        })
    )
    .then((data)=>{
        resp.status(200).send({
            rowCount:data.length,
            rows:data
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});


app.post('/api/departments',(req,resp)=>{
    const deptToCreate = req.body;
    sequelize.sync({
        force:false  
    }).then(()=>{
        return deptModel.create(deptToCreate);
    })
    .then((data)=>{
        resp.status(200).send({
            message:'Record Inserted Successfully',
            rows:JSON.stringify(data)
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});


app.put('/api/departments/:id',(req,resp)=>{
    const dept = req.body;
    const id = req.params.id;
    sequelize.sync({
        force:false  
    }).then(()=>
       deptModel.update({
           DeptName: dept.DeptName,
           Location:dept.Location,
           Capacity:dept.Capacity
       }, {where:{DeptNo:id}})
    )
    .then((data)=>{
        resp.status(200).send({
            message:'Record Inserted Successfully',
            rows:JSON.stringify(data)
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});

app.delete('/api/departments/:id',(req,resp)=>{
    let id =  req.params.id;
    sequelize.sync({
        force:false  
    }).then(()=>
        deptModel.destroy({
            where: {DeptNo:id}  // the where condition
        })
    )
    .then((data)=>{
        resp.status(200).send({
            message:"Record Deleted Successfully",
            rows:data
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});


app.listen(6001, ()=>{
    console.log('Started on port 6001');
});
