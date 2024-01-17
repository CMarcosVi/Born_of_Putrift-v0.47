import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import Prologo from '../pages/Prologo';

describe("Prologo", () => {
  test("renderizar componente 'Prologo'", () => {
    // Renderiza o componente
    render(
      <Provider store={store}>
        <Prologo />
      </Provider>
    );
  });

  test("check if the 'Prologo' component exists",() =>{
    const { container } = render(
      <Provider store={store}>
        <Prologo />
      </Provider>
    );

    // Verifica se a estrutura esperada do componente está presente
    const tituloQuarto = container.querySelector('.tituloQuarto');
    const buttonsEscolhas = container.querySelectorAll('.buttonsEscolhas');

    expect(buttonsEscolhas.length).toBe(4); // Verifique se há 4 botões de escolha (ou ajuste conforme necessário)
  });

  test("check if the 'opcoes' contains in Prologo", async () => {
    const { container } = render(
      <Provider store={store}>
        <Prologo />
      </Provider>
    );

    // Aguarda a renderização
    await waitFor(() => {
      const opcoes = container.querySelectorAll('.buttonsEscolhas');
      expect(opcoes.length).toBeGreaterThan(0); // Verifique se há pelo menos uma opção (ajuste conforme necessário)
    });
  });
});