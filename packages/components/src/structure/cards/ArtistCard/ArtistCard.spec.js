/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import ArtistCard from './ArtistCard';
import example from './ArtistCard.example.json';

console.error = jest.fn();

describe('Tests for ArtistCard component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <ArtistCard
        artist={example.artist}
        image={example.image}
        link={example.link}
        description={example.description}
        headerLabel={example.headerLabel}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(screen.queryByText(example.artist.name)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <ArtistCard
        artist={example.artist}
        link={example.link}
        description={example.description}
        headerLabel={example.headerLabel}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });
  test('Should not render the component artist prop', () => {
    render(
      <ArtistCard
        image={example.image}
        link={example.link}
        description={example.description}
        headerLabel={example.headerLabel}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without link prop', () => {
    render(
      <ArtistCard
        artist={example.artist}
        image={example.image}
        description={example.description}
        headerLabel={example.headerLabel}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without description prop', () => {
    render(
      <ArtistCard
        artist={example.artist}
        link={example.link}
        image={example.image}
        headerLabel={example.headerLabel}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without headerLabel prop', () => {
    render(
      <ArtistCard
        artist={example.artist}
        link={example.link}
        image={example.image}
        description={example.description}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without ctaLabel prop', () => {
    render(
      <ArtistCard
        artist={example.artist}
        link={example.link}
        image={example.image}
        headerLabel={example.headerLabel}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
