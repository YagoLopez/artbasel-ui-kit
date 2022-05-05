import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Payment from './Payment';

const testElementId = 'mch-footer-payment';
const linkRenderer = (link, label, target) => <a href={link} target={target}>{label}</a>;

const paymentMethods = {
  title: 'Accepted payment methods',
  entries: [
    'visa',
    'master',
    'amex',
    'discover',
    'jcb',
  ],
};

const Component = () => (
  <Payment
    paymentData={paymentMethods}
    linkRenderer={linkRenderer}
  />
);

describe('Payment component', () => {
  test('render Payment', () => {
    render(<Component/>);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeInTheDocument();
  });
});
