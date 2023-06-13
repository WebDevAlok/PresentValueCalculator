const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const port = 3000
const DroneModel = require('./models/DroneModel')

mongoose.connect('mongodb://127.0.0.1:27017/dji-data');

const db = mongoose.connection;
db.on("error", console.error.bind(console,'connection error:'));
db.once("open", () => {
    console.log('Database Connected');
});

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', async(req, res) => {
	const data = await DroneModel.find({});
  res.render('calculator.ejs', { data });
})

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`)
})