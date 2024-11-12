const express = require('express');
const pets_info = require('./pets_info');

const app = express();


app.get('/pets', (req, res) => {
  pets_info.all().then(pets => {
    res.json(pets);
  })
})

app.get('/pets/walk', (req, res) => {
  pets_info.walkDataAll().then(walkData => {
    res.json(walkData);
  })
})

app.get('/pets/walk/save', (req, res) => {
  const query = req.query
  const pet_id = query.pet_id
  const walk_time = new Date(query.walk_time)
  const body = {pet_id, walk_time}
  pets_info.walkTimeSave(body).then(walkTime => {
    res.json(walkTime);
  })
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}/`);
});

