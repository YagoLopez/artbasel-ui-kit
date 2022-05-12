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
        cta={[
          {
            id: 1,
            label: 'TextLink Label',
            contentLink: 'https://artbasel.com/#1',
            linkRenderer: (link, children) => (
              <a href={link} target="_blank" rel="noreferrer">
                {children}
              </a>
            ),
          },
        ]}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should render the component without image prop', () => {
    render(
      <ContentCard
        {...example}
        image={null}
        cta={[
          {
            id: 1,
            label: 'TextLink Label',
            contentLink: 'https://artbasel.com/#1',
            linkRenderer: (link, children) => (
              <a href={link} target="_blank" rel="noreferrer">
                {children}
              </a>
            ),
          },
        ]}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should render the component without subtitle prop', () => {
    render(
      <ContentCard
        {...example}
        subtitle={null}
        cta={[
          {
            id: 1,
            label: 'TextLink Label',
            contentLink: 'https://artbasel.com/#1',
            linkRenderer: (link, children) => (
              <a href={link} target="_blank" rel="noreferrer">
                {children}
              </a>
            ),
          },
        ]}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the component without description prop', () => {
    render(
      <ContentCard
        {...example}
        description={null}
        cta={[
          {
            id: 1,
            label: 'TextLink Label',
            contentLink: 'https://artbasel.com/#1',
            linkRenderer: (link, children) => (
              <a href={link} target="_blank" rel="noreferrer">
                {children}
              </a>
            ),
          },
        ]}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without a required prop in cta', () => {
    render(
      <ContentCard
        {...example}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        cta={[
          {
            id: null,
            label: 'TextLink Label',
            contentLink: 'https://artbasel.com/#1',
            linkRenderer: (link, children) => (
              <a href={link} target="_blank" rel="noreferrer">
                {children}
              </a>
            ),
          },
        ]}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
