import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Static/App.css'; // Ensure this is properly applied
import About from './About';
import CreateUser from './CreateUser';
import Todos from './Todos';
import Header from './Header';
import HomePage from './HomePage';

import '../Static/Global.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/create/user" element={<CreateUser />} />
          <Route path="/todo" element={<Todos />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 indpon.com</p>
      </footer>
    </Router>
  );
}

export default App;
