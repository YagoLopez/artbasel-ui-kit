import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButtonField from './RadioButtonField';

const testElementId = 'mch-radio-button-field';
const onChange = jest.fn();

const Component = (props) => (
  <RadioButtonField title="Option title 1" onChange={onChange} description="Option description 1" priceLabel="USD 000" {...props}/>
);

describe('RadioButtonField component', () => {
  describe('RadioButtonField component', () => {
    test('render RadioButtonField', () => {
      render(<Component />);

      const el = screen.getByTestId(testElementId);

      expect(el).toBeDefined();
    });

    test('RadioButtonField does not break when no prop onChange is passed', () => {
      render(<Component />);

      const el = screen.getByTestId(testElementId);

      fireEvent.change(el);
      expect(el).toBeDefined();
    });

    test('click on RadioButtonField with onChange prop', () => {
      render(<Component />);

      const el = screen.getByTestId(testElementId);

      fireEvent.click(el);
      expect(onChange).toHaveBeenCalled();
    });
  });
});
