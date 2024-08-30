import React, { useState } from 'react'; // Import useState
import '../Static/App.css';



function App() {
  // Inside your App component
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()) { 
      setTodos([...todos, input]); 
      setInput('');
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
      <p>{todos.forEach((todo) => {
        todo + "\n"
      })}</p>
    </div>
  );
}

export default App;
