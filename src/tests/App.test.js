import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testando o component App', () => {
  it('teste um conjunto de link ', () => {
    renderWithRouter(<App />);
    const link1 = screen.getByRole('link', { name: 'Home' });
    const link2 = screen.getByRole('link', { name: 'Favorite Pokémons' });
    const link3 = screen.getByRole('link', { name: 'About' });
    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();
  });
  it('Teste se a aplicação é redirecionada para a página inicial', () => {
    const { history } = renderWithRouter(<App />);
    const link1 = screen.getByRole('link', { name: 'Home' });
    userEvent.click(link1);
    expect(history.location.pathname).toBe('/');
  });
  it('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados', () => {
    const { history } = renderWithRouter(<App />);
    const link2 = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(link2);
    expect(history.location.pathname).toBe('/favorites');
  });
  it('Teste se a aplicação é redirecionada para a página Not Found', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/pagina/que-nao-exite/');
    });
    const notFound = screen.getByRole('heading', {
      name: /Page requested not found/i,
    });
    expect(notFound).toBeInTheDocument();
  });
});
