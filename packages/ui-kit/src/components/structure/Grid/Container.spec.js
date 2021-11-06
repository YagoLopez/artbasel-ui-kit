import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Container from './Container';

const testElementId = 'mch-container';

describe('Container component', () => {
  test('render button', () => {
    render(<Container>Container</Container>);
    const el = screen.getByTestId(testElementId);
    expect(el).toBeDefined();
  });
});
