import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Tab from './Tab';

const testElementId = 'mch-tab';

describe('Tab component', () => {
  test('render Tab', () => {
    render(
      <Tab title="Home">
        <p>Content tab</p>
      </Tab>,
    );
    const el = screen.getByTestId(testElementId);
    expect(el).toBeDefined();
  });
});
