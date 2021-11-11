import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonFilter from './ButtonFilter';

const testElementId = 'mch-button-filter';

describe('Button Icon component', () => {
  test('Render button icon', () => {
    render(<ButtonFilter>X</ButtonFilter>);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  test('Button Icon does not break when no prop onClick is passed', () => {
    render(<ButtonFilter>X</ButtonFilter>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(el).toBeDefined();
  });

  test('Button icon disabled prop', () => {
    const onClickFn = jest.fn();

    render(<ButtonFilter disabled={true} onClick={onClickFn}>X</ButtonFilter>);

    const el = screen.getByTestId(testElementId);

    expect(el).toHaveAttribute('disabled');
    expect(el).toBeDisabled();

    fireEvent.click(el);
    expect(onClickFn).not.toHaveBeenCalled();
  });

  test('Click on button icon with onClick prop', () => {
    const onClickFn = jest.fn();

    render(<ButtonFilter onClick={onClickFn}>X</ButtonFilter>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(onClickFn).toHaveBeenCalled();
  });
});
