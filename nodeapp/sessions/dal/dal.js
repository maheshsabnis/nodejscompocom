const {Sequelize,DataTypes} = require('sequelize');
const path = require('path'); 
 

 
// connet to database
const sequelize = new Sequelize("Company", "root", "P@ssw0rd_", {
    host: 'localhost',
    dialect:'mysql',
    pool: {
        min:0,
        max:5
    },
    define: {
        timestamps:false
    }
});

// map with models
// @ts-ignore
const usermodel = require(path.join(__dirname, './../models/Users'))(sequelize,Sequelize.DataTypes);
// @ts-ignore
const deptmodel = require(path.join(__dirname, './../models/Department'))(sequelize,Sequelize.DataTypes);
// class that contains asyn methods for creating users, authenticating user, generating and validating Tokens
class Logic {
    // method to create user
    async createUser(req,resp){
        let userToCreate = req.body;
        // conectn to DB using Sequelize
        await sequelize.sync({force:false});

        // check is the user exists
        const isUserExist = await usermodel.findOne({where:{UserName:userToCreate.UserName}});
        if(isUserExist !==null) // user alread exist i.e. conflict
            return resp.status(409).send({response: `${userToCreate.UserName} use is already present`});
        
        // create user
        const created = await usermodel.create(userToCreate);    
        return resp.status(200).send({response: `${userToCreate.UserName} Created`});
    }
    // method to authenticate the user
    async authUser(req,resp){
        // read data from body
        let user = req.body;
        console.log(JSON.stringify(user));
         // conectn to DB using Sequelize
         await sequelize.sync({force:false});
         // chck if the user exist
         
        const userToFind = await usermodel.findOne({where:{UserName:user.UserName}});
        console.log(`Searched USer ${JSON.stringify(userToFind)}`);
        if(userToFind === null) // User not found
            return resp.status(404).send({response: `${user.UserName} not found`});
        
        // check the passwod for the user
        if(userToFind.Password.trim() !== user.Password.trim()) // unauthorized
            return resp.status(401).send({response: `Sorry the Pasword for ${user.UserName} is incorrect`});

        // authorize the user and set the session configuration for the user
        req.session.loggedin = true; // user is loggedin and the session context is configured
        req.session.name = user.UserName; // define the session data with its 'name' property    
       
        // respond the tokne to the client
        return resp.status(200).send({
            response: `Login is success for ${user.UserName}`
        });
    }
    // method to authorizae the user based on token
    async getData(req,resp){
       
        // check if the session context is available for the current request
        if(req.session.name === undefined) {
            return resp.status(401).send({response: `Sorry, the session is expired, please login again`});
        }

        await sequelize.sync({force:false});
        const departments = await deptmodel.findAll();
        return resp.status(200).send({message: 'Data Received Successfully', data:departments});
        
    }
    // method for logout
    async logout(req,resp){
       // the session context for the current auth user is removed from session store
       // hence the user cannot access any resources from the server 
       req.session.destroy(); 
       return resp.status(200).send({message: 'You are successfully logged out.'});
    }
}

module.exports = Logic;