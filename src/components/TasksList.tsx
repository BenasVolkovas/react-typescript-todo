import React from "react";
import { Task } from "../model";
import SingleTask from "./SingleTask";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TasksList: React.FC<Props> = ({ tasks, setTasks }) => {
    return (
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
    );
};

export default TasksList;
