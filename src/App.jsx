import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Apresentacao from './pages/Apresentacao';
import Prologo from './pages/Prologo';

function App() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Apresentacao />} />
        <Route path="/prologo" element={<Prologo />} />
      </Routes>
    </div>
  );
}

export default App;
