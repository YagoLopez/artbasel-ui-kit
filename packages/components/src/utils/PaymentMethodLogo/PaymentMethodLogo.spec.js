import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PaymentMethodLogo from './PaymentMethodLogo';

const testElementId = 'mch-payment-logo';

describe('ArtBaselLogo component', () => {
  test('render ArtBaselLogo', () => {
    render(<PaymentMethodLogo name="amex" />);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeInTheDocument();
  });
});
