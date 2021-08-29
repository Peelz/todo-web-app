import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CreateTodo } from './pages/Create/Create';

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  function addTask(e) {
    e.preventDefault()
    setTasks([...tasks, title])
    setTitle("")
    return
  }

  return (
    <div>
      <ul>
        {tasks.map(item => <li>{item}</li>)}
      </ul>
      <form onSubmit={addTask}>
        <label >Title:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} id="title" />
        <button type="submit">create</button>
      </form>
    </div>
  );
}

export default App;
