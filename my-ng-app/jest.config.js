// jest.config.js files' configurations
// 1. look for all .spec.ts files under the src folder to read all test cases
// 2. read all TypeScript configuration for reading all .ts files so that they are transpiled
// 3. transpile these files in-memory
// 4. collect code-coverage for all files those are tested

// pathsToModuleNameMapper, read the esModuleInteroperability for
// importing all 'imports' and transpile them in-memory

const {pathsToModuleNameMapper} = require('ts-jest/utils');
// read all compile options
const {compilerOptions} = require('./tsconfig');

// define the jest configiuration for testing
module.exports = {
  preset: 'jest-preset-angular', // loads preset for Angular Object model to be used for testing by jest
  roots: ['<rootDir>/src/'], // the 'src' folder to target to load all test
  testMatch: ['**/+(*.)+(spec).+(ts)'], // test match for all .spec.ts files e.g. src/myfolder/mycomp/test/mytest.spec.ts
  setupFilesAfterEnv:['<rootDir>/src/test.ts'], // load test env. from the test.ts
  collectCoverage: true, // code coverage for sourec file on which the test is written
  coverageReporters:['html'], // report wlill be in HTML file
  coverageDirectory: 'coverage/my-ng-app',  // folder in which coverage reports are saved
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {},  {
    prefix: '<rootDir>/'
  })
};
