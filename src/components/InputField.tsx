import React from "react";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <div className="w-50 d-inline-block">
            <form className="input-group" onSubmit={handleAdd}>
                <input
                    type="input"
                    placeholder="Enter the task"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
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
