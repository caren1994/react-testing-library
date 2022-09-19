import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testando o componente Pokedex', () => {
  it('Teste se a página contém um heading h2 com o texto', () => {
    renderWithRouter(<App />);
    const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i });
    expect(h2).toBeInTheDocument();
  });
  it('Teste se é exibido o próximo pokémon da lista ', () => {
    renderWithRouter(<App />);
    const buttonProximo = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(buttonProximo);
    const next = screen.getByText('Charmander');
    expect(next).toBeInTheDocument();
  });
  it('se mostra um pokemom por vez', () => {
    renderWithRouter(<App />);
    const datat = screen.getAllByTestId('pokemon-name');
    expect(datat.length).toBe(1);
  });
  it('testando botao do tipo psychic', () => {
    renderWithRouter(<App />);
    const poke = screen.getByText(/Psychic/i);
    const buttonPsy = screen.getByRole('button', { name: /Psychic/i });
    userEvent.click(buttonPsy);
    expect(buttonPsy).toBeInTheDocument();
    expect(poke).toBeInTheDocument();
  });
  it('testando botal all', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /All/i });
    userEvent.click(buttonAll);
    const volta = screen.getByText(/pikachu/i);
    expect(buttonAll).toBeInTheDocument();
    expect(volta).toBeInTheDocument();
  });
  it('testando botoes de filtro', () => {
    renderWithRouter(<App />);
    const botoes = screen.getAllByTestId('pokemon-type-button');
    const length = 7;
    expect(botoes.length).toBe(length);
    expect(botoes[0]).toHaveTextContent(/Electric/i);
    expect(botoes[1]).toHaveTextContent(/Fire/i);
    expect(botoes[2]).toHaveTextContent(/Bug/i);
    expect(botoes[3]).toHaveTextContent(/Poison/i);
    expect(botoes[4]).toHaveTextContent(/Psychic/i);
    expect(botoes[5]).toHaveTextContent(/Normal/i);
    expect(botoes[6]).toHaveTextContent(/Dragon/i);
    const texto = screen.getByText(/Fire/i);
    userEvent.click(botoes[1]);

    expect(texto).toBeInTheDocument();
  });
  it('testando botao do tipo Dragon', () => {
    renderWithRouter(<App />);
    const poke = screen.getByText(/Dragon/i);
    const button1 = screen.getByRole('button', { name: /Dragon/i });
    userEvent.click(button1);
    expect(button1).toBeInTheDocument();
    expect(poke).toBeInTheDocument();
  });
  it('testando botao do tipo Dragon', () => {
    renderWithRouter(<App />);
    const poke = screen.getByText(/Normal/i);
    const button2 = screen.getByRole('button', { name: /Normal/i });
    userEvent.click(button2);
    expect(button2).toBeInTheDocument();
    expect(poke).toBeInTheDocument();
  });
  it('testando botao do tipo Poison', () => {
    renderWithRouter(<App />);
    const poke = screen.getByText(/Poison/i);
    const buttonPoison = screen.getByRole('button', { name: /Poison/i });
    userEvent.click(buttonPoison);
    expect(buttonPoison).toBeInTheDocument();
    expect(poke).toBeInTheDocument();
  });
});
