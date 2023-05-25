import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
// import Auth from "../utils/auth";
// Pass in component
import ToDoItem from '../components/ToDoItem';
import NewTodoForm from '../components/NewToDo';
import { QUERY_TASKS } from '../utils/queries';

const TodoList = () => {
  const { data: taskData, loading: loadingRender, error: renderError } = useQuery(QUERY_TASKS);
  const [checkedTodoIds, setCheckedTodoIds] = useState([]);

  console.log(taskData);

  if (loadingRender) return 'Loading Tasks...';
  if (renderError) return `Error Rendering Tasks! ${renderError.message}`;

  const handleCheck = (todoId) => {
    setCheckedTodoIds((prevIds) => {
      if (prevIds.includes(todoId)) {
        return prevIds.filter((id) => id !== todoId);
      }
      return [...prevIds, todoId];
    });
  };

  return (
    <div className='to-do-page'>
      <h1>Todo List</h1>
      <div className="todo-list">
        <ul className="todo-items">
          {taskData.tasks.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onCheck={handleCheck}
              checked={checkedTodoIds.includes(todo.id)}
            />
          ))}
        </ul>
      </div>
      <NewTodoForm />
    </div>
  );
};


export default TodoList;

