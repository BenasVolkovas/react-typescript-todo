import React, { useState } from "react";
import InputField from "./components/InputField";
import { Task } from "./model";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddNew = (e: React.FormEvent) => {
        e.preventDefault();
    };
    console.log(todo);

    return (
        <div className="bg-info text-white vh-100 vw-100 text-center d-flex flex-column align-items-center">
            <div className="container">
                <p className="fs-1 mt-3 zindex-tooltip">Todo App</p>
                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    handleAdd={handleAddNew}
                />
            </div>
        </div>
    );
};

export default App;
