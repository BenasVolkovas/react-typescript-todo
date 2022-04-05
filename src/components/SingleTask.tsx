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

    // TODO fix done and edit bugs
    const handleDone = (id: number) => {
        setTasks((currentTasks) =>
            currentTasks.map((t) =>
                t.id === id ? { ...t, isDone: !t.isDone } : t
            )
        );
        console.log(id);
    };

    const handleDelete = (id: number) => {
        setTasks((currentTasks) => currentTasks.filter((t) => t.id !== id));
    };

    const handleEditState = (id: number) => {
        if (!onEdit && !task.isDone) {
            setOnEdit((current) => !current);
        }
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        console.log("edited");

        setTasks((current) =>
            current.map((t) => (t.id === id ? { ...t, task: editedTask } : t))
        );

        setOnEdit((current) => !current);
    };

    return (
        <div className="d-inline-block m-2 w-100">
            <form className="card" onSubmit={(e) => handleEdit(e, task.id)}>
                <div className="card-body d-flex gap-2 p-2">
                    {onEdit ? (
                        <input
                            autoFocus
                            type="text"
                            className="form-control border border-dark"
                            value={editedTask}
                            onChange={(e) => setEditedTask(e.target.value)}
                        />
                    ) : task.isDone ? (
                        <s className="form-control text-start">{task.task}</s>
                    ) : (
                        <div className="form-control text-start">
                            {task.task}
                        </div>
                    )}
                    <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => handleEditState(task.id)}
                    >
                        ✍️
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => handleDelete(task.id)}
                    >
                        🗑️
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => handleDone(task.id)}
                    >
                        ✅
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SingleTask;
