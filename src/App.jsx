import "./styles.css"

export default function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Task</label>
          <input type="text" id="item" placeholder="task name..."/>
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  )
}
