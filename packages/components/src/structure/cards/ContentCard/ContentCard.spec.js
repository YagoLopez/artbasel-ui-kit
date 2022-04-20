import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import ContentCard from './ContentCard';
import example from './ContentCard.example';

console.error = jest.fn();

describe('Tests for Story Card component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <ContentCard
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
      <ContentCard
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

  test('Should render the component without subtitle prop', () => {
    render(
      <ContentCard
        {...example}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        subtitle={null}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the component without description prop', () => {
    render(
      <ContentCard
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

  test('Should not render the component without a required type of a button prop', () => {
    render(
      <ContentCard
        {...example}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        button={{
          type: null,
          label: example.button.label,
        }}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
