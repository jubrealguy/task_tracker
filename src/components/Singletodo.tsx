import React, { useEffect, useRef, useState} from 'react'
import { Todo } from '../modal';
import { AiFillEdit} from 'react-icons/ai';
import { MdDelete, MdDone } from 'react-icons/md';
import './styles.css'

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Singletodo: React.FC<Props> = ({todo, todos, setTodos}: Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, isDone: !todo.isDone}: todo
      )
    )
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit)
    }
  }

  const handleEditSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, todo: editTodo} : todo
    )))
    setEdit(false)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='todos__single' onSubmit={(e) => handleEditSubmit(e, todo.id)}>
      {
        edit ? (
          <input type='text' value={editTodo}
          ref = {inputRef}
          onChange={(e) => setEditTodo(e.target.value)}
          className='todo__single--text'/>
        ) : (
          todo.isDone ? (
            <s className="todo__single--text">{todo.todo}</s>
          ):(
            <span className="todo__single--text">{todo.todo}</span>
          )
        )
      }
      
      <div>
        <span className="icon" onClick={() => handleEdit()}><AiFillEdit /></span>
        <span className="icon" onClick={() => handleDelete(todo.id)}><MdDelete /></span>
        <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
      </div>
    </form>
  )
}

export default Singletodo
