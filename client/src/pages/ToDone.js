import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TASKS } from '../utils/queries';
import ToDoneItem from '../components/ToDoneItem';
import Auth from '../utils/auth';
import QuoteCard from "../components/QuoteCard";


const ToDoneList = () => {
  const { data: taskData, loading: loadingRender, error: renderError } = useQuery(QUERY_TASKS);

  const [todos, setTodos] = useState([]);

  // Filter the taskData array to get only the items with checked: true
  useEffect(() => {
    if (taskData) {
      const checkedTodos = taskData.tasks.filter(todo => todo.checked === true);
      setTodos(checkedTodos);
    }
  }, [taskData]);

  if (loadingRender) return 'Loading Tasks...';
  if (renderError) return `Error Rendering Tasks! ${renderError.message}`;

  return (
    <div>
      <h1>To-Done List</h1>
      {Auth.loggedIn() ? (
      <div className='to-do-page'>
        <div className="todo-list">
          <ul className="todo-items">
          {todos.map((todo, item) => (
            <ToDoneItem
              key={item}
              todo={todo}
            />
          ))}
        </ul>
        </div>
        <QuoteCard />
      </div>
      ) : (
        <h1><a className="auth-login" href="/">Log in</a> to view your tally of completed tasks!</h1>
      )}
    </div>
  );
};

export default ToDoneList;
