import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Text from './Text';

const testElementId = 'mch-text';

describe('Text component', () => {
  describe('renderer', () => {
    test('render Text component with default props', () => {
      render(<Text />);

      const el = screen.getByTestId(testElementId);
      const trailingIcon = screen.queryByTestId('trailing-icon');

      expect(el).toBeDefined();
      expect(trailingIcon).not.toBeInTheDocument();
    });

    test('render correct label', () => {
      const label = 'label';

      render(<Text label={label} />);

      const labelElement = screen.getByText(label);

      expect(labelElement).toBeInTheDocument();
    });

    test.each([['muted'], ['warning'], ['danger']])('render correct %s help text', (helpText) => {
      render(<Text helpText={helpText} helpTextType={helpText} />);

      const helpTextElement = screen.getByText(helpText);

      expect(helpTextElement).toHaveProperty('className', expect.stringContaining(`text-${helpText}`));
    });

    test('render trailingIcon', () => {
      render(<Text trailingIcon />);

      const trailingIcon = screen.getByTestId('trailing-icon');

      expect(trailingIcon).toBeInTheDocument();
    });
  });

  describe('actions', () => {
    test('call onChange when change value', () => {
      const onChangeSpy = jest.fn();
      const placeholder = 'foo';

      render(<Text onChange={onChangeSpy} placeholder={placeholder}/>);

      const input = screen.getByPlaceholderText(placeholder);

      fireEvent.change(input, { target: { value: 'bar' } });

      expect(onChangeSpy).toHaveBeenCalled();
      expect(input.value).toBe('bar');
    });
  });
});
