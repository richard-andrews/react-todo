import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setToDos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setToDos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(),
          title: newItem,
          completed: false},
      ]
    })
    setNewItem("")
  }
  function toggleToDo(id, completed) {
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

  function deleteToDo(id) {
    setToDos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
      })
  }

  console.log(todos)

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Task</label>
          <input type="text"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">ToDo List</h1>
        <ul className="list">
          {todos.length === 0 && "No todos"}
          {todos.map(todo => {
            return (
              <li key={todo.id}>
                <label>
                  <input type="checkbox"
                    checked={todo.completed}
                    onChange={e => toggleToDo(todo.id, e.target.checked)}/>
                    {todo.title}
                </label>
                <button className="btn btn-danger" 
                  onClick={() => deleteToDo(todo.id)}>Delete
                </button>
              </li>
            )
          })}
        </ul>
    </>
  )
}
