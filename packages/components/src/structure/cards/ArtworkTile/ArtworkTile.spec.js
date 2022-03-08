import React from 'react';
import '@testing-library/jest-dom';
import {
  cleanup, render, screen,
} from '@testing-library/react';
import ArtworkTile from './ArtworkTile';
import { example } from './ArtworkTile.example';

console.error = jest.fn();

describe('Tests for ArtworkTile component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <ArtworkTile
        {...example}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      />,
    );
    expect(screen.getByText(example.artistName)).toBeInTheDocument();
  });

  test('Should not render the component without imageUrl prop', () => {
    render(
      <ArtworkTile
        {...example}
        imageUrl={null}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without linkRenderer prop', () => {
    render(<ArtworkTile {...example} linkRenderer={null} />);
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without artworkLink prop', () => {
    render(
      <ArtworkTile
        {...example}
        artworkLink={null}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should render the shows when page type is catalogue', () => {
    render(
      <ArtworkTile
        {...example}
        pageType="catalogue"
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      />,
    );
    expect(screen.getByText(example.showsData[0].name)).toBeInTheDocument();
  });

  test('Should find class when select mode is active', () => {
    render(
      <ArtworkTile
        {...example}
        selectMode={{ active: true }}
        collection={{ active: true } }
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      />,
    );
    expect(screen.getByTestId('mch-artwork-card')).toHaveClass('select-state');
  });
});
