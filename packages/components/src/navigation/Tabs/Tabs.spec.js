import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Tabs from './Tabs';
import Tab from './Tab';

const testElementId = 'mch-tabs';

describe('Tabs component', () => {
  test('render modal', () => {
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
});
