import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeItem } from "../store/inventarioSlice";

const Inventario = () => {
  const dispatch = useDispatch();

  const [tooltipItem, setTooltipItem] = useState(null);
  const [abrirInventario, setAbrirInventario] = useState(false);

  const inventarioItens = useSelector((state) => state.inventory.items);

  const toggleInventario = () => {
    setAbrirInventario(!abrirInventario);
    console.log('Itens no inventário:', inventarioItens);
  };

  const fecharInventario = () => {
    setAbrirInventario(false);
  };

  const mostrarTooltip = (item) => {
    setTooltipItem(item);
  };

  const esconderTooltip = () => {
    setTooltipItem(null);
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
          <ul className="listadeItems">
            {inventarioItens.map((item, index) => (
              <li
                className="listaItems"
                key={index}
                onMouseEnter={() => mostrarTooltip(item)}
                onMouseLeave={esconderTooltip}
              >
                {item.url && (
                  <div className="itemContainer">
                    <img
                      className="itemInventario"
                      src={item.url}
                      alt=""
                    />
                    {tooltipItem === item && (
                      <div className="tooltipPersonalizado">
                        {item.textoTooltip && <p>{item.textoTooltip}</p>}
                        <button className="botaoRemover" onClick={() => removerItemAoInventario(item)}>Remover</button>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="iconeInventario" onClick={toggleInventario}>
        <img className="iconInventario" src="src/pages/imgs/Inventario.png" alt="" />
      </div>
    </div>
  );
};

export default Inventario;
