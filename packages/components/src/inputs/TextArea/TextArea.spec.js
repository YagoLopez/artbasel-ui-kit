import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from './TextArea';

const testElementId = 'mch-text-area-field';

describe('TextArea component', () => {
  describe('renderer', () => {
    test('render TextArea with default props', () => {
      render(<TextArea />);

      const el = screen.getByTestId(testElementId);
      expect(el).toBeInTheDocument();
    });

    test('render id prop', () => {
      const id = 'foo';
      const label = 'label';
      const dataTestId = 'textarea-input';

      render(<TextArea id={id} label={label} data-testid={dataTestId} />);

      const labelEl = screen.getByText(label);
      const inputEl = screen.getByTestId(dataTestId);

      expect(labelEl).toHaveProperty('htmlFor', id);
      expect(inputEl).toHaveProperty('id', id);
    });

    test('render label', () => {
      const label = 'label';

      render(<TextArea label={label} />);

      const labelElement = screen.getByText(label);

      expect(labelElement).toBeInTheDocument();
    });

    test.each([['muted'], ['warning'], ['danger']])('render correct %s help text', (helpText) => {
      render(<TextArea helpText={helpText} helpTextType={helpText} />);

      const helpTextElement = screen.getByText(helpText);

      expect(helpTextElement).toHaveProperty('className', expect.stringContaining(`text-${helpText}`));
    });

    test('should set value when is passed', () => {
      const dataTestId = 'textarea-input';
      render(<TextArea value="value1" data-testid={dataTestId}/>);

      const input = screen.getByTestId(dataTestId);

      expect(input.value).toEqual('value1');
    });

    test('should have name prop', () => {
      const name = 'bar';
      const dataTestId = 'textarea-input';

      render(<TextArea name={name} data-testid={dataTestId} />);

      const input = screen.getByTestId(dataTestId);

      expect(input).toHaveProperty('name', name);
    });
  });

  describe('textarea actions', () => {
    test('should call onBlur when blur on input', () => {
      const onBlurFn = jest.fn();
      const dataTestId = 'textarea-input';

      render(<TextArea onBlur={onBlurFn} data-testid={dataTestId} />);

      const input = screen.getByTestId(dataTestId);

      fireEvent.blur(input);

      expect(onBlurFn).toHaveBeenCalled();
    });

    test('should call onChange when change value', () => {
      const onChangeFn = jest.fn();
      const dataTestId = 'textarea-input';

      render(<TextArea onChange={onChangeFn} data-testid={dataTestId}/>);

      const input = screen.getByTestId(dataTestId);

      fireEvent.change(input, { target: { value: 'bar' } });

      expect(onChangeFn).toHaveBeenCalled();
    });
  });
});
