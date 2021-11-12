const path = require("path");
const fs = require("fs").promises;
// const bcrypt = require("bcrypt");

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
  { name: " Bom Bom", year: 1994 , image: "http://krui.fm/wordpress/wp-content/uploads/2017/09/selena-quintanilla-perez.jpg"},
  { name: "Amor Prohibido", year: 1994, image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-murder-1607110158.jpg?crop=0.502xw:1.00xh;0.236xw,0&resize=640:*"},
  { name: "Como La Flor", year: 1992 ,image: "http://images2.fanpop.com/image/photos/11100000/Selena-selena-quintanilla-perez-11166450-636-800.jpg" },
  { name: "Si Una Vez", year: 1994 , image: "https://www.gannett-cdn.com/presto/2020/02/20/PCCT/34fc4731-2b93-4941-8d09-93d255cc0d4a-QuintanillaPerezSelena.jpg"},
  { name: "La Carcacha", year: 1992, image: "https://www.notablebiographies.com/images/uewb_09_img0638.jpg" },
  { name: "Ven Conmigo", year: 1992, image: "https://i2.wp.com/geeksofcolor.co/wp-content/uploads/2018/04/img_0978-1.jpg?resize=1140%2C1143&ssl=1" },
  { name: "La Llamada", year: 1993 , image: "https://i.pinimg.com/originals/38/4d/7d/384d7dc3bc813221bda991bf13fdef2e.jpg"},
  { name: "God's Child", year: 1995, image: "https://data.whicdn.com/images/343325012/original.jpg" },
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
