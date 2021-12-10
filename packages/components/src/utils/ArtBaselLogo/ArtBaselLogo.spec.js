import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ArtBaselLogo from './ArtBaselLogo';

const testElementId = 'art-basel-logo';

describe('ArtBaselLogo component', () => {
  test('render ArtBaselLogo', () => {
    render(<ArtBaselLogo variant="default" color="dark" width={115} height={39} />);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeInTheDocument();
  });
});
