import React from 'react'
import { Todo } from '../modal';
import './styles.css'
import Singletodo from './Singletodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <Singletodo key={todo.id} todo={todo} todos={todos} setTodos = {setTodos} />
      ))}
    </div>
  )
}

export default Todolist
