/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import ContextualButton from './ContextualButton';

console.error = jest.fn();

describe('ContextualButton component', () => {
  afterEach(cleanup);

  test('Render Contextual Menu component', () => {
    render(
      <ContextualButton icon="context" data-testid="mch-contextual-menu">
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
      </ContextualButton>,
    );

    expect(screen.getByTestId('mch-contextual-menu')).toBeInTheDocument();
  });

  test('Pass showLabel prop as false would render without labels', () => {
    render(
      <ContextualButton
        icon="context"
        data-testid="mch-contextual-menu"
        showLabel={false}
      >
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
      </ContextualButton>,
    );

    expect(screen.queryByText('Label 1')).not.toBeInTheDocument();
  });

  test('Passing more than 4 items would add a class for scrolling', () => {
    const { container } = render(
      <ContextualButton
        icon="context"
        data-testid="mch-contextual-menu"
      >
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
        <ContextualButton.Item>Label 3</ContextualButton.Item>
        <ContextualButton.Item>Label 4</ContextualButton.Item>
        <ContextualButton.Item>Label 5</ContextualButton.Item>
      </ContextualButton>,
    );

    const menu = container.querySelector('.mch-contextual-menu');
    expect(menu).toHaveClass('with-scroll');
  });

  test('Passing dark as theme prop would change the light for dark class', () => {
    const { container } = render(
      <ContextualButton
        icon="context"
        data-testid="mch-contextual-menu"
        theme='dark'
      >
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
      </ContextualButton>,
    );

    const menu = container.querySelector('.mch-contextual-menu');
    expect(menu).toHaveClass('dark');
  });

  test('Passing the position and alignment props would add them as classes', () => {
    const { container } = render(
      <ContextualButton
        icon="context"
        data-testid="mch-contextual-menu"
        position='top'
        align='center'
      >
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
      </ContextualButton>,
    );

    const menu = container.querySelector('.mch-contextual-menu');
    expect(menu).toHaveClass('top');
    expect(menu).toHaveClass('centered');
  });

  test('Not passing icon as prop would show an error', () => {
    render(
      <ContextualButton
        data-testid="mch-contextual-menu"
      >
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
      </ContextualButton>,
    );

    expect(console.error).toBeCalled();
  });
});
