/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import EventCard from './EventCard';
import example from './EventCard.example.json';

console.error = jest.fn();

describe('Tests for Gallery Card component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <EventCard
        date={example.date}
        title={example.title}
        description={example.description}
        image={example.image}
        location={example.location}
        button={example.button}
        schedule={example.schedule}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <EventCard
        date={example.date}
        title={example.title}
        description={example.description}
        location={example.location}
        button={example.button}
        schedule={example.schedule}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without title prop', () => {
    render(
      <EventCard
        date={example.date}
        description={example.description}
        image={example.image}
        location={example.location}
        button={example.button}
        schedule={example.schedule}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without location prop', () => {
    render(
      <EventCard
        date={example.date}
        title={example.title}
        description={example.description}
        image={example.image}
        button={example.button}
        schedule={example.schedule}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without description prop', () => {
    render(
      <EventCard
        date={example.date}
        title={example.title}
        image={example.image}
        location={example.location}
        button={example.button}
        schedule={example.schedule}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without button prop', () => {
    render(
      <EventCard
        date={example.date}
        title={example.title}
        description={example.description}
        location={example.location}
        image={example.image}
        schedule={example.schedule}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
