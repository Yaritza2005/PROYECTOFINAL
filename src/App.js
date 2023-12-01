import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Menu from './Menu';
import TiposRazas from './TiposRazas';
import TipsCuidados from './TipsCuidados';
import Articulos from './Articulos';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/TiposRazas" element={<TiposRazas />} />
          <Route path="/TipsCuidados" element={<TipsCuidados />} />
          <Route path="/Articulos" element={<Articulos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




