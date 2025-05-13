import {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
            <div className = "tabs">
                <Tabs className="nav nav-tabs" defaultActiveKey="All" transition={false} justify>
                    <Tab className="nav-item" eventKey="All" title="All">
                        <ul>
                            {tasks.map((tasks, index) =>
                                <li key = {index}>
                                    <span className = "text">{tasks}</span>
                                    <button className = "delete-button" onClick={() => deleteTask(index)}>🗑️</button>
                                    <button className = "done-button" onClick={() => markComplete(index)}>✔️</button>
                                </li>
                            )}
                            {completedTasks.map((completedTasks, index2) =>
                                <li key = {index2}>
                                    <span className = "text">{completedTasks}</span>
                                    <button className = "delete-button" onClick={() => deleteTask2(index2)}>🗑️</button>
                                </li>
                            )}
                        </ul>
                    </Tab>
                    <Tab className="nav-item" eventKey="Complete" title="Complete">
                        <ul>
                            {completedTasks.map((completedTasks, index2) =>
                                <li key = {index2}>
                                    <span className = "text">{completedTasks}</span>
                                    <button className = "delete-button" onClick={() => deleteTask2(index2)}>🗑️</button>
                                </li>
                            )}
                        </ul>
                    </Tab>
                    <Tab className="nav-item" eventKey="home" title="Home">
                        <ul>
                            {tasks.map((tasks, index) =>
                                <li key = {index}>                       
                                    <span className = "text">{tasks}</span>                            
                                    <button className = "delete-button" onClick={() => deleteTask(index)}>🗑️</button>
                                    <button className = "done-button" onClick={() => markComplete(index)}>✔️</button>
                                </li>
                            )}
                        </ul>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default ToDo