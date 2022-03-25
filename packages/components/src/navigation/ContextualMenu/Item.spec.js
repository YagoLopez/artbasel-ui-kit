import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Item from './Item';

describe('Test for ContextualMenu.Item component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <Item data-testId="mch-contextual-item">Label 1</Item>,
    );

    expect(screen.getByTestId('mch-contextual-item')).toBeInTheDocument();
  });

  test('If showLabel context is not set or it is false, the labeled class should not be displayed', () => {
    const { container } = render(
      <Item data-testId="mch-contextual-item">Label 1</Item>,
    );

    const item = container.querySelector('.mch-contextual-item');

    expect(item).not.toHaveClass('labeled');
  });
});
