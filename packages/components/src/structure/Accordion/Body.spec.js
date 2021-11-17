import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Body from './Body';

describe('Accordion Body component', () => {
  test('render Accordion Body', () => {
    render(<Body><p>body</p></Body>);
    const el = screen.getByText('body');
    expect(el).toBeInTheDocument();
  });
});
