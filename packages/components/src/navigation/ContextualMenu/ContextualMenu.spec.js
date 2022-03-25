/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import ContextualMenu from './ContextualMenu';

console.error = jest.fn();

describe('ContextualMenu component', () => {
  afterEach(cleanup);

  test('Render Contextual Menu component', () => {
    render(
      <ContextualMenu icon="context" data-testid="mch-contextual-menu">
        <ContextualMenu.Item>Label 1</ContextualMenu.Item>
        <ContextualMenu.Item>Label 2</ContextualMenu.Item>
      </ContextualMenu>,
    );

    expect(screen.getByTestId('mch-contextual-menu')).toBeInTheDocument();
  });

  test('Pass showLabel prop as false would render without labels', () => {
    render(
      <ContextualMenu
        icon="context"
        data-testid="mch-contextual-menu"
        showLabel={false}
      >
        <ContextualMenu.Item>Label 1</ContextualMenu.Item>
        <ContextualMenu.Item>Label 2</ContextualMenu.Item>
      </ContextualMenu>,
    );

    expect(screen.queryByText('Label 1')).not.toBeInTheDocument();
  });

  test('Passing more than 4 items would add a class for scrolling', () => {
    const { container } = render(
      <ContextualMenu
        icon="context"
        data-testid="mch-contextual-menu"
      >
        <ContextualMenu.Item>Label 1</ContextualMenu.Item>
        <ContextualMenu.Item>Label 2</ContextualMenu.Item>
        <ContextualMenu.Item>Label 3</ContextualMenu.Item>
        <ContextualMenu.Item>Label 4</ContextualMenu.Item>
        <ContextualMenu.Item>Label 5</ContextualMenu.Item>
      </ContextualMenu>,
    );

    const menu = container.querySelector('.mch-contextual-menu');
    expect(menu).toHaveClass('with-scroll');
  });

  test('Passing dark as theme prop would change the light for dark class', () => {
    const { container } = render(
      <ContextualMenu
        icon="context"
        data-testid="mch-contextual-menu"
        theme='dark'
      >
        <ContextualMenu.Item>Label 1</ContextualMenu.Item>
        <ContextualMenu.Item>Label 2</ContextualMenu.Item>
      </ContextualMenu>,
    );

    const menu = container.querySelector('.mch-contextual-menu');
    expect(menu).toHaveClass('dark');
  });

  test('Passing the position and alignment props would add them as classes', () => {
    const { container } = render(
      <ContextualMenu
        icon="context"
        data-testid="mch-contextual-menu"
        position='top'
        align='center'
      >
        <ContextualMenu.Item>Label 1</ContextualMenu.Item>
        <ContextualMenu.Item>Label 2</ContextualMenu.Item>
      </ContextualMenu>,
    );

    const menu = container.querySelector('.mch-contextual-menu');
    expect(menu).toHaveClass('top');
    expect(menu).toHaveClass('centered');
  });

  test('Not passing icon as prop would show an error', () => {
    render(
      <ContextualMenu
        data-testid="mch-contextual-menu"
      >
        <ContextualMenu.Item>Label 1</ContextualMenu.Item>
        <ContextualMenu.Item>Label 2</ContextualMenu.Item>
      </ContextualMenu>,
    );

    expect(console.error).toBeCalled();
  });
});
