import React from "react";
import { Task } from "../model";

type Props = {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
    return (
        <div className="w-50 d-inline-block m-2">
            <form className="card">
                <div className="card-body d-flex gap-2 p-3">
                    <input
                        type="text"
                        className="form-control"
                        value={task.task}
                    />
                    <button className="btn btn-outline-dark">✍️</button>
                    <button className="btn btn-outline-dark">🗑️</button>
                    <button className="btn btn-outline-dark">✅</button>
                </div>
            </form>
        </div>
    );
};

export default SingleTask;
