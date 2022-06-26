import React from 'react'
import { BiEditAlt} from 'react-icons/bi';
import {MdDeleteForever, MdDownloadDone} from 'react-icons/md';

import { Todo } from '../model';
import TodoList from './TodoList';

interface Props {
    todo: Todo,
    todos: Todo [],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}



const SingleTodo: React.FC<Props>= ({todo, todos, setTodos}) => {

  const onClickDelete =(id:number) => {
    setTodos(todos=>todos.filter(todo=>todo.id!==id))
  }

  const onClickDone = (id: number) => {
    setTodos(
      todos.map(todo=>{
        if(todo.id===id){
          todo.isDone = true
        }
        return todo;
      })
    )
  }

  return (
    <form
    className='todos__single'
    >
      <span className="todos__single--text">{todo.todo}</span>
      { todo.isDone.toString()}
     

      <div>
        <span className="icon"> <BiEditAlt/></span>
        <span className="icon" onClick={()=>onClickDelete(todo.id)}> <MdDeleteForever /></span>
        <span className="icon" onClick={()=>onClickDone(todo.id)}> <MdDownloadDone /> </span>
      </div>

    </form>
    
  )
}

export default SingleTodo