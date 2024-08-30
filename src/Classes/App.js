import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import '../Static/App.css'; // Ensure you have this file for styling
import About from './About';
import CreateUser from './CreateUser';
import Todos from './Todos';

function Header() {
  const location = useLocation();
  // Only render header if the current path is "/"
  return location.pathname !== null ? (
    <header>
      <h1>Welcome to indpon.com</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/create/user">Create User</Link>
        <Link to="todo">Indpon Todo List</Link>
        <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/K5rxmxvT83">Indpon's discord server</a>
      </nav>
    </header>
  ) : null;
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/create/user" element={<CreateUser />} />
          <Route path="/todo" element={<Todos />} />
        </Routes>
      </main>
      <section>
            <h2>Welcome to indpon.com</h2>
            <p>(a website made by indpon)</p>
      </section>
      <footer>
        <p>&copy; 2024 indpon.com</p>
      </footer>
    </Router>
  );
}

export default App;
