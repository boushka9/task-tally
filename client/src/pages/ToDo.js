import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
// import Auth from "../utils/auth";
// Pass in component
import ToDoItem from '../components/ToDo';
import NewTodoForm from '../components/NewToDo';
import { QUERY_TASKS } from '../utils/queries';

const TodoList = () => {
  const { data: taskData, loading: loadingRender, error: renderError} = useQuery(QUERY_TASKS);
  
  console.log(taskData)  

  // Initialize the state for tasks in DB, else empty array to hold all todos
  const [todos, setTodos] = useState(taskData ? taskData.tasks : []);


  if (loadingRender) return 'Loading Tasks...';
  if (renderError) return `Error Rendering Tasks! ${renderError.message}`;

 

  return (
    <div className='to-do-page'>
        <h1>Todo List</h1>
        <div className="todo-list">
          {/* Map over only the to-do items that have not been completed (unchecked) */}
          <ul className="todo-items">
            {todos.map((todo, item) => (
                // Pass in To-Do item components and logic to handle check-marked/completed tasks and deleted to-dos
              <ToDoItem
                key={item}
                todo={todo}
                // onCheck={() => handleCheck(item)} //When item is checked off as completed
                // onDelete={() => deleteTodo(item)} //When item is deleted
              />
            ))}
          </ul>
        </div>
        <NewTodoForm />
    </div>
  );
};

export default TodoList;


