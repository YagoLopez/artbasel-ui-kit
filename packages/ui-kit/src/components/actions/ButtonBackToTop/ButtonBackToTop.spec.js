import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonBackToTop from './ButtonBackToTop';

const testElementId = 'mch-button-backtotop';

describe('Button Back to Top component', () => {
  test('Render button', () => {
    render(<ButtonBackToTop />);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  test('Button Back to Top does not break when no prop onClick is passed', () => {
    render(<ButtonBackToTop />);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(el).toBeDefined();
  });

  test('Click on button Back to Top with onClick prop', () => {
    const onClickFn = jest.fn();

    render(<ButtonBackToTop onClick={onClickFn} />);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(onClickFn).toHaveBeenCalled();
  });
});
