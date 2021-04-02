// use require
// the 'fnModule' will be accepted as
// an instance of exported function
// used in standard Node.js app
// loading andf caching the module for the current .js file
 // const fnModule = require('./functionmodule');

 // pure ES 6 standard for importimng mdule
import * as fnModule from './functionmodule.js';
import {Utility} from './classmodule.js';

const arr = [10,2,4,8,16];

let result = fnModule.reverseArray(arr);
// let result = fnModule(arr);
console.log(result);

let obj = new Utility();

const str = "Node.js Moduels";
console.log(`Reverse of ${str} is  = ${obj.reverseString(str)}`);
console.log(`Upper Case of ${str} is  = ${obj.changeCase(str, "L")}`);
console.log(`Lower Case of ${str} is  = ${obj.changeCase(str, "U")}`);