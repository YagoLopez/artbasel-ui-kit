import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import LanguageFlyout from './LanguageFlyout';

const languageData = {
  languageHeader: 'Site Language',
  languageSelected: 'en',
  languageEntries: [
    {
      type: 'en',
      label: 'English',
    },
    {
      type: 'fr',
      label: 'Français',
    },
    {
      type: 'cn',
      label: '简体中文',
    },
  ],
  onLanguageClick: jest.fn(),
};

const Component = (props) => (
  <LanguageFlyout
    languageData={languageData}
    setIsVisible={jest.fn()}
    isVisible={false}
    {...props}
  />
);

describe('LanguageFlyout component', () => {
  describe('renderer', () => {
    it('should render guess icon', () => {
      render(<Component />);

      expect(screen.getByTestId('mch-button-icon')).toBeInTheDocument();
      expect(screen.getByTestId('mch-icon')).toBeInTheDocument();
    });

    it('should render menu when isVisible is true', () => {
      render(<Component isVisible />);

      const header = screen.getByText(languageData.languageHeader);

      expect(header).toBeInTheDocument();
    });
  });

  describe('actions', () => {
    describe('when click in world icon', () => {
      it('should call setIsVisible with correct values', () => {
        const setIsVisibleSpy = jest.fn();
        render(<Component setIsVisible={setIsVisibleSpy}/>);

        const languageIcon = screen.getByTestId('mch-button-icon');

        fireEvent.click(languageIcon);

        expect(setIsVisibleSpy).toHaveBeenCalledWith(true);
      });
    });

    describe('when click in Sign out action', () => {
      it('should call onLogout ', () => {
        const onClickSpy = jest.fn();
        const setIsVisibleSpy = jest.fn();

        languageData.onLanguageClick = onClickSpy;

        render(<Component isVisible
          languageData={ languageData }
          setIsVisible={ setIsVisibleSpy } />);

        const signOutAction = screen.getByText('English');

        fireEvent.click(signOutAction);

        expect(onClickSpy).toHaveBeenCalled();
        expect(setIsVisibleSpy).toHaveBeenCalledWith(null);
      });
    });
  });
});
