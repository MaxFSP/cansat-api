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
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  pressure: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  height: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  co2: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tvoc: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  uv: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gps: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Log;
