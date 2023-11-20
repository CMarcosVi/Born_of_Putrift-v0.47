import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/inventarioSlice';
import Personagem from '../personagem/personagem';

const Prologo3 = () => {
  const dispatch = useDispatch();

  const adicionarItemAoInventario = (item) => {
    dispatch(addItem(item));
  };

  const [resposta, setResposta] = useState(
    "Você chega à cozinha e se prepara para partir."
  );

  const [exibirMolde, setExibirMolde] = useState(false);
  const [mostrarBotao, setMostrarBotao] = useState(false);
  const [inventario, setInventario] = useState([]);

  const opcoes = [
    {
      texto: "Olhar gaveta de talheres",
      resposta: "Você olha a gaveta e encontra uma faca",
      inventario: [{ id: 3, nome: "Faca", textoTooltip: "Faca de cozinha", url: "src/pages/imgs/Faca.png" }],
    },
    {
      texto: "Olhar no armário",
      resposta: "Você olha e acha uma barra de cereal",
      inventario: [{ id: 4, nome: "Barra de Cereal", textoTooltip: "Barra de cereal", url: "src/pages/imgs/BarradeCereal.png" }],
    },
    {
      texto: "Olhar caixa de remédios",
      resposta: "Aí está você",
      inventario: [{ id: 5, nome: "Aspirina", textoTooltip: "Remédio para dores", url: "src/pages/imgs/Aspirina.png" }],
      proximaRota: "/PrologoFinal",
    },
  ];

  const handleOption = (index) => {
    const escolhaAtual = opcoes[index];
    setResposta(escolhaAtual.resposta);

    if (escolhaAtual.inventario && escolhaAtual.inventario.length > 0) {
      setExibirMolde(true);
      setInventario(escolhaAtual.inventario);
      adicionarItemAoInventario(escolhaAtual.inventario[0]);
    } else {
      setExibirMolde(false);
    }

    if (index === opcoes.length - 1) {
      setMostrarBotao(true);
    }
  };

  return (
    <div className="Prologo">
      <h1 className="tituloQuarto">Cozinha</h1>
      <div className="alternativas">
        <p className="textoEscolhas">{resposta}</p>
        {exibirMolde && (
          <div className="item">
            <p className="itemEncontrado">Novo Item encontrado</p>
            <ul className="ppp">
              {inventario.map((item, index) => (
                <li className="ppp" key={index}>
                  <button className="pegarItem" onClick={() => adicionarItemAoInventario(item)}>Pegar</button>
                  <img className="imgsItem" src={item.url} alt={item.nome} />
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="Escolhas">
          {opcoes.map((opcao, index) => (
            <button
              className="buttonsEscolhas"
              key={index}
              onClick={() => handleOption(index)}
            >
              {opcao.texto}
            </button>
          ))}
          {mostrarBotao && opcoes[opcoes.length - 1].proximaRota && (
            <Link className="proximaRota" to={opcoes[opcoes.length - 1].proximaRota}>
              <button className="rota">Seguir &rarr;</button>
            </Link>
          )}
        </div>
      </div>
      <Personagem />
    </div>
  );
};

export default Prologo3;
