import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SnackbarContainer from './SnackbarContainer';

const testSnackbarId = 'mch-snackbar-container';

describe('Snackbar component', () => {
  test('should render snackbar', () => {
    render(<SnackbarContainer position="top-end" />);

    const element = screen.getByTestId(testSnackbarId);

    expect(element).toBeDefined();
  });
});
