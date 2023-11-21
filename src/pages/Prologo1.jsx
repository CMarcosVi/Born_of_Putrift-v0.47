import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { decrement } from '../store/counterSlice';
import Personagem from '../personagem/personagem';

const Prologo1 = () => {
  const dispatch = useDispatch();

  const [resposta, setResposta] = useState(
    "Você sai de seu quarto com dores de cabeça forte. Acender a luz para descer as escadas?"
  );
  const [opcoes, setOpcoes] = useState([
    {
      texto: "Sim",
      resposta: "Você desce as escadas até a sala",
      proximaRota: "/sua-proxima-rota",
      visivel: true,
    },
    {
      texto: "Não",
      resposta: "Você tropeça e cai da escada perdendo 10 pontos de vida",
      proximaRota: "/sua-proxima-rota",
      visivel: true,
    },
  ]);

  const handleOption = (index) => {
    const escolhaAtual = opcoes[index];
    setResposta(escolhaAtual.resposta);

    if (escolhaAtual.texto === "Não") {
      dispatch(decrement(10));
    }

    const novasOpcoes = opcoes.map(opcao => ({ ...opcao, visivel: false }));
    setOpcoes(novasOpcoes);
  };

  return (
    <div className="Prologo">
      <h1 className="tituloQuarto">Escadas</h1>
      <div className="alternativas">
        <p className="textoEscolhas">{resposta}</p>
        <div className="Escolhas">
          {opcoes.map((opcao, index) => (
            opcao.visivel && (
              <button
                className="buttonsEscolhas"
                key={index}
                onClick={() => handleOption(index)}
                disabled={!opcao.visivel}
              >
                {opcao.texto}
              </button>
            )
          ))}
          {!opcoes.some(opcao => opcao.visivel) && (
            <Link className="proximaRota" to="/Prologo2">
              <button className="rota">Sala &rarr;</button>
            </Link>
          )}
        </div>
      </div>
      <Personagem />
    </div>
  );
};

export default Prologo1;
