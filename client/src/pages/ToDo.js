import React, { useState } from 'react';
// Pass in component
import ToDoItem from '../components/ToDo';

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);// Initialize the state for todos array (empty to hold all todos)
  const [newTodo, setNewTodo] = useState(''); //Initialize new todo items

    // Get value of entered new todo use it for setNewTodo
  const inputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Add todo, can't be an empty string, add it to the existing array of todos w the check mark unchecked 
  // Each todo item is an object w the text and checked value (should be able to sort todos by checked: true/false)
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, checked: false }]);
      setNewTodo('');
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
    updatedTodos.splice(item, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
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
      <div className="new-todo">
        <input
          type="text"
          value={newTodo}
          onChange={inputChange}
          placeholder="Add a new task to your tally!"
        />
        <button onClick={addTodo}>Add!</button>
      </div>
    </div>
  );
};

export default TodoListPage;

