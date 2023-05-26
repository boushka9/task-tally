import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TASK } from '../utils/mutations';
import { QUERY_TASKS } from '../utils/queries';

function AddTodo() {
    // Body and score useRef hook to access values of input els (assigned null bc they'll be re-assigned dif DOM els when the component renders)
  const bodyRef = useRef(null);
  const scoreRef = useRef(null);

  // useMutation hook to connect to DB and add new To-Do item
  const [addTodo, { data, loading, error }] = useMutation(ADD_TASK, {
    refetchQueries: [{ query: QUERY_TASKS }]
  });

  if (loading) return 'Submitting New Task...';
  if (error) return `New Task Submission error! ${error.message}`;

  const handleSubmit = e => {
    e.preventDefault();
    // On submit get values of the entered body and score
    const body = bodyRef.current.value;
    const scoreValue = Number(scoreRef.current.value);
    // Default value of new to-do items check
    const checked = false;
    // Pass in values to 
    addTodo({ variables: { body, checked, scoreValue } });

    // Reset/clear value of input element after submit
    bodyRef.current.value = '';
    scoreRef.current.value = '';
  };

  return (
    <div className='new-todo'>
      <form className='new-form' onSubmit={handleSubmit}>
        <input className='form-input' ref={bodyRef} type="text" placeholder="Add a New Task to Your Tally!" />
        <input className='form-input' ref={scoreRef} type="number" placeholder="Points Per Task.." />
        <button className='add-todo-btn' type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;