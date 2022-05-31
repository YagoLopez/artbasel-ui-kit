import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from './Tabs';
import Tab from './Tab';

const testElementId = 'mch-tabs';

describe('Tabs component', () => {
  test('should render the tab component', () => {
    render(
      <Tabs>
        <Tab eventKey="home" title="Home">
          <p>Welcome to Home</p>
        </Tab>
      </Tabs>,
    );

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  test('should call onSelect when tab changes', () => {
    const onSelect = jest.fn();
    render(
      <Tabs onSelect={onSelect}>
        <Tab eventKey="home" title="Home">
          <p>Welcome to Home</p>
        </Tab>

        <Tab eventKey="category" title="Category">
          <p>Welcome to Category</p>
        </Tab>
      </Tabs>,
    );

    const secondTabs = screen.getAllByRole('tab')[1];

    fireEvent.click(secondTabs);

    expect(onSelect).toHaveBeenCalled();
  });

  test('should have default function for onSelect and return null', () => {
    const defaultOnSelectSpy = jest.spyOn(Tabs.defaultProps, 'onSelect');
    render(
      <Tabs>
        <Tab eventKey="home" title="Home">
          <p>Welcome to Home</p>
        </Tab>

        <Tab eventKey="category" title="Category">
          <p>Welcome to Category</p>
        </Tab>
      </Tabs>,
    );

    const secondTabs = screen.getAllByRole('tab')[1];

    fireEvent.click(secondTabs);

    expect(defaultOnSelectSpy).toHaveBeenCalled();
  });

  describe('divider colors', () => {
    test('should render with the default class when not specify the bottomDividerColor prop', () => {
      render(
        <Tabs>
          <Tab eventKey="home" title="Home">
            <p>Welcome to Home</p>
          </Tab>
        </Tabs>,
      );

      const tabs = screen.getByRole('tablist', { 'data-testid': `/${testElementId}/i` });

      expect(tabs.classList.contains('divider-color-grey-200')).toBeTruthy();
    });

    test('should render with the correct class when specify the bottomDividerColor prop', () => {
      render(
        <Tabs bottomDividerColor={'100'}>
          <Tab eventKey="home" title="Home">
            <p>Welcome to Home</p>
          </Tab>
        </Tabs>,
      );

      const tabs = screen.getByRole('tablist', { 'data-testid': `/${testElementId}/i` });

      expect(tabs.classList.contains('divider-color-grey-100')).toBeTruthy();
    });
  });
});
