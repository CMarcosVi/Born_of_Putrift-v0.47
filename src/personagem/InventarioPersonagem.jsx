import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeItem } from "../store/inventarioSlice";

const Inventario = () => {
  const dispatch = useDispatch();

  const [abrirInventario, setAbrirInventario] = useState(false);
  const [tooltipVisivel, setTooltipVisivel] = useState(false);
  const [posicaoMouse, setPosicaoMouse] = useState({ x: 0, y: 0 });

  const inventarioItens = useSelector((state) => state.inventory.items);

  const toggleInventario = () => {
    setAbrirInventario(!abrirInventario);
    console.log('Itens no inventário:', inventarioItens);
  };

  const fecharInventario = () => {
    setAbrirInventario(false);
  };

  const mostrarTooltip = (event, textoTooltip) => {
    setTooltipVisivel(true);
    setPosicaoMouse({ x: event.clientX, y: event.clientY });
  };

  const esconderTooltip = () => {
    setTooltipVisivel(false);
  };
  const removerItemAoInventario = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className={`inventario ${abrirInventario ? "aberto" : ""}`}>
      {abrirInventario && (
        <div className="barraInventario">
          <div className="caixaInventario">
            <button className="fecharInventario" onClick={fecharInventario}>
              X
            </button>
            <p className="AbaInventario">Inventário</p>
          </div>
          <ul>
            {inventarioItens.map((item, index) => (
              <li
                className="listaItems"
                key={index}
                onMouseEnter={(e) => mostrarTooltip(e, item.textoTooltip)}
                onMouseLeave={esconderTooltip}
              >
                {item.url && (
                  <img
                    className="itemInventario"
                    src={item.url}
                    alt=""
                  />
                )}
                {tooltipVisivel && (
                  <div
                    className="tooltipPersonalizado"
                    style={{ left: posicaoMouse.x, top: posicaoMouse.y }}
                  >
                    {item.textoTooltip && <p>{item.textoTooltip}</p>}
                    <button className="botaoRemover" onClick={() => removerItemAoInventario(item)}>Remover</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="iconeInventario" onClick={toggleInventario}>
        {/* Conteúdo do ícone do inventário */}
      </div>
    </div>
  );
};

export default Inventario;
