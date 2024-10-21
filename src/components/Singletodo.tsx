import React from 'react'
import { Todo } from '../modal';
import { AiFillEdit} from 'react-icons/ai';
import { MdDelete, MdDone } from 'react-icons/md';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Singletodo: React.FC<Props> = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='todos__single'>
      <span className="todo__single--text">{todo.todo}</span>
      <div>
        <span className="icon"><AiFillEdit /></span>
        <span className="icon"><MdDelete /></span>
        <span className="icon"><MdDone /></span>
      </div>
    </form>
  )
}

export default Singletodo
