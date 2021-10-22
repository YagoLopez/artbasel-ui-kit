import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './Switch';

const testElementId = 'mch-switch';

describe('Switch component', () => {
  test('render switch', () => {
    render(<Switch></Switch>);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  test('Switch does not break when no prop onChange is passed', () => {
    render(<Switch></Switch>);

    const el = screen.getByTestId(testElementId);

    fireEvent.change(el);
    expect(el).toBeDefined();
  });

  test('Switch disabled prop', () => {
    const onChange = jest.fn();

    render(<Switch disabled={true} onChange={onChange}></Switch>);

    const el = screen.getByTestId(testElementId);

    expect(el).toHaveAttribute('disabled');

    fireEvent.change(el);
    expect(onChange).not.toHaveBeenCalled();
  });

  test('click on text link with onClick prop', () => {
    const onChange = jest.fn();

    render(<Switch onChange={onChange}></Switch>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(onChange).toHaveBeenCalled();
  });
});
