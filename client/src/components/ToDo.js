import React from 'react';

// Receives the 'todo' object, & onCheck/onDelete functions as props 
const ToDoItem = ({ todo, onCheck, onDelete }) => {
  return (
    <div className={todo.checked ? 'checked' : 'un-checked'}> 
      <li className='to-do-li'>
        <h2 className='score'>{todo.scoreValue} Points</h2>
        <div className='check-bx'>
          <input 
            type="checkbox"
            checked={todo.checked}
            onChange={onCheck}
          />
        </div>

        <h2 className='to-do-text'>{todo.body}</h2>

        <div className='del-li'> 
          <button onClick={onDelete}>Delete</button>
        </div>

      </li>
    </div>
    
  );
};

export default ToDoItem;
