const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

//Boilerplate dependecies for oAuth
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

const port = process.env.PORT || 8080;

const jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-26-ppi9m.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'selinaSongbook ',
    issuer: 'https://dev-26-ppi9m.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);

const {User, Item} = require('./models');

// initialise Express


// specify out request bodies are json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Selina!!!!</h1>')
})

app.get('/users', async (req, res) => {
  //what should i put here?
  let users = await User.findAll()
  res.json({users});
})

app.get('/users/:id', async (req, res) => {
  let user = await User.findByPk(req.params.id);
  res.json({user});
})

// I want to get all items

app.get('/items', async(req, res)=> {
  let items = await Item.findAll();
  res.json({items});
})

// I want to get one item

app.get('/items/:id', async(req, res)=> {
  let item = await Item.findByPk(req.params.id);
  res.json({item});
})

// I want to delete one item

app.delete('/items/:id', async(req, res)=> {
  await Item.destroy({where: {id: req.params.id}});
  res.send('Deleted!')
})

// I want to create one item

app.post('/items', async(req, res)=> {
  let newItem = await Item.create(req.body);
  res.json({newItem})
})

// I want to update one item

app.put('/items/:id', async(req, res)=> {
  let updatedItem = await Item.update(req.body, {
    where : {id : req.params.id}
  });
  res.json({updatedItem})
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});