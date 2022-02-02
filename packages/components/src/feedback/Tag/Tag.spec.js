import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Tag from './Tag';

const testTagId = 'mch-tag';

describe('Tag component', () => {
  test('should render', () => {
    render(<Tag label="Label" />);
    const element = screen.getByTestId(testTagId);
    expect(element).toBeDefined();
  });

  test('should have class', () => {
    render(<Tag icon="certificate" iconAlign="left" label="Leading Icon" />);
    const element = screen.getByTestId(testTagId);
    expect(element).toHaveClass('type-label');
  });

  test('should be in document', () => {
    render(<Tag icon="certificate" iconAlign="left" label="Leading Icon" />);
    const element = screen.getByTestId(testTagId);
    expect(element).toBeInTheDocument();
  });

  test('should click', () => {
    const onClickFn = jest.fn();
    render(<Tag icon="certificate" iconAlign="left" label="Leading Icon" size="m" onClick={onClickFn} />);
    const element = screen.getByTestId(testTagId);
    fireEvent.click(element);
    expect(onClickFn).toHaveBeenCalled();
  });
});
