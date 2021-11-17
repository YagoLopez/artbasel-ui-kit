import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Item from './Item';

describe('Accordion Item component', () => {
  test('render Accordion Item', () => {
    render(<Item/>);
    const el = screen.getByTestId('mch-accordion-item');
    expect(el).toBeDefined();
  });
});
