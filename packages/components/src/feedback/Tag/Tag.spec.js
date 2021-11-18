import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Tag from './Tag';

const testTagId = 'mch-tag';

describe('Tag component', () => {
  test('should render Tag', () => {
    render(<Tag label="Label" />);

    const element = screen.getByTestId(testTagId);

    expect(element).toBeDefined();
  });

  test('should render Tag Now Live', () => {
    render(<Tag label="Now Live" live />);

    const element = screen.getByText('Now Live');

    expect(element).toHaveClass('text-label-small');
  });

  test('should render Tag Curator’s Pick', () => {
    render(<Tag label="Name goes here" headerLabel="Curator’s Pick" />);

    const element = screen.getByText('Curator’s Pick');

    expect(element).toBeInTheDocument();
  });
});
