const express = require('express');
const db = require('./knex');

const app = express();

app.use(express.json());

app.get('/pets', (req, res) => {
  const pet_list = db("pets");
  res.send(pet_list)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}/`);
});
