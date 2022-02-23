import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import ProfileFlyout from './ProfileFlyout';

const linkRenderer = (link, label) => <a href={link}>{label}</a>;

const profileData = {
  entries: [
    {
      type: 'link',
      label: 'My Account',
      link: '/dashboard/my-account',
    },
    {
      type: 'link',
      label: 'My Gallery Dashboard',
      link: '/dashboard/gallery',
    },
    { type: 'action', label: 'Sign out' },
  ],
  onProfileLogout: jest.fn(),
};

const Component = (props) => (
  <ProfileFlyout
    profileData={profileData}
    setIsVisible={jest.fn()}
    isVisible={false}
    userData={{
      name: 'User',
      vipStatus: false,
      isUserLoggedIn: false,
    }}
    profileWelcomeHeader='Welcome, '
    linkRenderer={linkRenderer}
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

        profileData.onProfileLogout = onLogoutSpy;

        render(<Component isVisible
          profileData={ profileData }
          setIsVisible={ setIsVisibleSpy } />);

        const signOutAction = screen.getByText('Sign out');

        fireEvent.click(signOutAction);

        expect(onLogoutSpy).toHaveBeenCalled();
        expect(setIsVisibleSpy).toHaveBeenCalledWith(null);
      });
    });
  });
});
