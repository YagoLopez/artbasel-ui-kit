import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Divider from './Divider';

describe('Tests for Divider Component', () => {
  test('Should render the component', () => {
    render(
      <Divider
        orientation="horizontal"
        size="s"
        color="mch-black"
      />,
    );
    expect(screen.getByTestId('mch-divider')).toBeDefined();
  });
});
