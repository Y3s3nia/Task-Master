import {useState} from 'react'

function ToDo () {
    const [tasks, setTasks] = useState(["Go to gym", "Take a shower", "Go to work"]);
    const [newTask, setNewTask] = useState("");
    let [completedTasks, setCompletedTasks] = useState(["Eat breakfast", "Walk the dog"]);

    function handleInoutChage (event) {
        setNewTask(event.target.value);
    }

    function addTask () {
        if (newTask.trim() !== "") {
            setTasks (t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask (index) {
        const updatedTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
        setTasks(updatedTasks);
    }

    function deleteTask2 (index) {
        const updatedTasks2 = [...completedTasks.slice(0, index), ...completedTasks.slice(index + 1)];
        setCompletedTasks(updatedTasks2);
    }

    function markComplete (index) {
        setCompletedTasks(c => [...c, tasks[index]]);
        const updatedTasks3 = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
        setTasks(updatedTasks3);
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
                {tasks.map((tasks, index) =>
                    <li key = {index}>
                        <span className = "text">{tasks}</span>
                        <button onClick={() => deleteTask(index)}>🗑️</button>
                        <button onClick={() => markComplete(index)}>✔️</button>
                    </li>
                )}
                {completedTasks.map((completedTasks, index2) =>
                        <li key = {index2}>
                            <span className = "text">{completedTasks}</span>
                            <button onClick={() => deleteTask2(index2)}>🗑️</button>
                        </li>
                )}
            </ol>
        </div>
    );
}

export default ToDo