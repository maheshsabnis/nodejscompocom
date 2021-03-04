// set the jest testing environment configuration
// based on jest-preset-angular
// jest-preset-angular, use the Angular Object Model
// and based on tsconfg the transpilation will takes place
// all Testing Object Models(?) of Angular will be compiled
// and used for executing the test in memory

import 'jest-preset-angular';
// define an in-memory DOM with styles
// set a new CSS for property for window object with default valuen is
// null
Object.defineProperty(window, 'CSS', {value:null});
// define a new property of name 'doctype' with default value as
// value as !<DOCTYPE html>, this means the Component's
// rendered HTML output will be loaded in memory along with its CSS
Object.defineProperty(document, 'doctype', {
  value: '!<<DOCTYPE html>>'
});

// monitor all DOM changes based on Events raised using the test-case
// if any DOM is changed with its property then the test will use
// this property for varifying the test case
Object.defineProperty(document.body.style, 'transform',{
  value:()=>{
    return {
      enumerable:true, // monitor DOM changes
      configurable:true // allow the DOM changes based on the directives
    }
  }
})

