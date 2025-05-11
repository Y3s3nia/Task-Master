import {useState} from 'react'

function ToDo () {
    const [tasks, setTasks] = useState(["Eat breakfast", "Go to gym", "Take a shower"]);
    const [newTask, setNewTask] = useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

    function handleInoutChage (event) {
        setNewTask(event.target.value);
    }

    function addTask () {
        setTasks (t => [...t, newTask]);
        setNewTask("");
    }

    function deleteTask (index) {
    
    }

    function markComplete () {

    }
    return (
        <div> 
            <h1>Task Master</h1>
            <h2>To-Do List</h2>
            <div> 
                <input type="text" value={newTask} onChange={handleInoutChage} placeholder="Add a new task" />
                <button className = "add-button" onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key = {index}>
                        <span className = "text">{task}</span>
                        <button className = "delete-button"
                        onClick = {deleteTask(index)}>🗑️</button>
                        <button className = "complete-button"
                        onClick={() => markComplete(index)}>Done</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDo