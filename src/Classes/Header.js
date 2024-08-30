import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Welcome to indpon.com</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/create/user">Create User</Link>
        <Link to="/todo">Indpon Todo List</Link>
        <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/K5rxmxvT83">Indpon's discord server</a>
      </nav>
    </header>
  );
}

export default Header;
