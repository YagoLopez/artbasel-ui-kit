import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Accordion Header component', () => {
  test('render Accordion Header', () => {
    render(<Header><p>Header</p></Header>);
    const el = screen.getByText('Header');
    expect(el).toBeDefined();
  });
});
