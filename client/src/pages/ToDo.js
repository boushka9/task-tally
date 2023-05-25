import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import Auth from "../utils/auth";
import { ADD_TASK, REMOVE_TASK } from '../utils/mutations';
// Pass in component
import ToDoItem from '../components/ToDo';
import NewTodoForm from '../components/NewToDo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);// Initialize the state for todos array (empty to hold all todos)

  const [removeTask, { error: removeTaskError }] = useMutation(REMOVE_TASK);

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
          {/* Map over only the to-do items that have not been completed (unchecked) */}
          <ul className="todo-items">
            {uncheckedTodos.map((todo, item) => (
                // Pass in To-Do item components and logic to handle check-marked/completed tasks and deleted to-dos
              <ToDoItem
                key={item}
                todo={todo}
                onCheck={() => handleCheck(item)}
                onDelete={() => deleteTodo(item)}
              />
            ))}
          </ul>
        </div>
        <NewTodoForm />
    </div>
  );
};

export default TodoList;

