const dbConfig = require("../config/dbconfig.js");

const Sequelize = require("sequelize");
const customer = require("./customer.js");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.js")(sequelize, Sequelize);
db.customer = require("./customer.js")(sequelize, Sequelize);
db.role = require("./role.js")(sequelize, Sequelize);


module.exports = db;