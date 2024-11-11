const express = require('express');
const pets_info = require('./pets_info');

const app = express();


app.get('/pets', (req, res) => {
  pets_info.all().then(pets => {
    res.json(pets);
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}/`);
});

