import React from 'react'

const TaskList = ({ taskList, isShowingIncompleted, handeChangeStatusTask, handleRemoveTask }) => {
    return (
        <ul className="task-list">
            {taskList.map(item => {
            return (
                <li key={item.id} className={item.isDone ? "done" : ""} style={isShowingIncompleted && item.isDone ? {display: "none"} : undefined}>
                <span className="label">{item.title}</span>
                <div className="actions">
                    <input 
                    type="checkbox" 
                    className="btn-action btn-action-done" 
                    checked={item.isDone}
                    onChange={() => handeChangeStatusTask(item.id)}
                    />
                    <button className="btn-action btn-action-delete" onClick={() => handleRemoveTask(item.id)}>✖</button>
                </div>
                </li>
            )
            })}
        </ul>
    )
}

export default TaskList;