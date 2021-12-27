/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import ArtistCard from './ArtistCard';
import example from './ArtistCard.example.json';

console.error = jest.fn();

describe('Test for Artist Cover Cards', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <ArtistCard
        image={example.image}
        artistName={example.artistName}
        artworks={example.artworks}
      />,
    );
    expect(screen.queryByText(example.artistName)).toBeInTheDocument();
  });

  test('Should not render the componenmt without image prop', () => {
    render(
      <ArtistCard
        artistName={example.artistName}
        artworks={example.artworks}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the componenmt without artistName prop', () => {
    render(
      <ArtistCard
        image={example.image}
        artworks={example.artworks}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the componenmt without artworks prop', () => {
    render(
      <ArtistCard
        image={example.image}
        artistName={example.artistName}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
