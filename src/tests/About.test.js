import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('testando o componente About', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const titulo = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(titulo).toBeInTheDocument();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const primeiro = screen.getByText(
      'This application simulates a Pokédex, '
        + 'a digital encyclopedia containing all Pokémons',
    );
    const segundo = screen.getByText(
      'One can filter Pokémons by type, '
        + 'and see more details for each one of them',
    );
    expect(primeiro).toBeInTheDocument();
    expect(segundo).toBeInTheDocument();
  });
  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);

    const imagem = screen.getByRole('img', { name: /pokédex/i });
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', url);
  });
});

// screen.logTestingPlaygroundURL();
