import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';
import Apresentacao from '../pages/Apresentacao';
import { MemoryRouter } from 'react-router-dom';

describe("Prologo", () => {
    test('Apresentacao component should navigate to /prologo on button click', async () => {
        // Renderiza o componente usando o @testing-library/react
        render(
          <MemoryRouter initialEntries={['/']}>
            <Apresentacao />
          </MemoryRouter>
        )
        fireEvent.click(document.querySelector('.botao-prologo'));
    });
    expect
        
});

