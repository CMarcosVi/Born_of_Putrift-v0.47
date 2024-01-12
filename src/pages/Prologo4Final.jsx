import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/inventarioSlice';
import Personagem from '../personagem/personagem';

const PrologoFinal = () => {
  const dispatch = useDispatch();
  const chaveCarroPresente = useSelector((state) => state.inventory.items.some(item => item.id === 1));

  const adicionarItemAoInventario = (item) => {
    dispatch(addItem(item));
  };

  const [resposta, setResposta] = useState("Voce entra no carro");
  const [exibirMolde, setExibirMolde] = useState(false);
  const [mostrarBotao, setMostrarBotao] = useState(false);
  const [inventario, setInventario] = useState([]);

  const opcoes = [
    {
      texto: "Olhar o porta objetos",
      resposta: "Abre o porta objetos e encontra uma arma carregada",
      inventario: [{ id: 6, nome: "Pistola", textoTooltip: "Pistola 9mm", url: "src/pages/imgs/Pistola9mm.png", Balas: 13 }],
    },
    {
      texto: "Ligar Carro",
      resposta: chaveCarroPresente
        ? "Você liga o carro e sai para em busca de respostas"
        : "Você está sem a chave do carro",
      proximaRota: "/prologoAgradecimento",
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
              <button className="rota">Concluir &rarr;</button>
            </Link>
          )}
        </div>
      </div>
      <Personagem />
    </div>
  );
};

export default PrologoFinal;
