import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';
import useRefEvents from './useRefEvents';

const useRefEventsReturnMock = {
  isFocus: false, hasValue: false,
};

jest.mock('./useRefEvents', () => jest.fn(() => useRefEventsReturnMock));

describe('Search component', () => {
  describe('renderer', () => {
    it('should render the correct placeholder prop', () => {
      const placeholder = 'placeholder';

      render(<Search placeholder={placeholder}/>);

      const input = screen.getByPlaceholderText(placeholder);

      expect(input).toBeInTheDocument();
    });

    it('should render the correct className prop', () => {
      const className = 'className';

      render(<Search className={className}/>);

      const input = screen.getByTestId('mch-search');

      expect(input).toHaveProperty('className', expect.stringContaining(className));
    });

    it('should render the correct value prop', () => {
      const value = 'foo';
      const placeholder = 'placeholder';

      render(<Search value="foo" placeholder={placeholder}/>);

      const input = screen.getByPlaceholderText(placeholder);

      expect(input).toHaveProperty('value', value);
    });

    it('should render the correct disabled prop', () => {
      const disabled = true;
      const placeholder = 'placeholder';

      render(<Search disabled={disabled} placeholder={placeholder}/>);

      const input = screen.getByPlaceholderText(placeholder);

      expect(input).toHaveProperty('disabled', disabled);
    });

    it('should set focus className if isFocus', () => {
      useRefEvents.mockReturnValueOnce({ ...useRefEventsReturnMock, isFocus: true });

      render(<Search />);

      const input = screen.getByTestId('mch-search');

      expect(input).toHaveProperty('className', expect.stringContaining('focus'));
    });

    it('should set focus className if input has value', () => {
      useRefEvents.mockReturnValueOnce({ ...useRefEventsReturnMock, hasValue: true });

      render(<Search value="foo" />);

      const input = screen.getByTestId('mch-search');

      expect(input).toHaveProperty('className', expect.stringContaining('focus'));
    });
  });

  describe('actions', () => {
    it('should call onChange with correct values', () => {
      const onChangeSpy = jest.fn();
      const placeholder = 'placeholder';

      render(<Search placeholder={placeholder} onChange={onChangeSpy} />);

      const input = screen.getByPlaceholderText(placeholder);

      fireEvent.change(input, { target: { value: 'foo' } });

      expect(onChangeSpy).toHaveBeenCalled();
    });

    it('should clear input when click on remove icon', () => {
      const value = 'foo';
      const placeholder = 'placeholder';

      render(<Search placeholder={placeholder} value={value} />);

      const input = screen.getByPlaceholderText(placeholder);

      expect(input).toHaveProperty('value', value);

      const removeIcon = screen.getByTestId('remove-search');

      fireEvent.click(removeIcon);

      expect(input).toHaveProperty('value', '');
    });
  });
});
