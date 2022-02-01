import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import NavbarMobile from './NavbarMobile';
import menuData from '../Menudata.example.json';

describe('NavbarMobile component', () => {
  const isUserLoggedIn = true;
  const onLogout = jest.fn();
  const setVisibleMenu = jest.fn();
  const data = {
    menuData,
    profileData: { options: [] },
    setVisibleMenu,
    onLogout,
    userData: {
      name: 'User',
      vipStatus: false,
      isUserLoggedIn,
    },
    welcomeHeader: 'Welcome, ',
    loggedCollectionUrl: 'url',
    unloggedCollectionUrl: 'url',
  };
  describe('renderer', () => {
    test('should render component', () => {
      render(<NavbarMobile {...data} />);
    });
  });

  describe('actions', () => {
    test('when click menu button should render actions links', () => {
      render(<NavbarMobile {...data} />);
      const buttons = screen.getAllByTestId('mch-button-icon');

      buttons.map(el => fireEvent.click(el));

      expect(screen.getByText('Fairs')).toBeInTheDocument();
      expect(screen.getByText('Shop')).toBeInTheDocument();
      expect(screen.getByText('Viewing Rooms')).toBeInTheDocument();
      expect(screen.getByText('Editorial')).toBeInTheDocument();
      expect(screen.getByText('Galleries')).toBeInTheDocument();
    });
  });
});
