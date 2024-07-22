const express = require('express');

const router = express.Router()

const Task = require('../models/task')

router.get('/tasks', async (req, res) => {
  try{
    const data = await Task.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.post('/tasks', async (req, res) => {
  console.log(req.body)
  const data = new Task({...req.body})

  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.get('/tasks/:id', async (req, res) => {
  try{
    const data = await Task.findById(req.params.id);
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.patch('/tasks/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Task.findByIdAndUpdate(
      id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/tasks/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router;
