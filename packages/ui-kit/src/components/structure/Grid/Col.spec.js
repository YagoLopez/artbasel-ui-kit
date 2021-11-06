import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Col from './Col';

const testElementId = 'mch-col';

describe('Col component', () => {
  test('render button', () => {
    render(<Col>Col</Col>);
    const el = screen.getByTestId(testElementId);
    expect(el).toBeDefined();
  });
});
