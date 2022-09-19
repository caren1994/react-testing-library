import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('testando o componente NOTFOUND', () => {
  it('Teste se a página contém um heading h2 com texto ', () => {
    renderWithRouter(<NotFound />);
    const texto = screen.getByRole('heading', {
      name: /Page requested not found/i,
    });
    const imagem = screen.getByRole('img', {
      name: /Pikachu crying because the page requested was not found/i,
    });
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(texto).toBeInTheDocument();
    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', url);
  });
});
