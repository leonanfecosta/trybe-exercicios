import React from 'react';
import emailjs from 'emailjs-com';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Contact from '../pages/Contact';

jest.mock('emailjs-com', () => ({
  send: jest.fn(() => Promise.resolve()),
}));

afterEach(() => jest.clearAllMocks());

const testData = { fromName: 'foo', replyTo: 'foo@email.com', messageHTML: 'bar' };

describe('when the form is filled correctly', () => {
  test('sends the email', async () => {
    render(<Contact />);

    emailjs.send.mockImplementation(() => Promise.resolve());

    const inputName = screen.getByLabelText(/Nome/i);
    const inputEmail = screen.getByLabelText(/E-mail/i);
    const inputMessage = screen.getByLabelText(/Mensagem de contato/i);

    userEvent.type(inputName, testData.fromName);
    userEvent.type(inputEmail, testData.replyTo);
    userEvent.type(inputMessage, testData.messageHTML);

    expect(inputName).toEqual(testData.fromName);
    expect(inputEmail).toEqual(testData.replyTo);
    expect(inputMessage).toEqual(testData.messageHTML);

    userEvent.click(screen.getByRole('button', { name: /Enviar/i }));

    expect(await emailjs.send).toHaveBeenCalledWith(
      'gmail', 'template_example', testData, 'user_tEStkEy',
    );

    expect(screen.queryByText(/O campo "nome" é obrigatório/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/E-mail inválido/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/O campo "mensagem" é obrigatório/i))
      .not.toBeInTheDocument();

    expect(inputName.value).toEqual('');
    expect(inputEmail.value).toEqual('');
    expect(inputMessage.value).toEqual('');
  });
});
