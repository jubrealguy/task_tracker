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
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {
          todos.map((todo) => (
            <Singletodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
          ))
        }
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {
          todos.map((todo) => (
            <Singletodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
          ))
        }
      </div>
    </div>
    // <div className='todos'>
    //   {todos.map((todo) => (
    //     <Singletodo key={todo.id} todo={todo} todos={todos} setTodos = {setTodos} />
    //   ))}
    // </div>
  )
}

export default Todolist
