import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
// import Auth from "../utils/auth";
import { REMOVE_TASK } from '../utils/mutations';
// Pass in component
import ToDoItem from '../components/ToDo';
import NewTodoForm from '../components/NewToDo';
import { QUERY_TASKS } from '../utils/queries';

const TodoList = () => {
  const { data: taskData, loading: loadingRender, error: renderError} = useQuery(QUERY_TASKS);
    // Initialize the state for tasks in DB, else empty array to hold all todos
    console.log(taskData)
    const [todos, setTodos] = useState(taskData ? taskData.tasks : []);
  



  const { data, loading, error } = useMutation(REMOVE_TASK);




  // when an item is checked the todos array will be updated to reflect the change from checked: false to true
  const handleCheck = (item) => {
    const updatedTodos = [...todos];
    updatedTodos[item].checked = !updatedTodos[item].checked;
    
    setTodos(updatedTodos);
    // renderTasks.refetch(); // Use the refetch query function to refetch the tasks
  };
  


  // Remove the selected item in array w splice method and then setTodos state with the updated array
  // const deleteTodo = (item) => {
  //   const updatedTodos = [...todos];
  //   const deletedTask = updatedTodos.splice(item, 1)[0];

  //   // Execute the removeTask mutation and pass the deleted task's ID as variables
  //   try { 
  //     // IS THIS HOW YOU REFERENCE OUR DBs TASK ID?? 
  //     removeTask({ variables: {id: deletedTask.id } });

  //     // Pass in updated and overwrite users previous todos so the deleted one is no longer on the page
  //     setTodos(updatedTodos);
  //   } catch (error) {
  //     // Handle the error if needed
  //     console.error(error);
  //   }
  // };

  if (loading) return 'Deleting Selected Task...';
  if (error) return `Error Deleting Selected Task! ${error.message}`;

  if (loadingRender) return 'Loading Tasks...';
  if (renderError) return `Error Rendering Tasks! ${renderError.message}`;

    // Filter array to exclude items that are checked
    const uncheckedTodos = todos.filter((todo) => !todo.checked);

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

