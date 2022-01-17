/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import ArtistCard from './ArtistCard';
import example from './ArtistCard.example.json';

console.error = jest.fn();

describe('Tests for ArtistCard component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <ArtistCard
        name={example.name}
        location={example.location}
        birthdate={example.birthdate}
        image={example.image}
        link={example.link}
        description={example.description}
        headerLabel={example.headerLabel}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(screen.queryByText(example.name)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <ArtistCard
        name={example.name}
        location={example.location}
        birthdate={example.birthdate}
        link={example.link}
        description={example.description}
        headerLabel={example.headerLabel}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });
  test('Should not render the component name prop', () => {
    render(
      <ArtistCard
        location={example.location}
        birthdate={example.birthdate}
        image={example.image}
        link={example.link}
        description={example.description}
        headerLabel={example.headerLabel}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without link prop', () => {
    render(
      <ArtistCard
        name={example.name}
        location={example.location}
        birthdate={example.birthdate}
        image={example.image}
        description={example.description}
        headerLabel={example.headerLabel}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without description prop', () => {
    render(
      <ArtistCard
        name={example.name}
        location={example.location}
        birthdate={example.birthdate}
        link={example.link}
        image={example.image}
        headerLabel={example.headerLabel}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without headerLabel prop', () => {
    render(
      <ArtistCard
        name={example.name}
        location={example.location}
        birthdate={example.birthdate}
        link={example.link}
        image={example.image}
        description={example.description}
        ctaLabel={example.ctaLabel}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without ctaLabel prop', () => {
    render(
      <ArtistCard
        name={example.name}
        location={example.location}
        birthdate={example.birthdate}
        link={example.link}
        image={example.image}
        headerLabel={example.headerLabel}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without location prop', () => {
    render(
      <ArtistCard
        name={example.name}
        ctaLabel={example.ctaLabel}
        birthdate={example.birthdate}
        link={example.link}
        image={example.image}
        headerLabel={example.headerLabel}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without birthdate prop', () => {
    render(
      <ArtistCard
        name={example.name}
        ctaLabel={example.ctaLabel}
        location={example.location}
        link={example.link}
        image={example.image}
        headerLabel={example.headerLabel}
        description={example.description}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
