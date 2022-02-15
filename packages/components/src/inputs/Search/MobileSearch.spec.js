import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MobileSearch } from './MobileSearch';
import '@testing-library/jest-dom';

import useRefEvents from './useRefEvents';

const useRefEventsReturnMock = {
  isFocus: false,
  hasValue: false,
};

jest.mock('./useRefEvents', () => jest.fn(() => useRefEventsReturnMock));

describe('Mobile Search', () => {
  describe('renderer', () => {
    it('should render the correct placeholder prop', () => {
      const placeholder = 'placeholder';

      render(<MobileSearch placeholder={placeholder} />);

      const input = screen.getByPlaceholderText(placeholder);

      expect(input).toBeInTheDocument();
    });

    it('should render the correct className prop', () => {
      const className = 'className';

      render(<MobileSearch className={className} />);

      const input = screen.getByTestId('mch-search');

      expect(input).toHaveProperty(
        'className',
        expect.stringContaining(className),
      );
    });

    it('should render the correct value prop', () => {
      const value = 'foo';
      const placeholder = 'placeholder';

      render(<MobileSearch value="foo" placeholder={placeholder} />);

      const input = screen.getByPlaceholderText(placeholder);

      expect(input).toHaveProperty('value', value);
    });

    it('should render the correct disabled prop', () => {
      const disabled = true;
      const placeholder = 'placeholder';

      render(<MobileSearch placeholder={placeholder} disabled />);

      const input = screen.getByPlaceholderText(placeholder);
      fireEvent.click(input);

      expect(input).toHaveProperty('disabled', disabled);
    });

    it('should focus when clicked', () => {
      useRefEvents.mockReturnValueOnce({
        ...useRefEventsReturnMock,
        isFocus: true,
      });

      render(<MobileSearch />);

      const input = screen.getByTestId('mch-search');
      fireEvent.click(input);

      expect(input).toHaveProperty(
        'className',
        expect.stringContaining('focus'),
      );
    });

    it('should set focus className if input has value', () => {
      const placeholder = 'placeholder';
      useRefEvents.mockReturnValueOnce({ ...useRefEventsReturnMock, hasValue: true });

      render(<MobileSearch placeholder={placeholder} value="foo"/>); // value="foo"

      expect(screen.getByPlaceholderText(placeholder)).toHaveProperty('value', 'foo');
      expect(screen.getByTestId('mch-search')).toHaveProperty(
        'className',
        expect.stringContaining('focus'),
      );
    });
  });

  describe('actions', () => {
    beforeEach(() => {
      useRefEvents.mockReturnValue({
        ...useRefEventsReturnMock,
        isFocus: true,
        hasValue: true,
      });
    });
    it('should call onChange with correct values', () => {
      const onChangeSpy = jest.fn();
      const placeholder = 'placeholder';

      render(<MobileSearch placeholder={placeholder} onChange={onChangeSpy} />);

      const input = screen.getByPlaceholderText(placeholder);

      fireEvent.change(input, { target: { value: 'foo' } });

      expect(onChangeSpy).toHaveBeenCalled();
    });

    it('should clear input when click on remove icon', () => {
      const value = 'foo';
      const placeholder = 'placeholder';

      render(
        <MobileSearch
          placeholder={placeholder}
          value={value}
          onChange={() => {}}
        />,
      );

      const input = screen.getByPlaceholderText(placeholder);

      expect(input).toHaveProperty('value', value);

      const removeIcon = screen.getByTestId('remove-search');

      fireEvent.click(removeIcon);

      expect(input).toHaveProperty('value', '');
    });

    it('should go back when clicked on the backbutton', () => {
      const onChangeSpy = jest.fn();

      render(<MobileSearch onBackButton={onChangeSpy} />);

      const input = screen.getByTestId('mch-button-icon');

      fireEvent.click(input);

      expect(onChangeSpy).toHaveBeenCalled();
    });
  });
});
