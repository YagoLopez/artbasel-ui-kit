import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ParisPlusLogo from './ParisPlusLogo';

const testElementId = 'paris-plus-logo';

describe('ParisPlusLogo component', () => {
  test('render ParisPlusLogo', () => {
    render(<ParisPlusLogo variant="positive" width={115} height={50} />);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeInTheDocument();
  });
});
