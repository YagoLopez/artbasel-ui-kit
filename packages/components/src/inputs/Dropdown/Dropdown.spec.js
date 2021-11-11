import React from 'react';
import '@babel/polyfill';
import '@testing-library/jest-dom';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import dropdownOptions from './DropdownOptions.example.json';
import { Dropdown } from '.';

describe('Dropdown component', () => {
  describe('renderer', () => {
    test('should render the correct options', async () => {
      render(<Dropdown options={dropdownOptions} />);

      const input = screen.getByPlaceholderText('Select');
      fireEvent.click(input);

      return waitFor(() => {
        for (let i = 1; i < dropdownOptions.length; i += 1) {
          expect(screen.getByText(`Option ${i}`)).toBeInTheDocument();
        }
      });
    });

    test.each([['muted'], ['warning'], ['danger']])('render correct %s help text', (helpText) => {
      render(<Dropdown helpText={helpText} helpTextType={helpText} />);

      const helpTextElement = screen.getByText(helpText);

      expect(helpTextElement).toHaveProperty('className', expect.stringContaining(`text-${helpText}`));
    });
  });

  describe('actions', () => {
    test('should call onChange on click in any option', async () => {
      const onChange = jest.fn();
      render(<Dropdown onChange={onChange} options={dropdownOptions} />);

      const input = screen.getByPlaceholderText('Select');
      fireEvent.click(input);

      await waitFor(() => {
        const option2 = screen.getByText(dropdownOptions[1].label);
        fireEvent.click(option2);
      });

      expect(onChange).toHaveBeenCalledWith(dropdownOptions[1].value);
    });
  });
});
