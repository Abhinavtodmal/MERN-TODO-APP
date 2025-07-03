require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err))

// Todo Model
const Todo = mongoose.model('Todo', new mongoose.Schema({
  task: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}))

// Routes
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 })
    res.json(todos)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
})

app.post('/api/todos', async (req, res) => {
  try {
    const { task } = req.body
    if (!task) return res.status(400).json({ error: 'Task is required' })
    
    const todo = new Todo({ task })
    await todo.save()
    res.status(201).json(todo)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
})

app.put('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { task, completed } = req.body
    
    const update = {}
    if (task !== undefined) update.task = task
    if (completed !== undefined) update.completed = completed
    
    const todo = await Todo.findByIdAndUpdate(id, update, { new: true })
    if (!todo) return res.status(404).json({ error: 'Todo not found' })
    
    res.json(todo)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
})

app.delete('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await Todo.findByIdAndDelete(id)
    if (!todo) return res.status(404).json({ error: 'Todo not found' })
    res.json({ message: 'Todo deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
})

// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})