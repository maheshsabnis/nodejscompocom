const {Sequelize,DataTypes} = require('sequelize');
const path = require('path'); 
let jwt = require('jsonwebtoken');


// deifning the secret key (NOTE: In Pfroduct use creyprographyic value using 'crypto' module of Nodejs)
const jwtSigneture = {
    jwtSecret: 'jamesbondmi007700imdnobsemaj'
};

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

        // Autorize the user and generate the token
        // use JSON Web Token Algorithm and Signeture for generating the token        
        // sign the user using the secret key. The user will be a payload
        // sign options will be e.g. expiry of the token 
        
        const token = jwt.sign({user}, jwtSigneture.jwtSecret, {
             expiresIn:3600
        });
        // respond the tokne to the client
        return resp.status(200).send({
            response: `Login is success for ${user.UserName}`,
            authStatus:  true,
            token:token
        });
    }
    // method to authorizae the user based on token
    async getData(req,resp){
        // receve the token from the header
        if(req.headers.authorization !== undefined){
            // read the token
                                                        // bearer <TOKEN>
            let receivedToken =  req.headers.authorization.split(" ")[1];
            // pass the token to JWT to decode the request is the token is valid
            // parameter 1: Token
            // parameter 2: The Signeture
            // Parameter 3: The Token verification callback thet will decode and verify to authorizae the user  
            await jwt.verify(receivedToken, jwtSigneture.jwtSecret, async(error, decoded)=>{
                if(error){
                    return resp.status(401).send({response: `Autorization Failed Please Relogin ${error}`});
                }
                // get the decoded value
                // this means success
                req.decode = decoded;
                // get data from the server
                await sequelize.sync({force:false});
                const departments = await deptmodel.findAll();
                return resp.status(200).send({response: `Data is received successfully`, data:departments});
            });
        } else {
            return resp.status(401).send({response: `Autorization Failed with invalid header values`});
        }
    }
}

module.exports = Logic;