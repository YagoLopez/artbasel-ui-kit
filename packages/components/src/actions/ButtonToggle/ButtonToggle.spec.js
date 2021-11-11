import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonToggle from './ButtonToggle';

const testElementId = 'mch-button-toggle';

describe('ButtonToggle component', () => {
  test('render buttontoggle', () => {
    render(<ButtonToggle>Selection</ButtonToggle>);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  test('ButtonToggle does not break when no prop onClick is passed', () => {
    render(<ButtonToggle>Selection</ButtonToggle>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(el).toBeDefined();
  });

  test('buttontoggle disabled prop', () => {
    const onClickFn = jest.fn();

    render(
      <ButtonToggle disabled={true} onClick={onClickFn}>
        Selection
      </ButtonToggle>,
    );

    const el = screen.getByTestId(testElementId);
    expect(el).toHaveAttribute('disabled');
    expect(el).toBeDisabled();

    fireEvent.click(el);
    expect(onClickFn).not.toHaveBeenCalled();
  });

  test('buttontoggle have an icon with active prop', () => {
    const testElementIconId = 'toggle-icon';
    render(<ButtonToggle checked={true}>Selection</ButtonToggle>);

    const el = screen.getByTestId(testElementIconId);
    expect(el).toBeDefined();
  });

  test('click on buttontoggle with onClick prop', () => {
    const onClickFn = jest.fn();

    render(<ButtonToggle onClick={onClickFn}>Selection</ButtonToggle>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(onClickFn).toHaveBeenCalled();
  });
});
