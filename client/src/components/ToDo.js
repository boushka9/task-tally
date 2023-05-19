import React from 'react';

// Pass in check
const ToDoItem = ({ todo, onCheck, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={onCheck}
      />
      <span className={todo.checked ? 'checked' : ''}>{todo.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ToDoItem;
