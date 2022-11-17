import React from 'react'

const AddTaskForm = ({ handleSubmit, newTask, setNewTask }) => {
    return (
        <form action="#" className="form" onSubmit={handleSubmit}>
            <label htmlFor="newitem">Add to the todo list</label>
            <input type="text" id="newitem" value={newTask} onChange={e => setNewTask(e.target.value)} />
            <button type="submit">Add Item</button>
        </form>
    )
}

export default AddTaskForm