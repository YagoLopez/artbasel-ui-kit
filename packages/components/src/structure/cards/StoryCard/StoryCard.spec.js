import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import StoryCard from './StoryCard';
import example from './StoryCard.example';

console.error = jest.fn();

describe('Tests for Story Card component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <StoryCard
        {...example}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should render the component without image prop', () => {
    render(
      <StoryCard
        {...example}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        image={null}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the component without title prop', () => {
    render(
      <StoryCard
        {...example}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        title={null}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without subtitle prop', () => {
    render(
      <StoryCard
        {...example}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        subtitle={null}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without description prop', () => {
    render(
      <StoryCard
        {...example}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        description={null}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should render the component without storyLink or linkRenderer', () => {
    render(
      <StoryCard
        {...example}
        linkRenderer={null}
        storyLink={null}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });
});
