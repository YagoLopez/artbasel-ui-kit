import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Row from './Row';

const testElementId = 'mch-row';

describe('Row component', () => {
  test('render button', () => {
    render(<Row>Row</Row>);
    const el = screen.getByTestId(testElementId);
    expect(el).toBeDefined();
  });
});
