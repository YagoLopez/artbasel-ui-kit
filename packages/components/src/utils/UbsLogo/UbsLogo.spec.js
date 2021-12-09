import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UbsLogo from './UbsLogo';

const testElementId = 'ubs-logo';

describe('UbsLogo component', () => {
  test('render UbsLogo', () => {
    render(<UbsLogo color="red" width={110} height={36} />);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeInTheDocument();
  });
});
