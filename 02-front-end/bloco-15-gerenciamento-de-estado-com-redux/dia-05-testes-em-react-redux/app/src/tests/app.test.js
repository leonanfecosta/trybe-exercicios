import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
import App from '../App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.getByRole('button', {
      name: /Clique aqui/i,
    });

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });

    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
