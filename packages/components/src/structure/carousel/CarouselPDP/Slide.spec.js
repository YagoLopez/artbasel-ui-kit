import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Slide from './Slide';

const testElementId = 'mch-carousel-pdp-slide';

describe('Slide component', () => {
  test('render Carousel Slide', () => {
    render(<Slide><p>Slide</p></Slide>);
    const el = screen.getByTestId(testElementId);
    expect(el).toBeDefined();
  });
});
