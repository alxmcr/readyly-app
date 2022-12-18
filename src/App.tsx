import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './pages/HomePage'
import AppHeader from './components/AppHeader'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <HomePage />
      <TaskForm />
    </div>
  )
}

export default App
