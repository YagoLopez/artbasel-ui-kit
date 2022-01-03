/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import CarouselArtistCover from './CarouselArtistCover';
import example from './CarouselArtistCover.example.json';

console.error = jest.fn();

describe('Test for Artist Cover Cards', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <CarouselArtistCover
        title={example.title}
        description={example.description}
        link={example.link}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the componenmt without title prop', () => {
    render(
      <CarouselArtistCover
        description={example.description}
        link={example.link}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the componenmt without description prop', () => {
    render(
      <CarouselArtistCover
        title={example.title}
        link={example.link}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the componenmt without link prop', () => {
    render(
      <CarouselArtistCover
        title={example.title}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
