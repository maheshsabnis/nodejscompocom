import q from 'q';
import * as http from 'http';
export function GetData(options){
    // create a defer() that will take responsibility
    // of managing the callbacks under te promise conainer
    //  q.defer(), will be used to bundle the undeterministic callback into
    // preducatble execution
    let defer = q.defer();

    // global object for the method
    let responseObject;
    let request;
    if(!options){
        // reject the operations because the metadata is not present for request
        defer.reject(`Server information is note provided`);
    } else {
    // make request to external serverice of which metadata
    // is passed using 'options'
        request = http.request(options,(resp)=>{
            // receice response
            resp.on('data', (data)=>{
                responseObject+=data;
            });  
            // process the response and return it  
            resp.on('end',()=>{
                // good practice is that, if the data processing failed
                // then there must be rejection else resolve
                try{
                    // success return of     
                   defer.resolve(responseObject);
                }catch(ex){
                    // return error
                    defer.reject(`Error in Data Capture ${ex.message}`);
                }
            });
        });
    }
    // end the request
    request.end();
    // return a promise
    // either success or fail will be returned but definitely all
    // calls will be completed
    return defer.promise;
}