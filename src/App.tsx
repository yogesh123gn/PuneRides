import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Requirements from './pages/Requirements';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requirements" element={<Requirements />} />
      </Routes>
    </Router>
  );
}

export default App;
