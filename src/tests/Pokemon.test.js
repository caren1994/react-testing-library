import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('teste o componente pokemom', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const texto = screen.getByText(/Pikachu/i);
    const type = screen.getAllByText(/Electric/i);
    const peso = screen.getByText(/Average weight: 6.0 kg/i);
    const imagem = screen.getByRole('img', { name: /pikachu sprite/i });
    const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(imagem).toBeInTheDocument();
    expect(imagem.src).toBe(url);
    expect(texto).toBeInTheDocument();
    expect(type.length).toBe(2);
    expect(peso).toBeInTheDocument();
  });
  it('Teste se o card do pokémon indicado na Pokédex contém um link', () => {
    const { history } = renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    expect(link.href).toBe('http://localhost/pokemons/25');
    userEvent.click(link);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });
  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const linkMore = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkMore);
    const check = screen.getByRole('checkbox');
    userEvent.click(check);
    const homeL = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeL);
    const imagem = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(imagem).toBeInTheDocument();
    expect(imagem.src).toBe('http://localhost/star-icon.svg');
  });
});
