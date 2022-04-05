import React from "react";
import { Task } from "../model";
import SingleTask from "./SingleTask";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TasksList: React.FC<Props> = ({ tasks, setTasks }) => {
    return (
        <div className="card bg-light bg-opacity-50">
            <p className="card-title text-dark fs-2 m-2">Tasks</p>
            <div className="d-flex flex-row flex-wrap">
                {tasks.map((t) => (
                    <SingleTask
                        task={t}
                        key={t.id}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                ))}
            </div>
        </div>
    );
};

export default TasksList;
