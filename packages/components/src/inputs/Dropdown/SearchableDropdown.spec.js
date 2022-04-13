import React from 'react';
import '@babel/polyfill';
import '@testing-library/jest-dom';
import {
  render, screen, fireEvent, waitFor, act,
} from '@testing-library/react';
import dropdownOptions from './CountryOptions.example.json';
import { Dropdown } from '.';

describe('Dropdown component', () => {
  describe('renderer', () => {
    test('should not render helpText if not set as prop', () => {
      render(<Dropdown isSearchable />);

      const helpText = screen.queryByTestId('help-text');

      expect(helpText).not.toBeInTheDocument();
    });

    describe('is dropdown searchable', () => {
      const placeholder = 'type a term';
      test('should render the correct options', async () => {
        render(
          <Dropdown
            isSearchable
            options={dropdownOptions}
            placeholder={placeholder}
          />,
        );

        const input = screen.getByPlaceholderText(placeholder);
        fireEvent.click(input);

        return waitFor(() => {
          for (let i = 1; i < dropdownOptions.length; i += 1) {
            expect(
              screen.getByText(dropdownOptions[i].label),
            ).toBeInTheDocument();
          }
        });
      });

      test.each([['muted'], ['warning'], ['danger']])(
        'render correct %s help text',
        (helpText) => {
          render(<Dropdown helpText={helpText} helpTextType={helpText} />);

          const helpTextElement = screen.getByText(helpText);

          expect(helpTextElement).toHaveProperty(
            'className',
            expect.stringContaining(`text-${helpText}`),
          );
        },
      );
    });
  });

  describe('actions', () => {
    describe('is dropdown searchable', () => {
      const placeholder = 'type a term';

      test('should call onChange on click in any option', async () => {
        const onChange = jest.fn();
        render(
          <Dropdown
            placeholder={placeholder}
            isSearchable
            onChange={onChange}
            options={dropdownOptions}
          />,
        );

        const input = screen.getByPlaceholderText(placeholder);
        fireEvent.click(input);

        const option2 = screen.getByText(dropdownOptions[1].label);

        await act(async () => {
          fireEvent.click(option2);
        });

        expect(onChange).toHaveBeenCalledWith(dropdownOptions[1].value);
      });
    });
  });
});
