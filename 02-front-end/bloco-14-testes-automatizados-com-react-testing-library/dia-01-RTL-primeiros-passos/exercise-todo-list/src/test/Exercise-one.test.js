import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a aplicação, testando botão e sua funcionalidade', () => {
  it('Verificando se o botão existe no documento com o texto "Adicionar"', () => {
    render(<App />);
    const buttonAdd = screen.getByText('Adicionar');
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');
  });

  it('Ao clicar no botão Adicionar a task deve ser adicionada na tela ', () => {
    render(<App />);
    const TASK_TO_ADD = 'Tarefa teste';
    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByText('Adicionar');

    userEvent.type(inputTask, TASK_TO_ADD);
    expect(screen.queryByText(TASK_TO_ADD)).not.toBeInTheDocument();

    userEvent.click(buttonAdd);
    expect(screen.queryByText(TASK_TO_ADD)).toBeInTheDocument();
  });
});
