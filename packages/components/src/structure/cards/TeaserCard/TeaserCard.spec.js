import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import TeaserCard from './TeaserCard';
import example from './TeaserCard.example.json';

describe('Tests for TeaserCard component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <TeaserCard
        type={example.type}
        title={example.title}
        subTitle={example.subTitle}
        imageUrl={example.imageUrl}
        link={example.link}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should have a link', () => {
    render(
      <TeaserCard
        type={example.type}
        title={example.title}
        subTitle={example.subTitle}
        imageUrl={example.imageUrl}
        link={example.link}
      />,
    );
    expect(screen.getByTestId('link')).toBeTruthy();
  });

  test('Should NOT have a link', () => {
    render(
      <TeaserCard
        type={example.type}
        title={example.title}
        subTitle={example.subTitle}
        imageUrl={example.imageUrl}
        link=""
      />,
    );
    expect(screen.queryByTestId(/link/i)).toBeNull();
  });
});
