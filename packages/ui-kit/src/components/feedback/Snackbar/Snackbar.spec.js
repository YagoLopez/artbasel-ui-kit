import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Snackbar from './Snackbar';

const testSnackbarId = 'mch-snackbar';

describe('Snackbar component', () => {
  test('should render snackbar', () => {
    render(<Snackbar message="message" />);

    const element = screen.getByTestId(testSnackbarId);

    expect(element).toBeDefined();
  });

  test('when show error should render error state', () => {
    render(<Snackbar message="message" type="error" />);

    const element = screen.getByTestId(testSnackbarId);

    expect(element).toHaveProperty(
      'className',
      expect.stringContaining('bg-danger'),
    );
  });
});
