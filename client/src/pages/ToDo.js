import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import Auth from "../utils/auth";
import { REMOVE_TASK } from '../utils/mutations';
// Pass in component
import ToDoItem from '../components/ToDo';
import NewTodoForm from '../components/NewToDo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);// Initialize the state for todos array (empty to hold all todos)

  const [removeTask, { data, loading, error }] = useMutation(REMOVE_TASK);

  if (loading) return 'Deleting Selected Task...';
  if (error) return `Error Deleting Selected Task! ${error.message}`;

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

    // Execute the removeTask mutation and pass the deleted task's ID as variables
    try { 
      // IS THIS HOW YOU REFERENCE OUR DBs TASK ID?? 
      removeTask({ variables: {id: deletedTask.id } });

      // Pass in updated and overwrite users previous todos so the deleted one is no longer on the page
      setTodos(updatedTodos);
    } catch (error) {
      // Handle the error if needed
      console.error(error);
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
                onCheck={() => handleCheck(item)} //When item is checked off as completed
                onDelete={() => deleteTodo(item)} //When item is deleted
              />
            ))}
          </ul>
        </div>
        <NewTodoForm />
    </div>
  );
};

export default TodoList;

