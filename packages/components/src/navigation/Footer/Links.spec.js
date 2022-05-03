import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Links from './Links';

import footerData from './FooterData.example.json';

const testElementIds = ['mch-footer-links', 'mch-footer-mobile-links'];
const linkRenderer = (link, label, target) => <a href={link} target={target}>{label}</a>;

const Component = (props) => (
  <Links
    cols={props.cols}
    linkRenderer={linkRenderer}
  />
);

describe('Legal component', () => {
  test('render Legal', () => {
    render(<Component cols={footerData.cols}/>);

    testElementIds.every(testId => expect(screen.getByTestId(testId)).toBeInTheDocument());
  });
});
