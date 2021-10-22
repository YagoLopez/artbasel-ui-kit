import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Radio from './Radio';

const testElementId = 'mch-radio';

describe('Radio component', () => {
  describe('Radio component', () => {
    test('render Radio', () => {
      render(<Radio></Radio>);

      const el = screen.getByTestId(testElementId);

      expect(el).toBeDefined();
    });

    test('Radio does not break when no prop onChange is passed', () => {
      render(<Radio></Radio>);

      const el = screen.getByTestId(testElementId);

      fireEvent.change(el);
      expect(el).toBeDefined();
    });

    test('Radio disabled prop', () => {
      const onChange = jest.fn();

      render(<Radio disabled={true} onChange={onChange}></Radio>);

      const el = screen.getByTestId(testElementId);

      expect(el).toHaveAttribute('disabled');

      fireEvent.change(el);
      expect(onChange).not.toHaveBeenCalled();
    });

    test('click on Radio with onClick prop', () => {
      const onChange = jest.fn();

      render(<Radio onChange={onChange}></Radio>);

      const el = screen.getByTestId(testElementId);

      fireEvent.click(el);
      expect(onChange).toHaveBeenCalled();
    });
  });
});
