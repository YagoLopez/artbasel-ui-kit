import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

const testElementId = 'mch-icon';

describe('Icon component', () => {
  test('render button', () => {
    render(<Icon name="delete" />);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });
});
