import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Static/App.css'; 
import '../Static/Global.css'
import About from './About';
import CreateUser from './CreateUser';
import Todos from './Todos';
import Header from './Header.jsx';
import HomePage from './HomePage';
import NotFound from './NotFound';
import Hamza from './Hamza.jsx';



function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/create/user" element={<CreateUser />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/hamza" element={<Hamza />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 indpon.com</p>
      </footer>
    </Router>
  );
}

export default App;
