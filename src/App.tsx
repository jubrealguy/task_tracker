import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import Todolist from './components/Todolist';
import {Todo} from './modal';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
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