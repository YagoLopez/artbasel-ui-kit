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
    describe('is dropdown simple', () => {
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

    describe('is dropdown multi', () => {
      test('should render the correct toggle text', () => {
        render(
          <Dropdown
            options={dropdownOptions}
            isMultiselect
            value={[dropdownOptions[1].value, dropdownOptions[3].value]}
          />,
        );

        const input = screen.getByPlaceholderText('Select');

        expect(input).toHaveAttribute(
          'value',
          `${dropdownOptions[1].label}, +1`,
        );
      });
    });
  });

  describe('actions', () => {
    describe('is dropdown simple', () => {
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

    describe('is dropdown multi', () => {
      test('should clean toggle text on reset button', async () => {
        render(
          <Dropdown
            options={dropdownOptions}
            isMultiselect
            value={[dropdownOptions[1].value, dropdownOptions[3].value]}
          />,
        );

        await waitFor(() => {
          const input = screen.getByPlaceholderText('Select');
          fireEvent.click(input);
          const reset = screen.getByText('Reset');
          fireEvent.click(reset);
          expect(input).toHaveAttribute('value', '');
        });
      });

      test('should call onChange when click on apply button', async () => {
        const onChangeSpy = jest.fn();

        render(
          <Dropdown
            options={dropdownOptions}
            onChange={onChangeSpy}
            isMultiselect
          />,
        );

        await waitFor(() => {
          const input = screen.getByPlaceholderText('Select');
          fireEvent.click(input);
        });

        await waitFor(() => {
          const option1 = screen.getByText(dropdownOptions[1].label);
          fireEvent.click(option1);
          const option2 = screen.getByText(dropdownOptions[2].label);
          fireEvent.click(option2);
        });

        expect(onChangeSpy).not.toHaveBeenCalled();

        await waitFor(() => {
          const applyButton = screen.getByText('Apply');
          fireEvent.click(applyButton);
        });

        expect(onChangeSpy).toHaveBeenLastCalledWith([
          dropdownOptions[1].value,
          dropdownOptions[2].value,
        ]);
      });
    });
  });
});
