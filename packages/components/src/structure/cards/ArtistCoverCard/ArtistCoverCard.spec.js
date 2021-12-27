/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import ArtistCoverCard from './ArtistCoverCard';
import example from './ArtistCoverCard.example.json';

console.error = jest.fn();

describe('Test for Artist Cover Cards', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <ArtistCoverCard
        title={example.title}
        description={example.description}
        link={example.link}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the componenmt without title prop', () => {
    render(
      <ArtistCoverCard
        description={example.description}
        link={example.link}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the componenmt without description prop', () => {
    render(
      <ArtistCoverCard
        title={example.title}
        link={example.link}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the componenmt without link prop', () => {
    render(
      <ArtistCoverCard
        title={example.title}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
