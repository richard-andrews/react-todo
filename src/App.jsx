import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { Todolist } from "./TodoList"

export default function App() {
  const [todos, setToDos] = useState([])

  function addTodo(title) {
    setToDos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(),
          title: title,
          completed: false},
      ]
    })
  }

  function toggleTodo(id, completed) {
    setToDos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          todo.completed = completed
          return {...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setToDos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
      })
  }

  console.log(todos)

  return (
    <>
        <NewTodoForm onSubmit={addTodo}/>
        <h1 className="header">ToDo List</h1>
        <Todolist 
            todos={todos}
            toggleToDo={toggleTodo}
            deleteToDo={deleteTodo}
        />
    </>
  )
}
