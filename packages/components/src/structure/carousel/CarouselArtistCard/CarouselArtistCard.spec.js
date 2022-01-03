/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import CarouselArtistCard from './CarouselArtistCard';
import example from './CarouselArtistCard.example.json';

console.error = jest.fn();

describe('Test for Artist Cover Cards', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <CarouselArtistCard
        image={example.image}
        artistName={example.artistName}
        artworks={example.artworks}
      />,
    );
    expect(screen.queryByText(example.artistName)).toBeInTheDocument();
  });

  test('Should not render the componenmt without image prop', () => {
    render(
      <CarouselArtistCard
        artistName={example.artistName}
        artworks={example.artworks}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the componenmt without artistName prop', () => {
    render(
      <CarouselArtistCard
        image={example.image}
        artworks={example.artworks}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the componenmt without artworks prop', () => {
    render(
      <CarouselArtistCard
        image={example.image}
        artistName={example.artistName}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
