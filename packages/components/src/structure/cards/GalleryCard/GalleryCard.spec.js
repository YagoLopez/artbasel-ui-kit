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
        gallery={example.gallery}
        image={example.image}
        link={example.link}
        description={example.description}
      />,
    );
    expect(screen.queryByText(example.gallery.name)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <GalleryCard
        gallery={example.gallery}
        link={example.link}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });
  test('Should not render the component gallery prop', () => {
    render(
      <GalleryCard
        image={example.image}
        link={example.link}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without link prop', () => {
    render(
      <GalleryCard
        gallery={example.gallery}
        image={example.image}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without description prop', () => {
    render(
      <GalleryCard
        gallery={example.gallery}
        link={example.link}
        image={example.image}
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
      />,
    );
    expect(console.error).toBeCalled();
  });
});
