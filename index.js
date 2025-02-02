const express = require('express');
const app = express()
app.use(express.json())

const mongoose = require('mongoose');

const routes = require('./routes/routes')
app.use('/api', routes)

require('dotenv').config();
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const PORT = 6066

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`)
})
