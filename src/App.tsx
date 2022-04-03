import React, { useState } from "react";
import InputField from "./components/InputField";
import TasksList from "./components/TasksList";
import { Task } from "./model";

const App: React.FC = () => {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddNew = (e: React.FormEvent) => {
        e.preventDefault();

        if (task) {
            setTasks([...tasks, { id: Date.now(), task: task, isDone: false }]);
            setTask("");
        }
    };
    console.log(tasks);

    return (
        <div className="bg-info text-white vh-100 vw-100 text-center d-flex flex-column align-items-center">
            <div className="container">
                <p className="fs-1 mt-3 zindex-tooltip">Todo App</p>
                <InputField
                    task={task}
                    setTask={setTask}
                    handleAdd={handleAddNew}
                />
                <TasksList tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    );
};

export default App;
