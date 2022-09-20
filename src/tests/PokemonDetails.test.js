import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('teste do componente pokemonDetail', () => {
  it('Teste se as informações detalhadas do pokémon são mostradas na tela', () => {
    renderWithRouter(<App />);
    const linkMore = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkMore);
    const titulo = screen.getByRole('heading', { name: /Pikachu Details/i });
    const titulo2 = screen.getByRole('heading', { name: /Summary/i });
    const paragrafo = screen.getByText(/This intelligent Pokémon roasts hard/i);

    expect(titulo).toBeInTheDocument();
    expect(linkMore).not.toBeInTheDocument();
    expect(titulo2).toBeInTheDocument();
    expect(paragrafo).toBeInTheDocument();
  });
  it('Teste se existe na página uma seção com localizações do pokémon', () => {
    renderWithRouter(<App />);

    const linkM = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(linkM);

    const titulo1 = screen.getByRole('heading', {
      name: /Game Locations of Pikachu/i,
      level: 2,
    });

    const imagensL = screen.getAllByRole('img', {
      name: /Pikachu Location/i,
    });

    const input = screen.getByLabelText('Pokémon favoritado?');

    expect(titulo1).toBeInTheDocument();
    expect(imagensL.length).toBe(2);
    expect(imagensL[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imagensL[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(input).toBeInTheDocument();
  });
});
