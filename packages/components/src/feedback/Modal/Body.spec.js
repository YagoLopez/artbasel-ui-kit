import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Body from './Body';

const testElementId = 'mch-modal-body';

describe('Body component', () => {
  test('render Modal Body', () => {
    render(<Body><p>body</p></Body>);
    const el = screen.getByTestId(testElementId);
    expect(el).toBeDefined();
  });
});
