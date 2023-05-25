import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth'
// Pass in component
import ToDoItem from '../components/ToDoItem';
import NewTodoForm from '../components/NewToDo';
import { QUERY_TASKS } from '../utils/queries';

const TodoList = () => {
  const { data: taskData, loading: loadingRender, error: renderError } = useQuery(QUERY_TASKS);
  const [checkedTodoIds, setCheckedTodoIds] = useState([]);
  const [todos, setTodos] = useState([]);

  console.log(taskData);

  useEffect(() => {
    if (taskData) {
      const checkedTodos = taskData.tasks.filter(todo => todo.checked === false);
      setTodos(checkedTodos);
    }
  }, [taskData]);


  const handleCheck = (todoId) => {
    setCheckedTodoIds((prevIds) => {
      if (prevIds.includes(todoId)) {
        return prevIds.filter((id) => id !== todoId);
      }
      return [...prevIds, todoId];
    });
  };

  if (loadingRender) return 'Loading Tasks...';
  if (renderError) return `Error Rendering Tasks! ${renderError.message}`;
  return (
    <div>
      <h1>To-do List</h1>
      {Auth.loggedIn() ? (
        <div className='to-do-page'>
          <div className="todo-list">
            <ul className="todo-items">
              {todos.map((todo) => (
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
      ) : (
        <h1><a className="auth-login" href="/">Log in</a> to view your tally!</h1>
      )}
    </div>
  );
  
};


export default TodoList;

