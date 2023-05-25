import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TASK } from '../utils/mutations';

const NewTodoForm = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState('');
  const [newScore, setNewScore] = useState(0);
  const [addTask, { error: addTaskError }] = useMutation(ADD_TASK);

  
  const inputTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const scoreValue = (e) => {
    setNewScore(parseInt(e.target.value));
  };

  const addTodo = async () => {
    if (newTodo.trim() !== '') {
      const newTask = { body: newTodo, checked: false, score: newScore };

      try {
        await addTask({
          variables: {
            data: {
              task: newTask,
            },
          },
        });

        setTodos((prevTodos) => [...prevTodos, newTask]);
        setNewTodo('');
        } catch (error) {
        console.error(error);
        if (addTaskError) {
          console.error('Error adding task:', addTaskError);
        }
      }
    }
  };

  return (
    <div className="new-todo">
      <input
        type="body"
        value={newTodo}
        onChange={inputTodo}
        placeholder="Add a new task to your tally!"
      />
      <input
        type="number"
        value={newScore}
        onChange={scoreValue}
        placeholder="Enter the score"
      />
      <button onClick={addTodo}>Add!</button>
    </div>
  );
};

export default NewTodoForm;
