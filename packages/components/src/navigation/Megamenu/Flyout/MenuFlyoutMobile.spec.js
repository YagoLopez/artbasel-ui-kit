import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import MenuFlyoutMobile from './MenuFlyoutMobile';
import dataExample from '../Menudata.example.json';

describe('MenuFlyoutMobile component', () => {
  const setVisibleMenu = jest.fn();
  const menuData = { ...dataExample };
  const data = {
    menuData, visibleMenu: 'Fairs', setVisibleMenu,
  };

  describe('renderer', () => {
    test('should render component', () => {
      render(<MenuFlyoutMobile {...data} />);
      expect(screen.getByText('All Fairs'));
    });
  });

  describe('actions', () => {
    test('when click on button then should call setVisibleMenu func', () => {
      render(<MenuFlyoutMobile {...data} />);
      const closeIcon = screen.getByTestId('mch-button-icon');

      fireEvent.click(closeIcon);

      expect(setVisibleMenu).toHaveBeenCalled();
    });
  });
});
