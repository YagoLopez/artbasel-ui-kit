/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import StoryCard from './StoryCard';
import example from './StoryCard.example.json';

console.error = jest.fn();

describe('Tests for Story Card component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <StoryCard
        author={example.author}
        title={example.title}
        label={example.label}
        date={example.date}
        description={example.description}
        image={example.image}
        link={example.link}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <StoryCard
        author={example.author}
        label={example.label}
        title={example.title}
        date={example.date}
        description={example.description}
        link={example.link}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without title prop', () => {
    render(
      <StoryCard
        author={example.author}
        label={example.label}
        date={example.date}
        description={example.description}
        image={example.image}
        link={example.link}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without author prop', () => {
    render(
      <StoryCard
        title={example.title}
        label={example.label}
        date={example.date}
        description={example.description}
        image={example.image}
        link={example.link}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without label prop', () => {
    render(
      <StoryCard
        author={example.author}
        title={example.title}
        date={example.date}
        description={example.description}
        image={example.image}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without description prop', () => {
    render(
      <StoryCard
        author={example.author}
        label={example.label}
        title={example.title}
        date={example.date}
        image={example.image}
        link={example.link}
      />,
    );
    expect(console.error).toBeCalled();
  });
  test('Should not render the component without a required type of a button prop', () => {
    const button = {
      type: null,
      text: 'Button Text',
      link: '#',
    };

    render(
      <StoryCard
        author={example.author}
        label={example.label}
        title={example.title}
        date={example.date}
        image={example.image}
        link={example.link}
        button={button}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
