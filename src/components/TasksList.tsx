import React from "react";
import { Task } from "../model";
import SingleTask from "./SingleTask";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TasksList: React.FC<Props> = ({ tasks, setTasks }) => {
    return (
        <div className="">
            <div className="card">
                <p className="card-title text-dark fs-2 m-2">Active Tasks</p>
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
            <div>
                <p>Completed Tasks</p>
            </div>
        </div>
    );
};

export default TasksList;
