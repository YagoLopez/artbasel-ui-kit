/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import GalleryCard from './GalleryCard';
import example from './GalleryCard.example.json';

console.error = jest.fn();

describe('Tests for Gallery Card component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <GalleryCard
        gallery={example.gallery}
        title={example.title}
        description={example.description}
        image={example.image}
      />
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <GalleryCard
        gallery={example.gallery}
        title={example.title}
        description={example.description}
      />
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without title prop', () => {
    render(
      <GalleryCard
        gallery={example.gallery}
        image={example.image}
        description={example.description}
      />
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without gallery prop', () => {
    render(
      <GalleryCard
        image={example.image}
        title={example.title}
        description={example.description}
      />
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without description prop', () => {
    render(
      <GalleryCard
        gallery={example.gallery}
        title={example.title}
        image={example.image}
      />
    );
    expect(console.error).toBeCalled();
  });
});