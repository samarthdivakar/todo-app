import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Fetch todos from API
  const fetchTodos = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/api/todos`)
      setTodos(response.data)
      setError('')
    } catch (err) {
      setError('Failed to fetch todos')
      console.error('Error fetching todos:', err)
    } finally {
      setLoading(false)
    }
  }

  // Add new todo
  const addTodo = async (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    try {
      setLoading(true)
      const response = await axios.post(`${API_URL}/api/todos`, {
        title: newTodo.trim()
      })
      setTodos([response.data, ...todos])
      setNewTodo('')
      setError('')
    } catch (err) {
      setError('Failed to add todo')
      console.error('Error adding todo:', err)
    } finally {
      setLoading(false)
    }
  }

  // Toggle todo completion
  const toggleTodo = async (id, completed) => {
    try {
      const response = await axios.put(`${API_URL}/api/todos/${id}`, {
        completed: !completed
      })
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ))
      setError('')
    } catch (err) {
      setError('Failed to update todo')
      console.error('Error updating todo:', err)
    }
  }

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/todos/${id}`)
      setTodos(todos.filter(todo => todo._id !== id))
      setError('')
    } catch (err) {
      setError('Failed to delete todo')
      console.error('Error deleting todo:', err)
    }
  }

  // Load todos on component mount
  useEffect(() => {
    fetchTodos()
  }, [])

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>📝 Simple Todo App</h1>
          <p className="subtitle">
            Stay organized and productive
          </p>
        </header>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form className="add-todo-form" onSubmit={addTodo}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="todo-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="add-button"
            disabled={loading || !newTodo.trim()}
          >
            {loading ? '...' : 'Add'}
          </button>
        </form>

        <div className="stats">
          <span className="stat">
            {completedCount} of {totalCount} completed
          </span>
          {totalCount > 0 && (
            <span className="stat">
              {Math.round((completedCount / totalCount) * 100)}% done
            </span>
          )}
        </div>

        {loading && todos.length === 0 ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <div className="todo-list">
            {todos.length === 0 ? (
              <div className="empty-state">
                <p>No todos yet!</p>
                <p>Add your first todo above to get started.</p>
              </div>
            ) : (
              todos.map(todo => (
                <div key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo._id, todo.completed)}
                      className="todo-checkbox"
                    />
                    <span className="todo-text">{todo.title}</span>
                  </div>
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="delete-button"
                    title="Delete todo"
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
