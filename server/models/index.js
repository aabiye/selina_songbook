const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class User extends Model {}

class Song extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

Song.init(
  {
    name: DataTypes.STRING,
    year: DataTypes.FLOAT,
    image: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { User, Song };
