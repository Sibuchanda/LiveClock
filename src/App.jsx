import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './clock/Home'
import About from './clock/About';
import Liveclock from './clock/LiveClock';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/liveclock" element={<Liveclock />} />
      </Routes>
    </Router>
  );
};

export default App;
