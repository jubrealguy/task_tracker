import React from 'react'
import { Todo } from '../modal';
import './styles.css'
import Singletodo from './Singletodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId='Todoslist'>
        {(provided) => (
            <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">Active Tasks</span>
              {todos.map((todo, index) => (
                  <Singletodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
              ))}
              {provided.placeholder}
            </div>
          )}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided) => (
            <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">Completed Tasks</span>
              {completedTodos.map((todo, index) => (
                  <Singletodo index={index} todo={todo} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos} />
              ))}
              {provided.placeholder}
            </div>
          )}
      </Droppable>
    </div>
    // <div className='todos'>
    //   {todos.map((todo) => (
    //     <Singletodo key={todo.id} todo={todo} todos={todos} setTodos = {setTodos} />
    //   ))}
    // </div>
  )
}

export default Todolist
