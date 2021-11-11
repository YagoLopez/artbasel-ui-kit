import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import ProductTile from './ProductTile';
import example from './ProductTile.example.json';

describe('Tests for Product Tile component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <ProductTile
        author={example.author}
        productName={example.productName}
        year={example.year}
        image={example.image}
        gallery={example.gallery}
      />,
    );
    expect(screen.queryByText(example.productName)).toBeInTheDocument();
  });

  test('Should truncate a long product name', () => {
    const { container } = render(
      <ProductTile
        author={example.author}
        productName={example.longName}
        year={example.year}
        image={example.image}
        gallery={example.gallery}
      />,
    );

    setTimeout(() => {
      const ellipsis = container.querySelector('.ellipsis');
      expect(ellipsis).toBeInTheDocument();
    }, 500);
  });
});
