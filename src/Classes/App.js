import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../Static/App.css'; // Ensure you have this file for styling
import About from './About';
import CreateUser from './CreateUser'



function App() {
  return (
    <Router>
      <header>
        <h1>Welcome to indpon.com</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/create/user">Create User</Link>
          <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/K5rxmxvT83">Indpon's discord server</a>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/create/user" element={<CreateUser />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2024 indpon.com</p>
      </footer>
    </Router>
  );
}

export default App;
