import "@testing-library/jest-dom";
import React from "react";
import { render} from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from "../App";
import Apresentacao from '../pages/Apresentacao';
import Prologo from '../pages/Prologo';
import Prologo1 from "../pages/Prologo1";
import Prologo2 from "../pages/Prologo2";
import Prologo3 from "../pages/Prologo3";
import Prologo4 from "../pages/Prologo4Final"
import PrologoAgradecimento from "../pages/PrologoAgradecimento";

describe("App", () => {
  test("must be able to render the main component on the screen", () => {
    render(
      <Provider store={store}> 
        <App />
      </Provider>
    );
  });

  test("should be able to render the 'Apresentacao' component on the screen as soon as it is loaded", () => {
    const { debug } = render(
      <Provider store={store}> 
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Apresentacao />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    
    debug();
  });

  test("should be able to render the 'Prologo' component on the screen after being directed to route", () => {
    const { debug } = render(
      <Provider store={store}> 
        <MemoryRouter initialEntries={['/prologo']}>
          <Routes>
            <Route path="/prologo" element={<Prologo />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    debug();
  });

  test("should be able to render the 'Prologo1' component on the screen after being directed to route", () => {
    const { debug } = render(
      <Provider store={store}> 
        <MemoryRouter initialEntries={['/prologo1']}>
          <Routes>
            <Route path="/prologo" element={<Prologo1 />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    debug();
  });

  test("should be able to render the 'Prologo2' component on the screen after being directed to route", () => {
    const { debug } = render(
      <Provider store={store}> 
        <MemoryRouter initialEntries={['/prologo2']}>
          <Routes>
            <Route path="/prologo" element={<Prologo2 />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    debug();
  });

  test("should be able to render the 'Prologo3' component on the screen after being directed to route", () => {
    const { debug } = render(
      <Provider store={store}> 
        <MemoryRouter initialEntries={['/prologo3']}>
          <Routes>
            <Route path="/prologo" element={<Prologo3 />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    debug();
  });

  test("should be able to render the 'Prologo4' component on the screen after being directed to route", () => {
    const { debug } = render(
      <Provider store={store}> 
        <MemoryRouter initialEntries={['/prologo4']}>
          <Routes>
            <Route path="/prologo" element={<Prologo4 />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    debug();
  });

  test("should be able to render the 'PrologoAgradecimento' component on the screen after being directed to route", () => {
    const { debug } = render(
      <Provider store={store}> 
        <MemoryRouter initialEntries={['/prologoAgradecimento']}>
          <Routes>
            <Route path="/prologo" element={<PrologoAgradecimento />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    debug();
  });
});