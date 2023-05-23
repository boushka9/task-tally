import React from 'react';

// Pass in check
const ToDoItem = ({ todo, onCheck, onDelete }) => {
  return (
    <li className='to-do-li'>
      <div className='check-bx'>
        <input 
          type="checkbox"
          checked={todo.checked}
          onChange={onCheck}
        />
      </div>
      
      <h2 className={todo.checked ? 'checked' : 'un-checked'}>{todo.text}</h2>
      <div className='del-li'> 
        <button onClick={onDelete}>Delete</button>
      </div>
      
    </li>
  );
};

export default ToDoItem;
