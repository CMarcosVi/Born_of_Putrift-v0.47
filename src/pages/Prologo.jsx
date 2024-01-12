import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Prologo.css";
import Personagem from "../personagem/personagem";
import { useDispatch } from "react-redux";
import { addItem } from "../store/inventarioSlice";

export default function Prologo() {
  const dispatch = useDispatch();

  const [resposta, setResposta] = useState(
    "Você acorda de madrugada com dor de cabeça e ressaca devido a bebidas alcoólicas."
  );
  const [exibirMolde, setExibirMolde] = useState(false);
  const [inventario, setInventario] = useState([]);
  const [mostrarBotao, setMostrarBotao] = useState(false);

  
  const opcoes = [
    {
      texto: "Olha na Mesa",
      inventario: [{ id: 0 ,nome: "Imagens", textoTooltip: "atras da carta esta escrito: Eles estão chegando,ele esta chegando,7 viram 7 iram,a lua camersim esta surgindo e o sacrifico sera feito", url:"src/pages/imgs/fotografia.png"}],
      resposta: "Imagens do seu irmão desaparecido, mapas e anotações.",
    },
    {
      texto: "Olhar para a mesa de cabeceira do lado da sua cama.",
      resposta: "Porra Maldita ressaca cade a porra da aspirina que eu deixei aqui",
    },
    {
      texto: "Olhar pela janela",
      resposta: "Uma noite chuvosa igual aquele fatídico dia...",
    },
    {
      texto:
        "Olhar O relogio  ",
      proximaRota: "/sua-proxima-rota",
      resposta: "Droga, são 2h da manhã, tenho que terminar de pegar minhas coisas, a viagem vai ser longa.",
    },
  ];

  const handleOption = (index) => {
    setResposta(opcoes[index].resposta);
    setExibirMolde(Boolean(opcoes[index].inventario));
    setInventario(opcoes[index].inventario || []);
    if (index === opcoes.length - 1) {
      setMostrarBotao(true);
    }
  };

  const adicionarItemAoInventario = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="Prologo">
      <h1 className="tituloQuarto">Quarto</h1>
      <div className="alternativas">
        <p className="textoEscolhas">{resposta}</p>
        {exibirMolde && (
          <div className="item">
            <p className="itemEncontrado">Novo Item encontrado</p>
            <ul className="ppp">
              {inventario.map((item, index) => (
                <li className="ppp" key={index}>
                  <button className="pegarItem" onClick={() => adicionarItemAoInventario(item)}>Pegar</button>
                  <img className="imgsItem" src="src/pages/imgs/fotografia.png" alt="" />
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
              <Link className="rota" to="/Prologo1">Escadas &rarr;</Link>
            </Link>
          )}
        </div>
      </div>
      <Personagem />
    </div>
  );
}
