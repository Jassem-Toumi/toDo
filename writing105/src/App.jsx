import { useState } from 'react'
import './App.css'
import { TodoWrapper } from './components/TodoWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-wrapper'>
      <h1>Todo List</h1>
      <TodoWrapper />
    </div>
  )
}

export default App
