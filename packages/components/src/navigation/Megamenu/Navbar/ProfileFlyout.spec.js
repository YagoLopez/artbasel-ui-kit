import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import ProfileFlyout from './ProfileFlyout';

const profileData = {
  options: [
    {
      type: 'link',
      label: 'My Account',
      href: '/dashboard/my-account',
    },
    {
      type: 'link',
      label: 'My Gallery Dashboard',
      href: '/dashboard/gallery',
    },
    { type: 'action', label: 'Sign out' },
  ],
};

const Component = (props) => (
  <ProfileFlyout
    profileData={profileData}
    onLogout={jest.fn()}
    setIsVisible={jest.fn()}
    isVisible={false}
    userData={{
      name: 'User',
      vipStatus: false,
      isUserLoggedIn: false,
    }}
    welcomeHeader='Welcome, '
    {...props}
  />
);

describe('LoginFlyout component', () => {
  describe('renderer', () => {
    it('should render guess icon', () => {
      render(<Component />);

      expect(screen.getByTestId('mch-button-icon')).toBeInTheDocument();
      expect(screen.getByTestId('mch-icon')).toBeInTheDocument();
    });

    it('should render menu when isVisible is true', () => {
      render(<Component isVisible />);

      const signOutAction = screen.getByText('Sign out');

      expect(signOutAction).toBeInTheDocument();
    });
  });

  describe('actions', () => {
    describe('when click in guess icon', () => {
      it('should call setIsVisible with correct values', () => {
        const setIsVisibleSpy = jest.fn();
        render(<Component setIsVisible={setIsVisibleSpy}/>);

        const guestIcon = screen.getByTestId('mch-button-icon');

        fireEvent.click(guestIcon);

        expect(setIsVisibleSpy).toHaveBeenCalledWith(true);
      });
    });

    describe('when click in Sign out action', () => {
      it('should call onLogout ', () => {
        const onLogoutSpy = jest.fn();
        const setIsVisibleSpy = jest.fn();
        render(<Component isVisible onLogout={onLogoutSpy} setIsVisible={setIsVisibleSpy} />);

        const signOutAction = screen.getByText('Sign out');

        fireEvent.click(signOutAction);

        expect(onLogoutSpy).toHaveBeenCalled();
        expect(setIsVisibleSpy).toHaveBeenCalledWith(null);
      });
    });
  });
});