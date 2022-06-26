import React, { useState } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {Todo } from './model'

// let name: String;
// let age: string | number;
// // let classs : unknown;

// name = 'johns';
// age = 5;

// type Point = {
//   x: number,
//   y: number
// };

// const pt: Point = {x:5, y:6};
// console.log(pt)

// interface Point3d  {
//   x: number,
//   y: number
// }

// // extensiin insnt possible when you use type
// interface Point3d {
//   z: number;
// }

// const rect : Point3d ={x:5, y:7, z:3}
// console.log(rect)



// console.log(name, age)




const App : React.FC =()  => {
  const [todo, setTodo] = useState<string>(' ')
  const [todos, setTodos] = useState<Todo []>([])


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo!==' '){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo('')
      console.log(todo)
    }
    
  }

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList  todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
