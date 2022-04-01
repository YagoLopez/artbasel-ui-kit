/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import {
  cleanup, render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import ContextualButton from './ContextualButton';

console.error = jest.fn();

describe('ContextualButton component', () => {
  afterEach(cleanup);

  test('Render Contextual Menu component', () => {
    render(
      <ContextualButton icon="context">
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
      </ContextualButton>,
    );

    expect(screen.getByTestId('mch-btn-contextual')).toBeInTheDocument();
  });

  test('Pass showLabel prop as false would render without labels', async () => {
    render(
      <ContextualButton
        icon="context"
        data-testid="mch-btn-contextual"
        showLabel={false}
      >
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
      </ContextualButton>,
    );

    const button = screen.getByTestId('mch-button-icon');
    await waitFor(() => fireEvent.click(button));

    expect(screen.queryByText('Label 1')).not.toBeInTheDocument();
  });

  test('Passing scrollbar prop as true would add a class for scrolling', async () => {
    const { container } = render(
      <ContextualButton
        icon="context"
        scrollbar={ true }
        data-testid="mch-btn-contextual"
      >
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
        <ContextualButton.Item>Label 3</ContextualButton.Item>
        <ContextualButton.Item>Label 4</ContextualButton.Item>
        <ContextualButton.Item>Label 5</ContextualButton.Item>
      </ContextualButton>,
    );

    const button = screen.getByTestId('mch-button-icon');
    await waitFor(() => fireEvent.click(button));

    const menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveClass('with-scroll');
  });

  test('Passing dark as theme prop would change the light for dark class', async () => {
    const { container } = render(
      <ContextualButton
        icon="context"
        data-testid="mch-btn-contextual"
        theme='dark'
      >
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
      </ContextualButton>,
    );

    const button = screen.getByTestId('mch-button-icon');
    await waitFor(() => fireEvent.click(button));

    const menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveClass('dark');
  });

  test('Passing the position and alignment props would add them as classes', async () => {
    const { container } = render(
      <ContextualButton
        icon="context"
        data-testid="mch-btn-contextual"
        position='top'
        align='center'
      >
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
      </ContextualButton>,
    );

    const button = screen.getByTestId('mch-button-icon');
    await waitFor(() => fireEvent.click(button));

    const menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveClass('top');
    expect(menu).toHaveClass('centered');
  });

  test('Not passing icon as prop would show an error', () => {
    render(
      <ContextualButton
        data-testid="mch-btn-contextual"
      >
        <ContextualButton.Item>Label 1</ContextualButton.Item>
        <ContextualButton.Item>Label 2</ContextualButton.Item>
      </ContextualButton>,
    );

    expect(console.error).toBeCalled();
  });
});
