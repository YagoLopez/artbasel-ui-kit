import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

const testElementId = 'mch-button';

describe('Button component', () => {
  test('render button', () => {
    render(<Button>Button</Button>);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  test('Button does not break when no prop onClick is passed', () => {
    render(<Button>Button</Button>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(el).toBeDefined();
  });

  test('button disabled prop', () => {
    const onClickFn = jest.fn();

    render(<Button disabled={true} onClick={onClickFn}>Button</Button>);

    const el = screen.getByTestId(testElementId);
    expect(el).toHaveAttribute('disabled');
    expect(el).toBeDisabled();

    fireEvent.click(el);
    expect(onClickFn).not.toHaveBeenCalled();
  });

  test('click on button with onClick prop', () => {
    const onClickFn = jest.fn();

    render(<Button onClick={onClickFn}>Button</Button>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(onClickFn).toHaveBeenCalled();
  });
});
