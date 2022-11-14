import { useState } from 'react';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([])
  const [value, setValue] = useState("")

  function randomIntFromInterval() { // min and max included 
    return Math.floor(Math.random() * (1000 - 1 + 1) + 1)
  }

  const handleAddTask = (event) => {
    event.preventDefault()
    // id of each task must be unique
    const newTask = {
      id: randomIntFromInterval(),
      name: value,
      isDone: false
    }
    // set TaskList when newTask have data
    setTaskList(previous => ([...previous, newTask]))
    setValue("")
  }

  const handleRemoveTask = (itemId) => {
    const taskListAfterRemove = taskList?.filter(item => item.id !== itemId)
    setTaskList([...taskListAfterRemove])
  }

  const handleMakeDone = (itemId) => {
    const updatedTodo = taskList.map((item) => item.id === itemId ? {
      ...item,
      isDone: true
    } : item);
    setTaskList([...updatedTodo])
  }

  const handleUnDone = (itemId) => {
    const updatedTodo = taskList.map((item) => item.id === itemId ? {
      ...item,
      isDone: false
    } : item);
    setTaskList([...updatedTodo])
  }

  return (
    <div className="App">
      <form className='create-container' onSubmit={handleAddTask}>
        <input type="text" value={value} onChange={event => setValue(event.target.value)} />
        <button type='submit'>Add task</button>
      </form>
      <hr />
      <div className='display-container'>
        {taskList?.map(item => {
          return (
            <div key={item.id}>
              <div className='display-item' style={item.isDone ? {textDecoration: "line-through"} : undefined}>
                {item.name}
              </div>
              <button onClick={() => handleRemoveTask(item.id)}>Remove</button>
              <button onClick={() => handleMakeDone(item.id)}>Make done</button>
              <button onClick={() => handleUnDone(item.id)}>Undone</button>
              <hr />
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default App;