import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import Auth from "../utils/auth";
import { ADD_TASK, REMOVE_TASK } from '../utils/mutations';
// Pass in component
import ToDoItem from '../components/ToDo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);// Initialize the state for todos array (empty to hold all todos)
  const [newTodo, setNewTodo] = useState(''); //Initialize new todo items
  const [newScore, setNewScore] = useState(0);

  //Invoke 'useMutation' hook for returned promise data - can't call two errors in the same scope.. renamed them
  const [addTask, { error: addTaskError }] = useMutation(ADD_TASK);
  const [removeTask, { error: removeTaskError }] = useMutation(REMOVE_TASK);

    // Get value of entered new todo use it for setNewTodo
  const inputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const scoreValue = (e) => {
    setNewScore(parseInt(e.target.value));
  };

  // Add todo, can't be an empty string, add it to the existing array of todos w the check mark unchecked 
  // Each todo item is an object w the body and checked value (should be able to sort todos by checked: true/false)
  const addTodo = async () => {
    if (newTodo.trim() !== '') {
      const newTask = { body: newTodo, checked: false, score: newScore };

      try {
        // Execute the addTask mutation and pass the newTask as variables
        await addTask({
          variables: {
            data: {
              task: newTask,
            },
          },
        });
        // Add the new todo item to the end of the existing array of todos
        setTodos([...todos, newTask]);
        setNewTodo('');
      } catch (error) {
        // Handle the error if needed
        console.error(error);
        if (addTaskError) {
          // Handle addTaskError specifically 
          console.error('Error adding task:', addTaskError);
        }
      }
    }
  };

   // when an item is checked the todos array will be updated to reflect the change from checked: false to true
  const handleCheck = (item) => {
    const updatedTodos = [...todos];
    updatedTodos[item].checked = !updatedTodos[item].checked;
    setTodos(updatedTodos);
  };

  // Filter array to exclude items that are checked
  const uncheckedTodos = todos.filter((todo) => !todo.checked);


  // Remove the selected item in array w splice method and then setTodos state with the updated array
  const deleteTodo = (item) => {
    const updatedTodos = [...todos];
    const deletedTask = updatedTodos.splice(item, 1)[0];

    try {
      // Execute the removeTask mutation and pass the deleted task's ID as variables
      removeTask({
        variables: {
          id: deletedTask.id, // IS THIS HOW YOU REFERENCE OUR DBs TASK ID?? 
        },
      });
    // Pass  updated and overwrite users previous todo data
      setTodos(updatedTodos);
    } catch (error) {
      // Handle the error if needed
      console.error(error);
    }
    if (removeTaskError) {
      // Handle removeTaskError, e.g., display an error message
      console.error('Error removing task:', removeTaskError);
    }
  };

  return (
    <div className='to-do-page'>
        <h1>Todo List</h1>
        <div className="todo-list">

          <ul className="todo-items">
            {uncheckedTodos.map((todo, item) => (
                // Pass in To-Do item components
              <ToDoItem
                key={item}
                todo={todo}
                onCheck={() => handleCheck(item)}
                onDelete={() => deleteTodo(item)}
              />
            ))}
          </ul>
        </div>
        <div className="new-todo">
          <input
            type="body"
            value={newTodo}
            onChange={inputChange}
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
    </div>
  );
};

export default TodoList;

