import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import {Todo} from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  const completedTask = todos.filter(todo=>todo.isDone === true);
  return (
    <div className='container'>
        <Droppable droppableId='TodosList'>
        {(provided, snapshot)=>(
          <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
          >
          <span className="todos__heading">
            Active Tasks
          </span>
          {todos.map((todo, index)=>(
              <SingleTodo 
                  key={todo.id}
                  index={index}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
              />
          ))}
          {provided.placeholder}
        </div>
        )}
        </Droppable>

        <Droppable droppableId='TodosListCompleted'>
          {(provided, snapshot)=>(
            <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${ snapshot.isDraggingOver ? "dragcomplete" : "remove"}`}
            >
            <span className="todos__heading">
              Completed Tasks
            </span>
            {completedTask.map((todo, index)=>(
              <SingleTodo
                  key={todo.id}
                  index={index}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
          )}

        </Droppable>
        
    </div>
  )
}

export default TodoList