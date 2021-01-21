import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTaskInput, setNewTaskInput] = useState("");

  return (
    <div className="todo">
      <div className="task-box">
        {tasks.map((item, index) => {
          return (
            <div className="task">
              <input
                checked={item.isDone}
                type="checkbox"
                onClick={() => {
                  const newTasks = [...tasks];
                  newTasks[index].isDone = !newTasks[index].isDone;
                  setTasks(newTasks);
                }}
              ></input>
              <div className="title-task">
                <span className={item.isDone === true ? "checked" : ""}>
                  {item.title}
                </span>
              </div>
              <button
                onClick={() => {
                  const newTasks = [...tasks];
                  newTasks.splice(index, 1);
                  setTasks(newTasks);
                }}
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          );
        })}
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const newTasks = [...tasks];
          newTasks.push({
            title: newTaskInput,
            isDone: false,
          });
          setTasks(newTasks);
          setNewTaskInput("");
        }}
      >
        <input
          placeholder="new task"
          value={newTaskInput}
          onChange={(event) => {
            setNewTaskInput(event.target.value);
          }}
        ></input>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default App;
