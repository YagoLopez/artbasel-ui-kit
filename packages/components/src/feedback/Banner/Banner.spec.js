import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

const testBannerId = 'mch-banner';
const statusArray = ['default', 'informational', 'success', 'warning', 'error'];

describe('Banner component', () => {
  test('should render banner', () => {
    render(<Banner />);

    const element = screen.getByTestId(testBannerId);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('default');
  });

  statusArray.forEach(status => {
    test('should render with status class', () => {
      render(<Banner status={status} />);

      const element = screen.getByTestId(testBannerId);

      expect(element).toBeInTheDocument();
      expect(element).toHaveClass(status);
    });
  });
});
