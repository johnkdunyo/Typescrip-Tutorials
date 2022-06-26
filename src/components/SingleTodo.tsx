import React, { useEffect, useRef, useState } from 'react'
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

  const [editMode, setEditMode] = useState<boolean> (false)
  const [editTodoText, setEditTodoText] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    inputRef.current?.focus()
  }, [editMode]);

  const onClickDelete =(id:number) => {
    setTodos(todos=>todos.filter(todo=>todo.id!==id))
  }

  const onClickDone = (id: number) => {
    setTodos(
      todos.map(todo=>{
        if(todo.id===id){
          todo.isDone = !todo.isDone
        }
        return todo;
      })
    )
  }

  const handleForm =(e: React.FormEvent, id:number) => {
    e.preventDefault()
    setTodos(
      todos.map(todo=>{
        if(todo.id===id){
          todo.todo = editTodoText
        }
        return todo;
      })
    );
    setEditMode(false)
  }


  return (
    <form
    className='todos__single'
    onSubmit={e=>handleForm(e, todo.id)}
    >
      {editMode ? <input ref={inputRef} value={editTodoText} onChange={e=>setEditTodoText(e.target.value)} className='todos__single--text'/> :
      
      todo.isDone ? <s className="todos__single--text">{todo.todo}</s> : <span className="todos__single--text">{todo.todo}</span>}
     
     

      <div>
        <span className="icon" onClick={()=>{
          setEditMode(prev=>!prev)

        }}> <BiEditAlt/></span>
        <span className="icon" onClick={()=>onClickDelete(todo.id)}> <MdDeleteForever /></span>
        <span className="icon" onClick={()=>onClickDone(todo.id)}> <MdDownloadDone /> </span>
      </div>

    </form>
    
  )
}

export default SingleTodo