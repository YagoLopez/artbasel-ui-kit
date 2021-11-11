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

    test('render id prop', () => {
      const id = 'foo';
      const label = 'label';
      const placeholder = 'placeholder';

      render(<Text id={id} label={label} placeholder={placeholder} />);

      const labelEl = screen.getByText(label);
      const inputEl = screen.getByPlaceholderText(placeholder);

      expect(labelEl).toHaveProperty('htmlFor', id);
      expect(inputEl).toHaveProperty('id', id);
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

    test('render validated icon', () => {
      render(<Text validated />);

      const trailingIcon = screen.getByTestId('text-icon');

      expect(trailingIcon).toBeInTheDocument();
    });

    test('render password eye icon', () => {
      render(<Text type="password" />);

      const eyeIcon = screen.getByTestId('text-icon');

      expect(eyeIcon).toHaveProperty('className', 'eye-hide-icon');
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

    test('change eye icon on click in eye', () => {
      render(<Text type="password" />);

      const eyeIcon = screen.getByTestId('text-icon');

      fireEvent.click(eyeIcon);

      expect(eyeIcon).toHaveProperty('className', 'eye-show-icon');
    });

    test('set type text on password when click in eye icon', () => {
      render(<Text type="password" placeholder="password" />);

      const eyeIcon = screen.getByTestId('text-icon');
      const input = screen.getByPlaceholderText('password');

      fireEvent.click(eyeIcon);

      expect(input).toHaveProperty('type', 'text');
    });
  });
});
