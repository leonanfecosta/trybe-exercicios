import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import renderWithRouter from './renderWithRouter';
import { act } from 'react-dom/test-utils';
import App, { About } from './App';

describe('testa a aplicação', () => {

  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it ('deve renderizar o componente App com rota /about', () => {
    const { customHistory } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = customHistory.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it ('deve testar um caminho não encontrado', () => {
    const { customHistory } = renderWithRouter(<App />);

    act(() => {
      customHistory.push('/pagina/nao/encontrada');
    }) 

    const noMatchTitle = screen.getByRole('heading', { name: 'Página não encontrada' });
    expect(noMatchTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
})