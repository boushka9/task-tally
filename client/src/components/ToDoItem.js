import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_TASK } from '../utils/mutations';
import { REMOVE_TASK } from '../utils/mutations';
import { QUERY_TASKS } from '../utils/queries';

// Receives the 'todo' object, & onCheck/onDelete functions as props 
const ToDoItem = ({ todo, onCheck, onDelete }) => {

  // Mutation to update task when checked off
  const [updateTask, { loading, error }] = useMutation(UPDATE_TASK);
 
  //Mutation to remove a task
  const [removeTask, { loading: removeLoading, error: removeError }] = useMutation(REMOVE_TASK, {
    refetchQueries: [{ query: QUERY_TASKS }]});
 
  // useState to effect checkbox
  const [checked, setChecked] = useState(todo.checked);

  const handleCheck = async () => {
    try {
      const newChecked = !checked; // Toggle the checked state
      await updateTask({
        variables: { id: todo._id, checked: newChecked },
      });
      setChecked(newChecked);
    } catch (err) {
      console.error(err);
    }
  };

 
  const onRemove = async () => {
    try {
      await removeTask({
        variables: {
          taskId: todo._id
        }
      });
      // Perform any additional actions after successful deletion, if needed
    } catch (err) {
      console.error(err);
    }
  };
  

  if (loading) return 'Updating task...';
  if (error) return `Error updating task: ${error.message}`;
  if (removeLoading) return 'Deleting task...';
  if (removeError) return `Error deleting task`;

  return (
    <div className={todo.checked ? 'checked' : 'un-checked'}> 
      <li className='to-do-li'>
        <h2 className='score'>{todo.scoreValue} Points</h2>
        <div className='check-bx'>
          <input 
            type="checkbox"
            checked={todo.checked}
            onChange={handleCheck}
          />
        </div>

        <h2 className='to-do-text'>{todo.body}</h2>

        <div className='del-li'> 
          <button onClick={onRemove}>Delete</button>
        </div>

      </li>
    </div>
    
  );
};

export default ToDoItem;
