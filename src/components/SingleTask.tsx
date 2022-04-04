import React, { useState } from "react";
import { Task } from "../model";

type Props = {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
    const [onEdit, setOnEdit] = useState<boolean>(false);
    const [editedTask, setEditedTask] = useState<string>(task.task);

    const handleDone = (id: number) => {
        setTasks((currentTasks) =>
            currentTasks.map((t) =>
                t.id === id ? { ...t, isDone: !t.isDone } : t
            )
        );
        console.log("changed");
    };

    const handleDelete = (id: number) => {
        setTasks((currentTasks) => currentTasks.filter((t) => t.id !== id));
    };

    const handleEdit = (id: number) => {
        if (!onEdit && !task.isDone) {
            setOnEdit((current) => !current);
        }
    };

    return (
        <div className="d-inline-block m-2 flex-grow-1">
            <div className="card">
                <div className="card-body d-flex gap-2 p-2">
                    {onEdit ? (
                        <input
                            type="text"
                            className="form-control"
                            value={task.task}
                        />
                    ) : task.isDone ? (
                        <s className="form-control text-start">{task.task}</s>
                    ) : (
                        <div className="form-control text-start">
                            {task.task}
                        </div>
                    )}
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => handleEdit(task.id)}
                    >
                        ✍️
                    </button>
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => handleDelete(task.id)}
                    >
                        🗑️
                    </button>
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => handleDone(task.id)}
                    >
                        ✅
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;
