import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import EventCard from './EventCard';
import example from './EventCard.example';

console.error = jest.fn();

describe('Tests for Event Card component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <EventCard
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

  test('Should not render the component without image prop', () => {
    render(
      <EventCard
        {...example}
        image={null}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without eventLink prop', () => {
    render(
      <EventCard
        {...example}
        eventLink={null}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should render the component with type', () => {
    render(
      <EventCard
        {...example}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      />,
    );
    const el = screen.getByText('Exhibition');
    expect(el).toBeDefined();
  });

  test('Should not render the component without linkRenderer prop', () => {
    render(
      <EventCard
        {...example}
        linkRenderer={null}
      />,
    );
    const el = screen.getByText('Exhibition');
    expect(el).toBeDefined();
  });
});
