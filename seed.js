const path = require("path");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");

const { sequelize } = require("./db");
const { User, Song } = require("./models");

const createUsers = async () => {
  const users = [
    { name: "band", password: "band1234" },
    { name: "legal", password: "legal1234" },
    { name: "media", password: "media1234" },
  ];

  return users;
};

const songs = [
  { name: "Bidi Bidi Bom Bom", year: 1994 },
  { name: "Amor Prohibido", year: 1994 },
  { name: "Como La Flor", year: 1992 },
  { name: "Si Una Vez", year: 1994 },
  { name: "La Carcacha", year: 1992 },
];

const seed = async () => {
  await sequelize.sync({ force: true });

  const users = await createUsers(); // create users w/ encrypted passwords

  const userPromises = users.map((user) => User.create(user));
  const songPromises = songs.map((song) => Song.create(song));
  await Promise.all([...userPromises, ...songPromises]);
  console.log("db populated!");
};

seed();
