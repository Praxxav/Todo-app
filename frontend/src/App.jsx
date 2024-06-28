import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './components/Createtodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  // fetch("https://todo-app-api-delta.vercel.app/")
  //   .then(async function(res) {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })

  return (
    <div>
      <Createtodo></Createtodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
