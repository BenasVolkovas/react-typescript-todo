import React from "react";

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ task, setTask, handleAdd }) => {
    return (
        <div className="w-50 d-inline-block">
            <form className="input-group" onSubmit={handleAdd}>
                <input
                    type="input"
                    placeholder="Enter the task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="form-control"
                />
                <button type="submit" className="btn btn-dark">
                    Go
                </button>
            </form>
        </div>
    );
};

export default InputField;
