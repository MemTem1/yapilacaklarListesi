import { useState } from 'react'
import './App.css'
import Todocreate from './component/toDoCreate'
import ToDoList from './component/todoList'
function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])

  }

  const updateTodu = (newTodo) => {
    const upsates = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo
      }
      return newTodo
    })
    setTodos([...upsates])
  }
  console.log(todos)
  return (
    <div className='backGround'>
      <div className='component-container'>
        <Todocreate oncreateTodo={createTodo} />
        <ToDoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodu} />
      </div>


    </div>
  )
}

export default App
