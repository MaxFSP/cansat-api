const Sequelize = require("sequelize");
const db = require("../util/database");

const Log = db.define("log", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  weather: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  pressure: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  height: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  co2: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  tvoc: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  uv: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  gps: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Log;
