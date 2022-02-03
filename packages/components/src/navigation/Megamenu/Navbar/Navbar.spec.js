import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

import menuData from '../Menudata.example.json';

const testElementId = 'mch-navbar';

const Component = (props) => (
  <Navbar
    menuData={menuData}
    profileData={{ options: [] }}
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
