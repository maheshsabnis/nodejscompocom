var DataTypes = require("sequelize").DataTypes;
var _Department = require("./Department");
var _Employee = require("./Employee");

function initModels(sequelize) {
  var Department = _Department(sequelize, DataTypes);
  var Employee = _Employee(sequelize, DataTypes);

  Employee.belongsTo(Department, { as: "DeptNo_Department", foreignKey: "DeptNo"});
  Department.hasMany(Employee, { as: "Employees", foreignKey: "DeptNo"});

  return {
    Department,
    Employee,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
