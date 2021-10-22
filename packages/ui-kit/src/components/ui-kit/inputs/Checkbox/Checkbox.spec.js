import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

const testElementId = 'mch-checkbox';

describe('Checkbox component', () => {
  test('render Checkbox', () => {
    render(<Checkbox></Checkbox>);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  test('Checkbox does not break when no prop onChange is passed', () => {
    render(<Checkbox></Checkbox>);

    const el = screen.getByTestId(testElementId);

    fireEvent.change(el);
    expect(el).toBeDefined();
  });

  test('Checkbox disabled prop', () => {
    const onChange = jest.fn();

    render(<Checkbox disabled={true} onChange={onChange}></Checkbox>);

    const el = screen.getByTestId(testElementId);

    expect(el).toHaveAttribute('disabled');

    fireEvent.change(el);
    expect(onChange).not.toHaveBeenCalled();
  });

  test('click on Checkbox with onChange prop', () => {
    const onChange = jest.fn();
    render(<Checkbox onChange={onChange}></Checkbox>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(onChange).toHaveBeenCalled();
  });
});
