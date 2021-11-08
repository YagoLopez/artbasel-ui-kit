/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import ContentCard from './ContentCard';
import example from './ContentCard.example.json';

console.error = jest.fn();

describe('Tests for Content Card component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <ContentCard
        title={example.title}
        description={example.description}
        image={example.image}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <ContentCard
        title={example.title}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without title prop', () => {
    render(
      <ContentCard
        image={example.image}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without description prop', () => {
    render(
      <ContentCard
        image={example.image}
        title={example.title}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
