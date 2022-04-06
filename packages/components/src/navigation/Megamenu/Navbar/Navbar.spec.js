import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

import menuData from '../Menudata.example.json';

const testElementId = 'mch-navbar';
const linkRenderer = (link, label) => <a href={link}>{label}</a>;

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
  <Navbar
    menuData={menuData}
    profileData={ { options: [] } }
    languageData={ languageData }
    visibleMenu={null}
    setVisibleMenu={jest.fn()}
    onLogout={jest.fn()}
    userData={{
      name: 'User',
      vipStatus: false,
      isUserLoggedIn: true,
    }}
    profileWelcomeHeader="Welcome, "
    loggedCollectionUrl='url'
    unloggedCollectionUrl='url'
    linkRenderer={linkRenderer}
    {...props}
  />
);

describe('Navbar component', () => {
  test('render Navbar', () => {
    render(<Component />);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeInTheDocument();
  });

  test('render Navbar without menuData', () => {
    render(<Component menuData={null} />);

    const el = screen.queryByTestId('mch-navbar');

    expect(el).not.toBeInTheDocument();
  });
});
