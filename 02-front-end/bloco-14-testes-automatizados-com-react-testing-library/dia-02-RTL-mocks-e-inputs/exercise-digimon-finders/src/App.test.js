import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('Rendezira o App em seu estado inicial', async () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    expect(button).toBeInTheDocument();

    const input = screen.getByRole('textbox', { name: /Digimon/i });
    expect(input).toBeInTheDocument();
  });

  it('Insere um digimon na busca', async () => {
    render(<App />);

    const input = screen.getByRole('textbox', { name: /Digimon/i });
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'Agumon');
    expect(input).toHaveValue('Agumon');
  });

  it('Verifica que a tela começa não exibindo um digimon', async () => {
    render(<App />);

    const digimonName = screen.queryByRole('heading', { level: 2 });
    expect(digimonName).not.toBeInTheDocument();
  });

  it('Busca um digimon e verifica que ele é exibido', async () => {
    const digimon = [{
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    }];

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(digimon),
    }));

    render(<App />);

    const input = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(input, 'Agumon');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    const digimonName = await screen.findByRole('heading', { level: 2, name: /Agumon/i });
    expect(digimonName).toBeInTheDocument();
    // daqui para baixo a requisiçao é feita e não é necessário usar o await novamente
    const digimonImage = screen.getByRole('img', { name: /Agumon/i });
    expect(digimonImage).toBeInTheDocument();

    const digimonLevel = screen.getByText(/Rookie/i);
    expect(digimonLevel).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://digimon-api.vercel.app/api/digimon/name/Agumon');
  });

  it('Busca um digimon inexistente e verifica se o erro é exibido', async () => {
    const ErrorMsg = 'Digimon not found';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    render(<App />);

    const input = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(input, 'Pikachu');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    const error = await screen.findByText(ErrorMsg);
    expect(error).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://digimon-api.vercel.app/api/digimon/name/Pikachu');
  });

  it('Caso a caixa de busca esteja vazia, não deve buscar nada', () => {
    render(<App />);

    global.fetch = jest.fn();

    const input = screen.getByRole('textbox', { name: /Digimon/i });
    expect(input).toHaveValue('');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('Testa se a api quebra a tela quando não volta nada (não deve falhar)', () => {
    render(<App />);

    global.fetch = jest.fn(() => new Error('API error'));

    const input = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(input, 'Teste');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
