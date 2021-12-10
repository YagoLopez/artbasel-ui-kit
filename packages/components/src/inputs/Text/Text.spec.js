import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Text from './Text';

const testElementId = 'mch-text';

describe('Text component', () => {
  describe('renderer', () => {
    it('render Text component with default props', () => {
      render(<Text />);

      const el = screen.getByTestId(testElementId);
      const trailingIcon = screen.queryByTestId('trailing-icon');

      expect(el).toBeDefined();
      expect(trailingIcon).not.toBeInTheDocument();
    });

    it('render id prop', () => {
      const id = 'foo';
      const label = 'label';
      const dataTestId = 'input';

      render(<Text id={id} label={label} data-testid={dataTestId} />);

      const labelEl = screen.getByText(label);
      const inputEl = screen.getByTestId(dataTestId);

      expect(labelEl).toHaveProperty('htmlFor', id);
      expect(inputEl).toHaveProperty('id', id);
    });

    it('render correct label', () => {
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

    it('render validated icon', () => {
      render(<Text validated />);

      const trailingIcon = screen.getByTestId('text-icon');

      expect(trailingIcon).toBeInTheDocument();
    });

    it('render password eye icon', () => {
      render(<Text type="password" />);

      const eyeIcon = screen.getByTestId('text-icon');

      expect(eyeIcon).toHaveProperty('className', 'eye-hide-icon');
    });

    it('should not render helpText if not set as prop', () => {
      render(<Text />);

      const helpText = screen.queryByTestId('help-text');

      expect(helpText).not.toBeInTheDocument();
    });

    it('should set value when passed in', () => {
      const dataTestId = 'input';
      render(<Text value="value1" data-testid={dataTestId}/>);

      const input = screen.getByTestId(dataTestId);

      expect(input.value).toEqual('value1');
    });

    it('should set name prop', () => {
      const name = 'bar';
      const dataTestId = 'input';

      render(<Text name={name} data-testid={dataTestId} />);

      const input = screen.getByTestId(dataTestId);

      expect(input).toHaveProperty('name', name);
    });
  });

  describe('actions', () => {
    it('should call onChange when change value', () => {
      const onChangeSpy = jest.fn();
      const dataTestId = 'input';

      render(<Text onChange={onChangeSpy} data-testid={dataTestId}/>);

      const input = screen.getByTestId(dataTestId);

      fireEvent.change(input, { target: { value: 'bar' } });

      expect(onChangeSpy).toHaveBeenCalled();
    });

    it('should call onBlur when blur on input', () => {
      const onBlurSpy = jest.fn();
      const dataTestId = 'input';

      render(<Text onBlur={onBlurSpy} data-testid={dataTestId} />);

      const input = screen.getByTestId(dataTestId);

      fireEvent.blur(input);

      expect(onBlurSpy).toHaveBeenCalled();
    });

    describe('type password', () => {
      it('change eye icon on click in eye', () => {
        render(<Text type="password" />);

        const eyeIcon = screen.getByTestId('text-icon');

        fireEvent.click(eyeIcon);

        expect(eyeIcon).toHaveProperty('className', 'eye-show-icon');
      });

      it('should set type text on password when click in eye icon', () => {
        render(<Text type="password" placeholder="password" />);

        const eyeIcon = screen.getByTestId('text-icon');
        const input = screen.getByPlaceholderText('password');

        fireEvent.click(eyeIcon);

        expect(input).toHaveProperty('type', 'text');
      });
    });
  });
});
