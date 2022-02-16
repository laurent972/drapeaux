import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/a-propos" element = {<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  
  );
};

export default App;

