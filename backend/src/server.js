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

app.get('/pets/meal', (req, res) => {
  pets_info.mealDataAll().then(mealData => {
    res.json(mealData);
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

app.get('/pets/meal/save', (req, res) => {
  const query = req.query
  const pet_id = query.pet_id
  const meal_time = new Date(query.meal_time)
  const body = {pet_id, meal_time}
  pets_info.mealTimeSave(body).then(mealTime => {
    res.json(mealTime);
  })
})

app.get('/pets/addPet', (req, res) => {
  const query = req.query
  const name = query.name
  const birthday = query.birthday
  const dog_breed = query.dog_breed
  const picture_src = query.picture_src
  const body = {name, birthday, dog_breed, picture_src}
  pets_info.addPetSave(body).then(addPet => {
    res.json(addPet);
  })
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}/`);
});

