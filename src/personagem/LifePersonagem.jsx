// LifePersonagem.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLife, increment, decrement } from '../store/counterSlice';
import './Personagem.css';

const LifePersonagem = () => {
  const dispatch = useDispatch();
  const life = useSelector((state) => state.counter.life);

  // Efeito para carregar o valor da vida ao montar o componente
  useEffect(() => {
    // Tenta obter o valor salvo no localStorage
    const savedLife = localStorage.getItem('life');

    // Se houver um valor salvo, atualiza o estado do Redux com esse valor
    if (savedLife !== null) {
      dispatch(setLife(parseInt(savedLife, 10)));
    }
  }, [dispatch]);

  // Efeito para salvar o valor da vida no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem('life', life.toString());
  }, [life]);

  const calculateBarWidth = () => {
    const minWidth = 0;
    const maxWidth = 100;
    const width = Math.min(Math.max((life / 100) * 50, minWidth), maxWidth) + '%';
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
