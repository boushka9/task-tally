// const [removeTask, { loading, error }] = useMutation(REMOVE_TASK);


// if (loading) return 'Deleting Selected Task...';
// if (error) return `Error Deleting Selected Task! ${error.message}`;

// // Remove the selected item in array w splice method and then setTodos state with the updated array
// const deleteTodo = (item) => {
//     const updatedTodos = [...todos];
//     const deletedTask = updatedTodos.splice(item, 1)[0];

//     // Execute the removeTask mutation and pass the deleted task's ID as variables
//     try { 
//       // IS THIS HOW YOU REFERENCE OUR DBs TASK ID?? 
//       removeTask({ variables: {id: deletedTask.id } });

//       // Pass in updated and overwrite users previous todos so the deleted one is no longer on the page
//       setTodos(updatedTodos);
//     } catch (error) {
//       // Handle the error if needed
//       console.error(error);
//     }
//   };