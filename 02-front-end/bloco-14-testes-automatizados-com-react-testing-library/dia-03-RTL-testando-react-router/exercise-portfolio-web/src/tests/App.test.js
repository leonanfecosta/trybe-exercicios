import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('routes', () => {
  it('should render the home page', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Home',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('should render the about page', () => {
    const { customHistory } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre Mim' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    expect(customHistory.location.pathname).toBe('/about');
    const githubIcon = screen.getByAltText('GitHub');
    expect(githubIcon).toBeInTheDocument();
  });

  it('should render the contact page', () => {
    const { customHistory } = renderWithRouter(<App />);

    const contactLink = screen.getByRole('link', { name: 'Contato' });
    expect(contactLink).toBeInTheDocument();
    userEvent.click(contactLink);
    expect(customHistory.location.pathname).toBe('/contact');
    const emailTitle = screen.getByRole('heading', { name: 'Entre em contato' });
    expect(emailTitle).toBeInTheDocument();
    const inputName = screen.getByLabelText('Nome');
    expect(inputName).toBeInTheDocument();
    const inputEmail = screen.getByLabelText('E-mail');
    expect(inputEmail).toBeInTheDocument();
    const inputMessage = screen.getByLabelText('Mensagem de contato');
    expect(inputMessage).toBeInTheDocument();
    const sendButton = screen.getByRole('button', { name: 'Enviar' });
    expect(sendButton).toBeInTheDocument();
  });

  it('should render the projects page', () => {
    const { customHistory } = renderWithRouter(<App />);

    const projectsLink = screen.getByRole('link', { name: 'Projetos' });
    expect(projectsLink).toBeInTheDocument();
    userEvent.click(projectsLink);
    expect(customHistory.location.pathname).toBe('/projects');
    const projectsTitle = screen.getByRole('heading', { name: 'Projeto 1' });
    expect(projectsTitle).toBeInTheDocument();
  });

  it('should render a error page', () => {
    const { customHistory } = renderWithRouter(<App />);

    customHistory.push('/error');
    const errorTitle = screen.getByRole('heading', { name: /Página não encontrada/i });
    expect(errorTitle).toBeInTheDocument();
  });
});
