import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../Static/App.css'; // Ensure you have this file for styling
import About from './About';

function Home() {
  return (
    <section>
      <h2>Welcome to indpon.com</h2>
      <p>(a website made by indpon)</p>
    </section>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function CreateUser() {
  return <h2>Create User Page</h2>;
}

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
          <Route path="/" element={<Home />} />
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
