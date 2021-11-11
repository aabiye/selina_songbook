const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

//Boilerplate dependecies for oAuth
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const cors = require("cors");

const port = process.env.PORT || 8080;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-aszlcuc8.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "SongsAPI",
  issuer: "https://dev-aszlcuc8.us.auth0.com/",
  algorithms: ["RS256"],
});

// app.use(jwtCheck);

app.get("/authorized", function (req, res) {
  res.send("Secured Resource");
});

app.listen(port);

const { User, Song } = require("./models");

// initialise Express

// specify out request bodies are json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Selina!!!!</h1>");
});

app.get("/users", async (req, res) => {
  //what should i put here?
  let users = await User.findAll();
  res.json({ users });
});

app.get("/users/:id", jwtCheck, async (req, res) => {
  let user = await User.findByPk(req.params.id);
  res.json({ user });
});

// I want to get all songs

app.get("/songs", async (req, res) => {
  let songs = await Song.findAll();
  res.json({ songs });
});

// I want to get one song

app.get("/songs/:id", jwtCheck, async (req, res) => {
  let song = await Song.findByPk(req.params.id);
  res.json({ song });
});

// I want to delete one song

app.delete("/songs/:id", jwtCheck, async (req, res) => {
  await Song.destroy({ where: { id: req.params.id } });
  res.send("Deleted!");
});

// I want to create one song

app.post("/songs", jwtCheck, async (req, res) => {
  let newSong = await Song.create(req.body);
  res.json({ newSong });
});

// I want to update one song

app.put("/songs/:id", jwtCheck, async (req, res) => {
  let updatedSong = await Song.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ updatedSong });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
