import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [taskList, setTaskList] = useState([
    { id: 1, title: "Learn JS", isDone: false },
    { id: 2, title: "Code a Todo List", isDone: false}
  ])
  const [newTask, setNewTask] = useState("")
  const [isShowingIncompleted, setIsShowingIncompleted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault() // prevent reload page when submit
    const taskObject = {
      id: Math.floor(Math.random() * (1000 - 3 + 1) + 3), // random number from 3-1000
      title: newTask,
      isDone: false
    }
    setTaskList(prev => {
      return [
        ...prev, // get previous state
        taskObject
      ]
    })
    setNewTask("")
  }

  const handleRemoveTask = (itemId) => {
    const taskListAfterRemove = taskList.filter(item => item.id !== itemId)
    setTaskList(taskListAfterRemove)
  }

  const handeChangeStatusTask = (itemId) => {
    const taskListAfterChangeStatus = taskList.map(item => item.id === itemId ? {
      ...item,
      isDone: !item.isDone
    } : item)
    setTaskList(taskListAfterChangeStatus)
  }

  return (
    <div className="container">
      <Header 
        title="Todo List by Lucy" //props
        subTitle="Get things done, one item at a time." 
      />
      <TaskList 
        taskList={taskList}
        isShowingIncompleted={isShowingIncompleted}
        handeChangeStatusTask={handeChangeStatusTask}
        handleRemoveTask={handleRemoveTask}
      />
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input 
          type="checkbox" 
          id="filter" 
          checked={isShowingIncompleted} 
          onChange={() => setIsShowingIncompleted(!isShowingIncompleted)} 
        />
      </div>
      <AddTaskForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        setNewTask={setNewTask}
      />
    </div>
  )
}

export default App;