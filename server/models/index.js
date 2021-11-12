const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class User extends Model {}

class Song extends Model {}

class PublicSong extends Model {}

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
    fan: DataTypes.FLOAT,
  },
  {
    sequelize,
    timestamps: false,
  }
);

PublicSong.init(
  {
    name: DataTypes.STRING,
    year: DataTypes.FLOAT
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { User, Song, PublicSong };
