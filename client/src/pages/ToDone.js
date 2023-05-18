import React from 'react';

// pass in todos object as a prop
const CheckedToDones = ({ todos }) => {
    // Filter the passed in prop for the items that are checked
  const checkedTodos = todos.filter((todo) => todo.checked);

  return (
    <div className="checked-todos">
      <h1>To-Dones</h1>
      {/* If array of checked todo items is empty display 'Uh Oh' message, otherwise display list of completed todo items */}
      <ul className="checked-list">
        {checkedTodos.length > 0 ? (
          checkedTodos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))
        ) : (
          <li>Uh Oh! It looks like you haven't completed any of your tasks yet. Come back here once you've checked a couple off your tally to track your progress!</li>
        )}
      </ul>
    </div>
  );
};

export default CheckedToDones;