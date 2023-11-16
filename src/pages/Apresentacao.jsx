import React from 'react';
import { Link } from 'react-router-dom';
import './Apresentacao.css'; 

const Apresentacao = () => {
  return (
    <div className='apresentacao'>
      <h1 className="titulo-apresentacao">Apresentação</h1>
      <div className="texto-animado">
        <p className='introducao'>Você acorda em uma madrugada fria e chuvosa em seu apartamento,<br/>
          sua cabeça doi muito devido a o consumo alto de bebidas alcoolicas<br/>
          na noite passada,a angustia de consome como todos os dias anteriores,<br/>
          se sente consumido por odió<br/>
          seu sentimento de impotencia,incapaz de evitar acontecimentos passados<br/>
          Te corroi mais e mais e mais....</p>
      </div>
      <p className='frase-Fredz'>"Quando você olha por muito tempo para um abismo<br/> o abismo também olha para dentro de você."<br/><br/> Friedrich Nietzsche.</p>
      <Link className='botao-prologo' to="/prologo">Ir para o Prólogo</Link>
    </div>
  );
};

export default Apresentacao;

