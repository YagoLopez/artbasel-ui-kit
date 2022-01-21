/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import GalleryCard from './GalleryCard';
import example from './GalleryCard.example.json';

console.error = jest.fn();

describe('Tests for GalleryCard component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <GalleryCard
        name={example.name}
        locations={example.locations}
        image={example.image}
        link={example.link}
        description={example.description}
      />,
    );
    expect(screen.queryByText(example.name)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <GalleryCard
        name={example.name}
        link={example.link}
        description={example.description}
        locations={example.locations}
      />,
    );
    expect(console.error).toBeCalled();
  });
  test('Should not render the component name prop', () => {
    render(
      <GalleryCard
        image={example.image}
        link={example.link}
        description={example.description}
        locations={example.locations}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without link prop', () => {
    render(
      <GalleryCard
        name={example.name}
        image={example.image}
        description={example.description}
        locations={example.locations}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without description prop', () => {
    render(
      <GalleryCard
        name={example.name}
        link={example.link}
        image={example.image}
        locations={example.locations}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without headerLabel prop', () => {
    render(
      <GalleryCard
        artist={example.artist}
        link={example.link}
        image={example.image}
        description={example.description}
        ctaLabel={example.ctaLabel}
        locations={example.locations}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without ctaLabel prop', () => {
    render(
      <GalleryCard
        artist={example.artist}
        link={example.link}
        image={example.image}
        headerLabel={example.headerLabel}
        description={example.description}
        locations={example.locations}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without locations prop', () => {
    render(
      <GalleryCard
        artist={example.artist}
        link={example.link}
        image={example.image}
        headerLabel={example.headerLabel}
        description={example.description}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should show changed description after description prop change', () => {
    const { rerender } = render(
      <GalleryCard
        artist={example.artist}
        link={example.link}
        image={example.image}
        headerLabel={example.headerLabel}
        description={'aaaaaa'}
        ctaLabel={example.ctaLabel}
      />,
    );

    expect(screen.getAllByText('aaaaaa')[0]).toBeInTheDocument();

    rerender(
      <GalleryCard
        artist={example.artist}
        link={example.link}
        image={example.image}
        headerLabel={example.headerLabel}
        description={'bbbbb'}
        ctaLabel={example.ctaLabel}
      />,
    );

    expect(screen.getAllByText('bbbbb')[0]).toBeInTheDocument();
  });
});
