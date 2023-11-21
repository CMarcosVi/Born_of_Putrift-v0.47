// LifePersonagem.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLife, increment, decrement } from '../store/counterSlice';
import './Personagem.css';

const LifePersonagem = () => {
  const dispatch = useDispatch();
  const life = useSelector((state) => state.counter.life);

  useEffect(() => {
    const savedLife = localStorage.getItem('life');

    if (savedLife !== null) {
      dispatch(setLife(parseInt(savedLife, 10)));
    } else {
      dispatch(setLife(50));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('life', life.toString());
  }, [life]);

  const calculateBarWidth = () => {
    const minWidth = 0;
    const maxWidth = 100;
    const width = Math.min(Math.max((life / 100) * 100, minWidth), maxWidth) + '%';
    return width;
  };

  return (
    <div className='barra-de-vida'>
      <div className='life-bar-container'>
        <div className="life-bar" style={{ width: calculateBarWidth() }}></div>
      </div>
    </div>
  );
};

export default LifePersonagem;
