import { Products } from "./database.js";

export class DAL {
   getData(req,resp){
    return resp.status(200).send({data:Products});
   } 

   getDataById(req,resp){
    // read the request parameter from the URL
    let id = req.params.id;
    if(parseInt(id) === 0) {
        return resp.status(400).send(`Header parameter cannot be 0`);
    }

    // search data
    let result = Products.filter((p,idx)=>{
        return p.ProductId === parseInt(id);
    });
    if(result.length === 0){
        return resp.status(404).send(`Product Record based on ProductId ${id} is not found`);
    }
    return resp.status(200).send({data:result});
   } 
   postData(req,resp){
    // parse the body and read the data from the body
    let prd = req.body;
    // write the validation Logic if required
    Products.push(prd);
    return resp.status(200).send({message: 'data saved', data:Products});
   }
   putData(req,resp){
    
   }
   deleteData(req,resp){
    
  }
}