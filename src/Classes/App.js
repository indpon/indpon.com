import React, { useState } from 'react'; // Import useState
import '../Static/App.css';



function App() {
  // Inside your App component
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()) { // Make sure the input is not empty
      setTodos([...todos, input]); // Add the new todo to the list
      setInput(''); // Clear the input field
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;
