import React from 'react';
import '../Static/App.css'; // Ensure you have this file for styling

function App() {
  return (
    <>
      <header>
        <h1>Welcome to indpon.com</h1>
        <nav>
          <a href="/about">About</a>
          <a href="/create/user">Create User</a>
          <a target="_blank" rel="noopener noreferrer" href="/discord">Indpon's discord server</a>
        </nav>
      </header>

      <main>
        <section>
          <h2>Welcome to indpon.com</h2>
          <p>(a website made by indpon)</p>
        </section>
        <footer>
          <p>&copy; 2024 indpon.com</p>
        </footer>
      </main>
    </>
  );
}

export default App;
