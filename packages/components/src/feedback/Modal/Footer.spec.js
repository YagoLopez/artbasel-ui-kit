import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const testElementId = 'mch-modal-footer';

describe('Footer component', () => {
  test('render Modal Footer', () => {
    render(<Footer><p>footer</p></Footer>);
    const el = screen.getByTestId(testElementId);
    expect(el).toBeDefined();
  });
});
