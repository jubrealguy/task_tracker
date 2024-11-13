import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import Todolist from './components/Todolist';
import {Todo} from './modal';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  const onDragEnd = (result:DropResult) => {
    const { source, destination } = result

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;

    let add,
        active = todos,
        complete = completedTodos

    if (source.droppableId === 'TodosList') {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = complete[source.index]
      complete.splice(source.index, 1)
    }

    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }

    setCompletedTodos(complete)
    setTodos(active)
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Taskify</span>
          <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd} />
          <Todolist todos={todos} setTodos={setTodos} 
                    completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
        </div>
    </DragDropContext>
  );
}

export default App;


// https://www.omdbapi.com/?apikey=28b29b1d&s=Star
// https://www.omdbapi.com/?apikey=28b29b1d&s=them&page=1



// let name: string;
// let age: number | string;
// let isMe: boolean;
// let hobbies: string[];
// let role: [number, string]
// let personName: unknown

// let printName: (name: string) => void

// function printName(name: string) {
//   console.log(name)
// }

// type Person = {
//   name: string;
//   age?: number;
// }

// interface Person {
//   name: string;
//   age?: number;
// }

// let lotsOfPeople: Person[]

// let person: Person = {
//   name: "adebayo",
// };