import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Legal from './Legal';

const testElementId = 'mch-footer-legal';
const linkRenderer = (link, label, target) => <a href={link} target={target}>{label}</a>;

const legalData = {
  entries: [
    {
      label: 'Terms of use',
      link: '#',
    },
    {
      label: 'Data protection',
      link: '#',
    },
    {
      label: 'Terms of use online',
      link: '#',
    },
    {
      label: 'Viewing Rooms Terms and Conditions',
      link: '#',
    },
  ],
  copyright: '© by MCH Swiss Exhibition (Basel) Ltd',
};

const Component = () => (
  <Legal
    legalData={legalData}
    linkRenderer={linkRenderer}
  />
);

describe('Legal component', () => {
  test('render Legal', () => {
    render(<Component />);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeInTheDocument();
  });
});
