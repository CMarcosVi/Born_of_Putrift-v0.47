import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Apresentacao from './pages/Apresentacao';
import Prologo from './pages/Prologo';
import Prologo1 from './pages/Prologo1';
import Prologo2 from './pages/Prologo2';
import Prologo3 from './pages/Prologo3';

function App() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Apresentacao />} />
        <Route path="/prologo" element={<Prologo />} />
        <Route path="/prologo1" element={<Prologo1 />} />
        <Route path='/prologo2' element={<Prologo2 />}/>
        <Route path='/prologo3' element={<Prologo3 />}/>
      </Routes>
    </div>
  );
}

export default App;
