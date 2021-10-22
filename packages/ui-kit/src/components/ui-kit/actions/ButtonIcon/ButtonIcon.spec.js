import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonIcon from './ButtonIcon';

const testElementId = 'mch-button-icon';

describe('Button Icon component', () => {
  test('Render button icon', () => {
    render(<ButtonIcon>X</ButtonIcon>);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  test('Button Icon does not break when no prop onClick is passed', () => {
    render(<ButtonIcon>X</ButtonIcon>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(el).toBeDefined();
  });

  test('Button icon disabled prop', () => {
    const onClickFn = jest.fn();

    render(<ButtonIcon disabled={true} onClick={onClickFn}>X</ButtonIcon>);

    const el = screen.getByTestId(testElementId);

    expect(el).toHaveAttribute('disabled');
    expect(el).toBeDisabled();

    fireEvent.click(el);
    expect(onClickFn).not.toHaveBeenCalled();
  });

  test('Click on button icon with onClick prop', () => {
    const onClickFn = jest.fn();
    render(<ButtonIcon onClick={onClickFn}>X</ButtonIcon>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(onClickFn).toHaveBeenCalled();
  });
});
