/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import SpecialRoomCard from './SpecialRoomCard';
import example from './SpecialRoomCard.example.json';

console.error = jest.fn();

describe('Tests for SpecialRoom Card component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <SpecialRoomCard
        title={example.title}
        date={example.date}
        image={example.image}
        room={example.room}
        name={example.name}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <SpecialRoomCard
        title={example.title}
        date={example.date}
        room={example.room}
        name={example.name}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without title prop', () => {
    render(
      <SpecialRoomCard
        date={example.date}
        image={example.image}
        room={example.room}
        name={example.name}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without room prop', () => {
    render(
      <SpecialRoomCard
        title={example.title}
        date={example.date}
        image={example.image}
        name={example.name}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without date prop', () => {
    render(
      <SpecialRoomCard
        title={example.title}
        room={example.room}
        image={example.image}
        name={example.name}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without name prop', () => {
    render(
      <SpecialRoomCard
        title={example.title}
        date={example.date}
        image={example.image}
        room={example.room}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
