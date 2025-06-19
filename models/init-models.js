var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _loan = require("./loan");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var loan = _loan(sequelize, DataTypes);


  return {
    SequelizeMeta,
    loan,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
