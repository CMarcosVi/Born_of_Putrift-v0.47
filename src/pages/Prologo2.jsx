import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Prologo.css";
import Personagem from "../personagem/personagem";
import { useDispatch } from "react-redux";
import { addItem } from "../store/inventarioSlice";

export default function Prologo2() {
  const dispatch = useDispatch();

  const [resposta, setResposta] = useState(
    "Você chega à sala não há muito o que fazer nela."
  );
  const [exibirMolde, setExibirMolde] = useState(false);
  const [inventario, setInventario] = useState([]);
  const [mostrarBotao, setMostrarBotao] = useState(false);

  const opcoes = [
    {
      texto: "Olhar na mesa da sala de estar",
      resposta: "Você olha a mesa e encontra a chave do seu carro",
      inventario: [{ id: 1 ,nome: "Chaves do carro", textoTooltip: "Chaves do seu carro", url: "src/pages/imgs/chaves.png" }],
    },
    {
      texto: "Procurar Aspirina na prateleira",
      resposta: "Aspirina não encontrada",
      proximaRota: "/Prologo3",
    },
  ];

  const handleOption = (index) => {
    const escolhaAtual = opcoes[index];
    setResposta(escolhaAtual.resposta);
    setExibirMolde(Boolean(escolhaAtual.inventario));
    setInventario(escolhaAtual.inventario || []);

    if (index === opcoes.length - 1) {
      setMostrarBotao(true);
    }
  };

  const adicionarItemAoInventario = (item) => {
    console.log("Adicionando item ao inventário:", item);
    dispatch(addItem(item));
  };

  return (
    <div className="Prologo">
      <h1 className="tituloQuarto">Sala</h1>
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
              <button className="rota">Cozinha &rarr;</button>
            </Link>
          )}
        </div>
      </div>
      <Personagem />
    </div>
  );
}
