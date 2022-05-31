import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Tabs from './Tabs';
import Tab from './Tab';

describe('Tab component', () => {
  test('should render', () => {
    render(
      <Tabs>
        <Tab title="Home">
          <p>Content tab</p>
        </Tab>
      </Tabs>,
    );
    const el = screen.getByText('Content tab');
    expect(el).toBeInTheDocument();
  });
});
