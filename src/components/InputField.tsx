import React from "react";
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props>= ({todo, setTodo}) => {
    return (
    <form className="input">
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter a task" className="input__box" />
        <button type="submit" className="input__submit">Go</button>
    </form>
)}

export default InputField